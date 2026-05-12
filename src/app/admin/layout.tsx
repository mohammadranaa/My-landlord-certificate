import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s — Admin | My Landlord Certificate",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: add auth guard — redirect unauthenticated users to /admin/login
  return (
    <div className="min-h-screen flex bg-brand-warm-white">
      {/* Sidebar placeholder */}
      <aside className="w-64 bg-brand-charcoal text-brand-warm-white flex flex-col shrink-0">
        <div className="px-6 py-5 border-b border-white/10">
          <span className="font-bold text-sm tracking-wide uppercase">
            Admin
          </span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1 text-sm">
          <a
            href="/admin"
            className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/admin/bookings"
            className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Bookings
          </a>
          <a
            href="/admin/customers"
            className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Customers
          </a>
          <a
            href="/admin/engineers"
            className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Engineers
          </a>
          <a
            href="/admin/certificates"
            className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Certificates
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-border px-8 py-4 flex items-center justify-between">
          <span className="text-brand-charcoal font-semibold">
            My Landlord Certificate
          </span>
          <button className="text-sm text-brand-grey hover:text-brand-charcoal transition-colors">
            Sign out
          </button>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
