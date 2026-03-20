"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Layers, Users, Calendar } from "lucide-react";

const programmes = [
  { id: 1, name: "Agri-Tech Startup Accelerator", mentor: "Dr. Nadia Osman", enrolled: 9, status: "active" as const },
  { id: 2, name: "Township Retail Incubator", mentor: "Bongani Khumalo", enrolled: 14, status: "active" as const },
  { id: 3, name: "ICT Founders Bootcamp", mentor: "Sipho Mthembu", enrolled: 8, status: "active" as const },
  { id: 4, name: "Women in Business Programme", mentor: "Nomsa Dlamini", enrolled: 12, status: "active" as const },
];

const events = [
  { id: 1, title: "Pitch Night — Agri-Tech Cohort", date: "25 Mar 2026", time: "18:00", type: "Pitch" },
  { id: 2, title: "Mentor Session: Financial Modelling", date: "27 Mar 2026", time: "10:00", type: "Workshop" },
  { id: 3, title: "ICT Bootcamp Week 3 Kickoff", date: "1 Apr 2026", time: "09:00", type: "Session" },
  { id: 4, title: "Eastern Cape Startup Expo", date: "15 Apr 2026", time: "08:00", type: "Expo" },
];

export default function IncubatorDashboard() {
  return (
    <>
      <DashboardHeader title="Dashboard" userName="Zanele Khumalo" notificationCount={2} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Welcome, Zanele</h2>
          <p className="text-slate-500 text-sm mt-1">SBEC Incubator — Eastern Cape entrepreneurship hub</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatCard icon={Layers} label="Active Programmes" value={6} />
          <StatCard icon={Users} label="Enrolled Entrepreneurs" value={48} change="+6 this month" changeType="positive" />
          <StatCard icon={Users} label="Mentors Available" value={12} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Programmes */}
          <div className="bg-white border border-slate-200 rounded-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Active Programmes</h3>
              <a href="/incubator/programmes" className="text-xs text-emerald-600 hover:text-emerald-500 font-medium">View all</a>
            </div>
            <div className="space-y-3">
              {programmes.map((p) => (
                <div key={p.id} className="flex items-center gap-3 p-3 border border-slate-100 rounded-sm">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                  >
                    <Layers size={15} className="text-slate-900" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">{p.name}</p>
                    <p className="text-xs text-slate-500">{p.enrolled} enrolled · {p.mentor}</p>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming events */}
          <div className="bg-white border border-slate-200 rounded-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Upcoming Sessions</h3>
            </div>
            <div className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-3 border border-slate-100 rounded-sm">
                  <div className="w-9 h-9 rounded-sm bg-slate-100 flex items-center justify-center shrink-0">
                    <Calendar size={15} className="text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{event.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{event.date} at {event.time}</p>
                    <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full mt-1 inline-block">{event.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
