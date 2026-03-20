import Sidebar, { NavItem } from "@/components/dashboard/Sidebar";
import { LayoutDashboard, Layers, Users, Bell } from "lucide-react";

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/incubator/dashboard", icon: LayoutDashboard },
  { label: "Programmes", href: "/incubator/programmes", icon: Layers },
  { label: "Mentors", href: "/incubator/mentors", icon: Users },
  { label: "Notifications", href: "/incubator/notifications", icon: Bell },
];

export default function IncubatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        role="Incubator"
        navItems={navItems}
        userName="Zanele Khumalo"
        userEmail="zkhumalo@sbecseta.co.za"
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
