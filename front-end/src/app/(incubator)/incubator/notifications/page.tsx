"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { Users, Calendar, Bell, CheckCircle2 } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: Users,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-50",
    message: "3 new entrepreneurs have applied to the ICT Founders Bootcamp.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    icon: Calendar,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    message: "Reminder: Pitch Night for Agri-Tech Cohort is on 25 March at 18:00.",
    time: "Yesterday",
    read: false,
  },
  {
    id: 3,
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    message: "Bongani Khumalo completed 18 mentor sessions — milestone achieved!",
    time: "2 days ago",
    read: true,
  },
  {
    id: 4,
    icon: Bell,
    iconColor: "text-slate-400",
    iconBg: "bg-slate-100",
    message: "Green Economy Incubator programme is awaiting final approval before launch.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    icon: Bell,
    iconColor: "text-slate-400",
    iconBg: "bg-slate-100",
    message: "Eastern Cape Startup Expo registrations close 10 April 2026. Confirm your slot.",
    time: "5 days ago",
    read: true,
  },
];

export default function IncubatorNotificationsPage() {
  return (
    <>
      <DashboardHeader title="Notifications" userName="Zanele Khumalo" notificationCount={2} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
          <p className="text-sm text-slate-500 mt-0.5">Updates on programmes, mentors and entrepreneurs</p>
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
