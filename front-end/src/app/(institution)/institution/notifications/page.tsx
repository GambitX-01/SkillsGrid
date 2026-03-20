"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { GraduationCap, CheckCircle2, Bell, AlertCircle, TrendingUp } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: GraduationCap,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-50",
    message: "12 final-year IT students have been matched to employer opportunities.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 2,
    icon: TrendingUp,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    message: "ND: Information Technology programme placement rate reached 74%.",
    time: "Yesterday",
    read: false,
  },
  {
    id: 3,
    icon: AlertCircle,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    message: "SETA compliance report due in 14 days. Please ensure all records are submitted.",
    time: "2 days ago",
    read: false,
  },
  {
    id: 4,
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    message: "Ayanda Ntuli successfully placed at Eastern Cape Development Corp.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    icon: Bell,
    iconColor: "text-slate-400",
    iconBg: "bg-slate-100",
    message: "New SETA funding round open — applications close 30 April 2026.",
    time: "5 days ago",
    read: true,
  },
];

export default function InstitutionNotificationsPage() {
  return (
    <>
      <DashboardHeader title="Notifications" userName="Dr. Noxolo Mthembu" notificationCount={3} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
          <p className="text-sm text-slate-500 mt-0.5">Institutional alerts, placements and compliance reminders</p>
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
