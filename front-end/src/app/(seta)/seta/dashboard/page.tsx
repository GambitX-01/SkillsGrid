"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatCard from "@/components/dashboard/StatCard";
import { GraduationCap, Building2, AlertTriangle, Banknote, MapPin } from "lucide-react";

const gapAlerts = [
  { id: 1, district: "OR Tambo", skill: "Software Development", severity: "high", count: 142 },
  { id: 2, district: "Mthatha", skill: "Electrical Engineering", severity: "high", count: 87 },
  { id: 3, district: "Buffalo City", skill: "Plumbing & Waterworks", severity: "medium", count: 64 },
  { id: 4, district: "Amathole", skill: "Healthcare (Nursing)", severity: "high", count: 201 },
  { id: 5, district: "Joe Gqabi", skill: "Agriculture & Farming", severity: "medium", count: 53 },
];

const districtStats = [
  { district: "Nelson Mandela Bay", learners: 312, employers: 28 },
  { district: "Buffalo City", learners: 241, employers: 19 },
  { district: "OR Tambo", learners: 198, employers: 11 },
  { district: "Amathole", learners: 147, employers: 9 },
  { district: "Chris Hani", learners: 123, employers: 8 },
  { district: "Sarah Baartman", learners: 89, employers: 7 },
  { district: "Alfred Nzo", learners: 76, employers: 5 },
  { district: "Joe Gqabi", learners: 54, employers: 4 },
];

export default function SetaDashboard() {
  return (
    <>
      <DashboardHeader title="Dashboard" userName="Thabo Mokoena" notificationCount={5} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">MERSETA Eastern Cape Overview</h2>
          <p className="text-slate-500 text-sm mt-1">Regional skills development intelligence dashboard</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <StatCard icon={GraduationCap} label="Registered Learners" value="1,240" change="+87 this quarter" changeType="positive" />
          <StatCard icon={Building2} label="Active Employers" value={89} change="+6 this month" changeType="positive" />
          <StatCard icon={AlertTriangle} label="Skill Gap Alerts" value={14} change="+3 new alerts" changeType="negative" />
          <StatCard icon={Banknote} label="Funding Disbursed" value="R2.4M" change="+R400k vs last quarter" changeType="positive" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Gap alerts */}
          <div className="bg-white border border-slate-200 rounded-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Recent Skill Gap Alerts</h3>
              <a href="/seta/reports" className="text-xs text-emerald-600 hover:text-emerald-500 font-medium">Full report</a>
            </div>
            <div className="space-y-3">
              {gapAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center gap-3 p-3 border border-slate-100 rounded-sm">
                  <AlertTriangle
                    size={16}
                    className={alert.severity === "high" ? "text-red-500 shrink-0" : "text-amber-500 shrink-0"}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">{alert.skill}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin size={10} /> {alert.district}</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${alert.severity === "high" ? "bg-red-50 text-red-600 border border-red-200" : "bg-amber-50 text-amber-600 border border-amber-200"}`}>
                    {alert.count} gap
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* District stats */}
          <div className="bg-white border border-slate-200 rounded-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">District Quick Stats</h3>
              <a href="/seta/districts" className="text-xs text-emerald-600 hover:text-emerald-500 font-medium">View all</a>
            </div>
            <div className="space-y-2">
              {districtStats.map((d) => (
                <div key={d.district} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <span className="text-sm text-slate-700">{d.district}</span>
                  <div className="flex gap-4 text-xs text-slate-500">
                    <span className="text-slate-700 font-medium">{d.learners} learners</span>
                    <span>{d.employers} employers</span>
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
