"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { ArrowLeft, MapPin, Calendar, Users, ExternalLink } from "lucide-react";

const applicants = [
  { id: 1, name: "Amahle Dlamini", qualification: "ND: Information Technology", matchScore: 94, status: "pending" as const },
  { id: 2, name: "Luthando Mbeki", qualification: "BSc Computer Science", matchScore: 88, status: "matched" as const },
  { id: 3, name: "Nontobeko Sithole", qualification: "ND: Software Development", matchScore: 82, status: "approved" as const },
  { id: 4, name: "Siyabonga Dube", qualification: "Certificate: Web Development", matchScore: 71, status: "rejected" as const },
  { id: 5, name: "Ayanda Ntuli", qualification: "BSc Information Systems", matchScore: 68, status: "pending" as const },
];

export default function EmployerOpportunityDetailPage() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <DashboardHeader title="Opportunity Detail" userName="Sipho Ndlovu" notificationCount={2} />
      <PageWrapper>
        <Link href="/employer/opportunities" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6">
          <ArrowLeft size={15} /> Back to Listings
        </Link>

        {/* Opportunity header */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">Job</span>
            <StatusBadge status="active" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-3">Junior Software Developer (Listing #{id})</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Port Elizabeth</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Closes 15 Apr 2026</span>
            <span className="flex items-center gap-1.5"><Users size={14} /> 18 applicants</span>
          </div>
        </div>

        {/* Applicants */}
        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="font-semibold text-slate-900">Applicants</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Candidate</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Qualification</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Match Score</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {applicants.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-medium text-slate-900">{app.name}</td>
                    <td className="py-3.5 px-4 text-slate-600">{app.qualification}</td>
                    <td className="py-3.5 px-4">
                      <span className={`font-semibold ${app.matchScore >= 85 ? "text-emerald-600" : app.matchScore >= 70 ? "text-amber-600" : "text-slate-500"}`}>
                        {app.matchScore}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4"><StatusBadge status={app.status} /></td>
                    <td className="py-3.5 px-4">
                      <button className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-500 font-medium">
                        <ExternalLink size={12} /> View Profile
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
