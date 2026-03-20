import Sidebar, { NavItem } from "@/components/dashboard/Sidebar";
import { LayoutDashboard, Sparkles, Briefcase, UserCircle, ClipboardList, Bell } from "lucide-react";

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/learner/dashboard", icon: LayoutDashboard },
  { label: "My Matches", href: "/learner/matches", icon: Sparkles },
  { label: "Opportunities", href: "/learner/opportunities", icon: Briefcase },
  { label: "My Profile", href: "/learner/profile", icon: UserCircle },
  { label: "Applications", href: "/learner/applications", icon: ClipboardList },
  { label: "Notifications", href: "/learner/notifications", icon: Bell },
];

export default function LearnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        role="Learner"
        navItems={navItems}
        userName="Amahle Dlamini"
        userEmail="amahle@example.com"
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
