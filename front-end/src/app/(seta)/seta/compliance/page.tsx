"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { ExternalLink } from "lucide-react";

const institutions = [
  { id: 1, name: "Nelson Mandela University", lastReport: "28 Feb 2026", complianceScore: 92, status: "approved" as const },
  { id: 2, name: "University of Fort Hare", lastReport: "15 Feb 2026", complianceScore: 87, status: "approved" as const },
  { id: 3, name: "Walter Sisulu University", lastReport: "10 Jan 2026", complianceScore: 71, status: "pending" as const },
  { id: 4, name: "EC TVET College — East London", lastReport: "5 Mar 2026", complianceScore: 95, status: "approved" as const },
  { id: 5, name: "Buffalo City College", lastReport: "20 Dec 2025", complianceScore: 58, status: "rejected" as const },
  { id: 6, name: "Ikhala TVET College", lastReport: "1 Feb 2026", complianceScore: 79, status: "pending" as const },
  { id: 7, name: "Lovedale TVET College", lastReport: "12 Mar 2026", complianceScore: 88, status: "approved" as const },
];

export default function SetaCompliancePage() {
  return (
    <>
      <DashboardHeader title="Compliance" userName="Thabo Mokoena" notificationCount={5} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Compliance Monitoring</h2>
          <p className="text-sm text-slate-500 mt-0.5">Track reporting compliance across registered institutions</p>
        </div>

        {/* Summary pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="bg-white border border-slate-200 rounded-sm px-4 py-2 text-sm">
            <span className="text-slate-500">Total Institutions:</span> <span className="font-semibold text-slate-900">7</span>
          </div>
          <div className="bg-white border border-emerald-200 rounded-sm px-4 py-2 text-sm">
            <span className="text-slate-500">Compliant:</span> <span className="font-semibold text-emerald-600">4</span>
          </div>
          <div className="bg-white border border-amber-200 rounded-sm px-4 py-2 text-sm">
            <span className="text-slate-500">Pending:</span> <span className="font-semibold text-amber-600">2</span>
          </div>
          <div className="bg-white border border-red-200 rounded-sm px-4 py-2 text-sm">
            <span className="text-slate-500">Non-Compliant:</span> <span className="font-semibold text-red-600">1</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Institution</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Last Report</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Score</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {institutions.map((inst) => (
                  <tr key={inst.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-medium text-slate-900">{inst.name}</td>
                    <td className="py-3.5 px-4 text-slate-500">{inst.lastReport}</td>
                    <td className="py-3.5 px-4">
                      <span className={`font-bold ${inst.complianceScore >= 85 ? "text-emerald-600" : inst.complianceScore >= 65 ? "text-amber-600" : "text-red-500"}`}>
                        {inst.complianceScore}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4"><StatusBadge status={inst.status} /></td>
                    <td className="py-3.5 px-4">
                      <button className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-500 font-medium">
                        <ExternalLink size={12} /> View Report
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
