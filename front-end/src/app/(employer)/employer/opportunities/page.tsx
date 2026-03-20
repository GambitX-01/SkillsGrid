"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Edit2, ExternalLink } from "lucide-react";

const listings = [
  { id: 1, title: "Junior Software Developer", type: "Job", applicants: 18, closing: "15 Apr 2026", status: "active" as const },
  { id: 2, title: "ICT Support Technician", type: "Job", applicants: 23, closing: "20 Apr 2026", status: "active" as const },
  { id: 3, title: "Graduate Intern — Data Analysis", type: "Internship", applicants: 6, closing: "30 Apr 2026", status: "active" as const },
  { id: 4, title: "Finance Learnership", type: "Learnership", applicants: 0, closing: "25 Apr 2026", status: "pending" as const },
  { id: 5, title: "Operations Manager", type: "Job", applicants: 31, closing: "28 Feb 2026", status: "closed" as const },
];

export default function EmployerOpportunitiesPage() {
  return (
    <>
      <DashboardHeader title="My Listings" userName="Sipho Ndlovu" notificationCount={2} />
      <PageWrapper>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">My Listings</h2>
            <p className="text-sm text-slate-500 mt-0.5">Manage your posted opportunities</p>
          </div>
          <a
            href="/employer/post-opportunity"
            className="px-4 py-2.5 rounded-sm text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
          >
            + Post New
          </a>
        </div>

        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Title</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Applicants</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Closing</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {listings.map((listing) => (
                  <tr key={listing.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-medium text-slate-900">{listing.title}</td>
                    <td className="py-3.5 px-4 text-slate-500">{listing.type}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{listing.applicants}</td>
                    <td className="py-3.5 px-4 text-slate-500">{listing.closing}</td>
                    <td className="py-3.5 px-4"><StatusBadge status={listing.status} /></td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <button className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900">
                          <Edit2 size={12} /> Edit
                        </button>
                        <a href={`/employer/opportunities/${listing.id}`} className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-500">
                          <ExternalLink size={12} /> View
                        </a>
                      </div>
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
