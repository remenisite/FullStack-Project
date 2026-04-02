import { Sidebar } from "@/components/admin/sidebar";
import { AdminClient } from "@/components/admin/admin-client";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar and Main Content */}
      <AdminClient>{children}</AdminClient>
    </div>
  );
}
