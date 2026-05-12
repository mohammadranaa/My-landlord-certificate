import { cn } from "@/lib/utils";

export interface StatCardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
  className?: string;
}

export function StatCard({ icon, heading, description, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-border p-6 flex flex-col gap-3",
        className
      )}
    >
      <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
        {icon}
      </div>
      <h3 className="font-semibold text-brand-charcoal">{heading}</h3>
      <p className="text-sm text-brand-grey leading-relaxed">{description}</p>
    </div>
  );
}
