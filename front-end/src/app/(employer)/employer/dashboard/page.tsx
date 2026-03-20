"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Briefcase, Users, Sparkles, CheckCircle2 } from "lucide-react";

const recentApplications = [
  { id: 1, candidate: "Amahle Dlamini", opportunity: "Junior Software Developer", date: "14 Mar 2026", status: "pending" as const },
  { id: 2, candidate: "Luthando Mbeki", opportunity: "Junior Software Developer", date: "13 Mar 2026", status: "matched" as const },
  { id: 3, candidate: "Nontobeko Sithole", opportunity: "ICT Support Technician", date: "11 Mar 2026", status: "approved" as const },
  { id: 4, candidate: "Siyabonga Dube", opportunity: "ICT Support Technician", date: "10 Mar 2026", status: "rejected" as const },
  { id: 5, candidate: "Ayanda Ntuli", opportunity: "Graduate Intern", date: "8 Mar 2026", status: "pending" as const },
];

const activeListings = [
  { id: 1, title: "Junior Software Developer", type: "Job", applicants: 18, closing: "15 Apr 2026" },
  { id: 2, title: "ICT Support Technician", type: "Job", applicants: 23, closing: "20 Apr 2026" },
  { id: 3, title: "Graduate Intern — Data", type: "Internship", applicants: 6, closing: "30 Apr 2026" },
];

export default function EmployerDashboard() {
  return (
    <>
      <DashboardHeader title="Dashboard" userName="Sipho Ndlovu" notificationCount={2} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Welcome back, Sipho</h2>
          <p className="text-slate-500 text-sm mt-1">Here&apos;s an overview of your recruitment activity.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Briefcase} label="Active Listings" value={5} change="+1 this month" changeType="positive" />
          <StatCard icon={Users} label="Total Applicants" value={47} change="+12 this week" changeType="positive" />
          <StatCard icon={Sparkles} label="Matched Candidates" value={23} />
          <StatCard icon={CheckCircle2} label="Positions Filled" value={2} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Recent Applications */}
          <div className="xl:col-span-2 bg-white border border-slate-200 rounded-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Recent Applications</h3>
              <a href="/employer/candidates" className="text-xs text-emerald-600 hover:text-emerald-500 font-medium">View all</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Candidate</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Opportunity</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">{app.candidate}</td>
                      <td className="py-3 px-4 text-slate-600">{app.opportunity}</td>
                      <td className="py-3 px-4 text-slate-500">{app.date}</td>
                      <td className="py-3 px-4"><StatusBadge status={app.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Active Listings */}
          <div className="bg-white border border-slate-200 rounded-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Active Listings</h3>
              <a href="/employer/opportunities" className="text-xs text-emerald-600 hover:text-emerald-500 font-medium">Manage</a>
            </div>
            <div className="space-y-3">
              {activeListings.map((listing) => (
                <div key={listing.id} className="p-3 border border-slate-100 rounded-sm">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-slate-900 flex-1">{listing.title}</p>
                    <span className="text-xs text-slate-500 ml-2 shrink-0">{listing.type}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{listing.applicants} applicants · Closes {listing.closing}</p>
                </div>
              ))}
            </div>
            <a
              href="/employer/post-opportunity"
              className="mt-4 w-full flex items-center justify-center py-2.5 rounded-sm text-xs font-semibold text-slate-900 transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
            >
              + Post New Opportunity
            </a>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
