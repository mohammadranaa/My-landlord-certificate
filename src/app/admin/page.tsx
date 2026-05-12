import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard" };

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-charcoal mb-6">
        Dashboard
      </h1>
      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Bookings this month", value: "—" },
          { label: "Certificates issued", value: "—" },
          { label: "Active engineers", value: "—" },
          { label: "Revenue", value: "—" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-border p-5">
            <p className="text-sm text-brand-grey">{stat.label}</p>
            <p className="text-2xl font-bold text-brand-charcoal mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
      <p className="text-sm text-brand-grey">Admin dashboard coming soon.</p>
    </div>
  );
}
