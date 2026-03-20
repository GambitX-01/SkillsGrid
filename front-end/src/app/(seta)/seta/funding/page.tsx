"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";

const fundingOpportunities = [
  {
    id: 1,
    programme: "ICT Skills Development Grant",
    amount: "R 450 000",
    sector: "ICT",
    allocated: "R 320 000",
    available: "R 130 000",
    status: "active" as const,
  },
  {
    id: 2,
    programme: "Artisan Trade Learnership Fund",
    amount: "R 800 000",
    sector: "Construction",
    allocated: "R 800 000",
    available: "R 0",
    status: "closed" as const,
  },
  {
    id: 3,
    programme: "Agricultural Skills Bursary",
    amount: "R 250 000",
    sector: "Agriculture",
    allocated: "R 50 000",
    available: "R 200 000",
    status: "active" as const,
  },
  {
    id: 4,
    programme: "Healthcare Worker Development",
    amount: "R 620 000",
    sector: "Healthcare",
    allocated: "R 480 000",
    available: "R 140 000",
    status: "active" as const,
  },
  {
    id: 5,
    programme: "Engineering Graduate Support",
    amount: "R 350 000",
    sector: "Engineering",
    allocated: "R 0",
    available: "R 350 000",
    status: "pending" as const,
  },
  {
    id: 6,
    programme: "Township Entrepreneur Incubation",
    amount: "R 500 000",
    sector: "Business Services",
    allocated: "R 275 000",
    available: "R 225 000",
    status: "active" as const,
  },
];

export default function SetaFundingPage() {
  const totalAllocated = "R 1 925 000";
  const totalAvailable = "R 1 045 000";

  return (
    <>
      <DashboardHeader title="Funding" userName="Thabo Mokoena" notificationCount={5} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Funding Opportunities</h2>
          <p className="text-sm text-slate-500 mt-0.5">Track funding allocation and availability across sectors</p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border border-slate-200 rounded-sm p-4">
            <p className="text-xs text-slate-500 mb-1">Total Budget</p>
            <p className="text-xl font-bold text-slate-900">R 2 970 000</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-sm p-4">
            <p className="text-xs text-slate-500 mb-1">Total Allocated</p>
            <p className="text-xl font-bold text-emerald-600">{totalAllocated}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-sm p-4">
            <p className="text-xs text-slate-500 mb-1">Still Available</p>
            <p className="text-xl font-bold text-cyan-600">{totalAvailable}</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Programme</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Sector</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Total</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Allocated</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Available</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {fundingOpportunities.map((f) => (
                  <tr key={f.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-medium text-slate-900">{f.programme}</td>
                    <td className="py-3.5 px-4 text-slate-500">{f.sector}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{f.amount}</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-medium">{f.allocated}</td>
                    <td className="py-3.5 px-4 text-cyan-600 font-medium">{f.available}</td>
                    <td className="py-3.5 px-4"><StatusBadge status={f.status} /></td>
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
