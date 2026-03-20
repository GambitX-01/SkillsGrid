"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { ExternalLink } from "lucide-react";

const applications = [
  {
    id: 1,
    opportunity: "Junior Software Developer",
    organisation: "TechAfrica Solutions",
    dateApplied: "14 Mar 2026",
    status: "pending" as const,
  },
  {
    id: 2,
    opportunity: "ICT Learnership (NQF 4)",
    organisation: "Telkom Foundation",
    dateApplied: "8 Mar 2026",
    status: "matched" as const,
  },
  {
    id: 3,
    opportunity: "Data Analyst Internship",
    organisation: "Eastern Cape Development Corp",
    dateApplied: "1 Mar 2026",
    status: "approved" as const,
  },
  {
    id: 4,
    opportunity: "Graduate Programme — Finance",
    organisation: "ECDC",
    dateApplied: "20 Feb 2026",
    status: "rejected" as const,
  },
  {
    id: 5,
    opportunity: "Systems Support Technician",
    organisation: "Border Kei Chamber",
    dateApplied: "10 Feb 2026",
    status: "closed" as const,
  },
];

export default function LearnerApplicationsPage() {
  return (
    <>
      <DashboardHeader title="Applications" userName="Amahle Dlamini" notificationCount={3} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">My Applications</h2>
          <p className="text-sm text-slate-500 mt-0.5">Track the status of your submitted applications</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-600 text-xs uppercase tracking-wide">Opportunity</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-600 text-xs uppercase tracking-wide">Organisation</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-600 text-xs uppercase tracking-wide">Date Applied</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-600 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-600 text-xs uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-900">{app.opportunity}</td>
                    <td className="py-3.5 px-4 text-slate-600">{app.organisation}</td>
                    <td className="py-3.5 px-4 text-slate-500">{app.dateApplied}</td>
                    <td className="py-3.5 px-4">
                      <StatusBadge status={app.status} />
                    </td>
                    <td className="py-3.5 px-4">
                      <button className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-500 font-medium">
                        <ExternalLink size={12} /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
