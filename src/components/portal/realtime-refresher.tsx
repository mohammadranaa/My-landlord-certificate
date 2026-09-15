"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface Subscription {
  table: "jobs" | "certificates" | "job_diary";
  filter: string; // e.g. "client_id=eq.<uuid>" or "job_id=eq.<uuid>"
}

/**
 * Renders nothing — subscribes to Postgres Changes for the given tables and
 * calls router.refresh() on any insert/update/delete, so the surrounding
 * Server Component re-fetches fresh data. Relies on jobs/certificates/
 * job_diary already being in the supabase_realtime publication, and on RLS
 * to scope what this client can actually receive.
 */
export function PortalRealtimeRefresher({
  channelName,
  subscriptions,
}: {
  channelName: string;
  subscriptions: Subscription[];
}) {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    let channel = supabase.channel(channelName);

    for (const sub of subscriptions) {
      channel = channel.on(
        "postgres_changes",
        { event: "*", schema: "public", table: sub.table, filter: sub.filter },
        () => router.refresh(),
      );
    }

    channel.subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
    // Subscriptions are derived from stable route params (client/job id),
    // so re-subscribing only when the channel name changes is intentional.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelName]);

  return null;
}
