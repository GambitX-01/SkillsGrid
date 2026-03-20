"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { AlertTriangle, CheckCircle2, Bell, TrendingUp, Banknote } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: AlertTriangle,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    message: "Critical skill gap detected in OR Tambo — Software Development (142 unfilled positions).",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 2,
    icon: Banknote,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-50",
    message: "ICT Skills Development Grant — R130 000 still available. Closing 30 April 2026.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 3,
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    message: "Buffalo City College submitted their Q1 2026 skills report. Under review.",
    time: "Yesterday",
    read: false,
  },
  {
    id: 4,
    icon: TrendingUp,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    message: "Employer registrations up 34% year-on-year across the Eastern Cape.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 5,
    icon: Bell,
    iconColor: "text-slate-400",
    iconBg: "bg-slate-100",
    message: "Quarterly SETA skills report due 31 March 2026. Ensure all district data is captured.",
    time: "3 days ago",
    read: true,
  },
];

export default function SetaNotificationsPage() {
  return (
    <>
      <DashboardHeader title="Notifications" userName="Thabo Mokoena" notificationCount={3} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
          <p className="text-sm text-slate-500 mt-0.5">Alerts on skill gaps, compliance and funding</p>
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
