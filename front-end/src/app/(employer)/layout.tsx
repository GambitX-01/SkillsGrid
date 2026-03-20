import Sidebar, { NavItem } from "@/components/dashboard/Sidebar";
import { LayoutDashboard, PlusCircle, Briefcase, Users, Bell } from "lucide-react";

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/employer/dashboard", icon: LayoutDashboard },
  { label: "Post Opportunity", href: "/employer/post-opportunity", icon: PlusCircle },
  { label: "My Listings", href: "/employer/opportunities", icon: Briefcase },
  { label: "Candidates", href: "/employer/candidates", icon: Users },
  { label: "Notifications", href: "/employer/notifications", icon: Bell },
];

export default function EmployerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        role="Employer"
        navItems={navItems}
        userName="Sipho Ndlovu"
        userEmail="sipho@techafrica.co.za"
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
