"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { Users, CheckCircle2, Bell, AlertCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: Users,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-50",
    message: "5 new candidates matched to 'Junior Software Developer'.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 2,
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    message: "Your listing 'ICT Support Technician' has been approved and is now live.",
    time: "Yesterday",
    read: false,
  },
  {
    id: 3,
    icon: AlertCircle,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    message: "Listing 'Graduate Intern — Data' closes in 10 days.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 4,
    icon: Bell,
    iconColor: "text-slate-400",
    iconBg: "bg-slate-100",
    message: "Nontobeko Sithole accepted your interview invitation.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    icon: Bell,
    iconColor: "text-slate-400",
    iconBg: "bg-slate-100",
    message: "Welcome to SkillsGrid. Complete your company profile to attract better candidates.",
    time: "1 week ago",
    read: true,
  },
];

export default function EmployerNotificationsPage() {
  return (
    <>
      <DashboardHeader title="Notifications" userName="Sipho Ndlovu" notificationCount={2} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
          <p className="text-sm text-slate-500 mt-0.5">Updates on your listings, candidates and account</p>
        </div>

        <div className="space-y-2">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className={`bg-white border rounded-sm p-4 flex items-start gap-4 ${
                  n.read ? "border-slate-200" : "border-emerald-200 bg-emerald-50/30"
                }`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${n.iconBg}`}>
                  <Icon size={16} className={n.iconColor} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${n.read ? "text-slate-600" : "text-slate-900 font-medium"}`}>{n.message}</p>
                  <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                </div>
                {!n.read && <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-1.5" />}
              </div>
            );
          })}
        </div>
      </PageWrapper>
    </>
  );
}
