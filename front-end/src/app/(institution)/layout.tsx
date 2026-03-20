import Sidebar, { NavItem } from "@/components/dashboard/Sidebar";
import { LayoutDashboard, GraduationCap, BookOpen, Bell } from "lucide-react";

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/institution/dashboard", icon: LayoutDashboard },
  { label: "Learners", href: "/institution/learners", icon: GraduationCap },
  { label: "Programmes", href: "/institution/programmes", icon: BookOpen },
  { label: "Notifications", href: "/institution/notifications", icon: Bell },
];

export default function InstitutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        role="Institution"
        navItems={navItems}
        userName="Dr. Noxolo Mthembu"
        userEmail="nmthembu@ufh.ac.za"
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
