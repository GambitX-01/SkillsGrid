"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { ArrowLeft, Users, TrendingUp, Clock } from "lucide-react";

const programmeData: Record<string, {
  name: string;
  nqfLevel: string;
  duration: string;
  enrolled: number;
  placementRate: number;
  description: string;
  learners: { id: number; name: string; year: string; status: "active" | "matched" | "approved" | "pending"; matchScore: number }[];
}> = {
  "1": {
    name: "ND: Information Technology",
    nqfLevel: "NQF Level 6",
    duration: "3 years",
    enrolled: 87,
    placementRate: 74,
    description: "The National Diploma in Information Technology equips students with practical software development, networking and systems administration skills, aligned to industry demand in the Eastern Cape ICT sector.",
    learners: [
      { id: 1, name: "Amahle Dlamini", year: "Year 3", status: "active", matchScore: 94 },
      { id: 2, name: "Thandeka Mokoena", year: "Year 2", status: "active", matchScore: 72 },
      { id: 3, name: "Sipho Cele", year: "Year 3", status: "matched", matchScore: 85 },
      { id: 4, name: "Nomsa Dube", year: "Year 1", status: "pending", matchScore: 55 },
      { id: 5, name: "Lungelo Nxumalo", year: "Year 3", status: "approved", matchScore: 90 },
    ],
  },
};

const fallbackProgramme = {
  name: "Programme Details",
  nqfLevel: "NQF Level 6",
  duration: "3 years",
  enrolled: 0,
  placementRate: 0,
  description: "Programme details loading...",
  learners: [],
};

export default function ProgrammeDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "1";
  const programme = programmeData[id] ?? fallbackProgramme;

  return (
    <>
      <DashboardHeader title="Programme Detail" userName="Dr. Noxolo Mthembu" notificationCount={4} />
      <PageWrapper>
        <Link href="/institution/programmes" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6">
          <ArrowLeft size={15} /> Back to Programmes
        </Link>

        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 mb-6">
          <h1 className="text-xl font-bold text-slate-900 mb-2">{programme.name}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1.5"><Clock size={14} /> {programme.duration}</span>
            <span className="flex items-center gap-1.5"><Users size={14} /> {programme.enrolled} enrolled</span>
            <span className="flex items-center gap-1.5"><TrendingUp size={14} /> {programme.placementRate}% placement rate</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{programme.description}</p>
        </div>

        {/* Enrolled learners */}
        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="font-semibold text-slate-900">Enrolled Learners</h3>
          </div>
          {programme.learners.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Year</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Match Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {programme.learners.map((learner) => (
                    <tr key={learner.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-medium text-slate-900">{learner.name}</td>
                      <td className="py-3.5 px-4 text-slate-500">{learner.year}</td>
                      <td className="py-3.5 px-4"><StatusBadge status={learner.status} /></td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-600">{learner.matchScore}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="p-6 text-sm text-slate-400">No learner data available for this programme.</p>
          )}
        </div>
      </PageWrapper>
    </>
  );
}
