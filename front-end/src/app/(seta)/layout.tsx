import Sidebar, { NavItem } from "@/components/dashboard/Sidebar";
import { LayoutDashboard, Map, Banknote, ShieldCheck, BarChart3, Bell } from "lucide-react";

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/seta/dashboard", icon: LayoutDashboard },
  { label: "Districts", href: "/seta/districts", icon: Map },
  { label: "Funding", href: "/seta/funding", icon: Banknote },
  { label: "Compliance", href: "/seta/compliance", icon: ShieldCheck },
  { label: "Reports", href: "/seta/reports", icon: BarChart3 },
  { label: "Notifications", href: "/seta/notifications", icon: Bell },
];

export default function SetaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        role="SETA"
        navItems={navItems}
        userName="Thabo Mokoena"
        userEmail="tmokoena@merseta.org.za"
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
