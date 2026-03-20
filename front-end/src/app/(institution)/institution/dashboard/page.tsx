"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { GraduationCap, BookOpen, CheckCircle2, Sparkles } from "lucide-react";

const learnerCohort = [
  { id: 1, name: "Amahle Dlamini", programme: "ND: Information Technology", year: "Year 3", status: "active" as const, matchScore: 94 },
  { id: 2, name: "Luthando Mbeki", programme: "BSc Computer Science", year: "Year 2", status: "active" as const, matchScore: 88 },
  { id: 3, name: "Nontobeko Sithole", programme: "ND: Accounting", year: "Year 3", status: "matched" as const, matchScore: 76 },
  { id: 4, name: "Siyabonga Dube", programme: "ND: Civil Engineering", year: "Year 1", status: "active" as const, matchScore: 65 },
  { id: 5, name: "Ayanda Ntuli", programme: "BSc Information Systems", year: "Year 4", status: "approved" as const, matchScore: 91 },
];

const programmes = [
  { id: 1, name: "ND: Information Technology", enrolled: 87, placements: 32 },
  { id: 2, name: "BSc Computer Science", enrolled: 54, placements: 18 },
  { id: 3, name: "ND: Accounting", enrolled: 112, placements: 9 },
  { id: 4, name: "ND: Civil Engineering", enrolled: 89, placements: 8 },
];

export default function InstitutionDashboard() {
  return (
    <>
      <DashboardHeader title="Dashboard" userName="Dr. Noxolo Mthembu" notificationCount={4} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Welcome, Dr. Mthembu</h2>
          <p className="text-slate-500 text-sm mt-1">Institutional overview — University of Fort Hare</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <StatCard icon={GraduationCap} label="Enrolled Learners" value="342" change="+18 this semester" changeType="positive" />
          <StatCard icon={BookOpen} label="Active Programmes" value={8} />
          <StatCard icon={CheckCircle2} label="Placements This Year" value={67} change="+12 vs last year" changeType="positive" />
          <StatCard icon={Sparkles} label="Avg Match Score" value="78%" change="+3% this year" changeType="positive" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Learner cohort */}
          <div className="xl:col-span-2 bg-white border border-slate-200 rounded-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Recent Learner Activity</h3>
              <a href="/institution/learners" className="text-xs text-emerald-600 hover:text-emerald-500 font-medium">View all</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Programme</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Match Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {learnerCohort.map((learner) => (
                    <tr key={learner.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">{learner.name}</td>
                      <td className="py-3 px-4 text-slate-600 text-xs">{learner.programme}</td>
                      <td className="py-3 px-4"><StatusBadge status={learner.status} /></td>
                      <td className="py-3 px-4 font-semibold text-emerald-600">{learner.matchScore}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Programmes */}
          <div className="bg-white border border-slate-200 rounded-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Top Programmes</h3>
              <a href="/institution/programmes" className="text-xs text-emerald-600 hover:text-emerald-500 font-medium">All</a>
            </div>
            <div className="space-y-3">
              {programmes.map((p) => (
                <div key={p.id} className="p-3 border border-slate-100 rounded-sm">
                  <p className="text-sm font-medium text-slate-900">{p.name}</p>
                  <div className="flex gap-4 mt-1 text-xs text-slate-500">
                    <span>{p.enrolled} enrolled</span>
                    <span className="text-emerald-600 font-medium">{p.placements} placements</span>
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
