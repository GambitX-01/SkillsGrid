"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { GraduationCap, Users, TrendingUp } from "lucide-react";

const programmes = [
  {
    id: 1,
    name: "ND: Information Technology",
    duration: "3 years",
    enrolled: 87,
    placementRate: 74,
    nqfLevel: "NQF 6",
  },
  {
    id: 2,
    name: "BSc Computer Science",
    duration: "4 years",
    enrolled: 54,
    placementRate: 68,
    nqfLevel: "NQF 7",
  },
  {
    id: 3,
    name: "ND: Accounting",
    duration: "3 years",
    enrolled: 112,
    placementRate: 58,
    nqfLevel: "NQF 6",
  },
  {
    id: 4,
    name: "ND: Civil Engineering",
    duration: "3 years",
    enrolled: 89,
    placementRate: 62,
    nqfLevel: "NQF 6",
  },
  {
    id: 5,
    name: "BSc Information Systems",
    duration: "4 years",
    enrolled: 41,
    placementRate: 71,
    nqfLevel: "NQF 7",
  },
  {
    id: 6,
    name: "Higher Certificate: Business Administration",
    duration: "1 year",
    enrolled: 63,
    placementRate: 44,
    nqfLevel: "NQF 5",
  },
];

export default function InstitutionProgrammesPage() {
  return (
    <>
      <DashboardHeader title="Programmes" userName="Dr. Noxolo Mthembu" notificationCount={4} />
      <PageWrapper>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Programmes</h2>
            <p className="text-sm text-slate-500 mt-0.5">Overview of all registered programmes and their performance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {programmes.map((prog) => (
            <div key={prog.id} className="bg-white border border-slate-200 rounded-sm p-5">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                >
                  <GraduationCap size={18} className="text-slate-900" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{prog.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{prog.nqfLevel} · {prog.duration}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 bg-slate-50 rounded-sm">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <Users size={11} /> Enrolled
                  </div>
                  <p className="text-lg font-bold text-slate-900">{prog.enrolled}</p>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-sm">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <TrendingUp size={11} /> Placement
                  </div>
                  <p className={`text-lg font-bold ${prog.placementRate >= 65 ? "text-emerald-600" : "text-amber-600"}`}>
                    {prog.placementRate}%
                  </p>
                </div>
              </div>

              <a
                href={`/institution/programmes/${prog.id}`}
                className="mt-4 w-full block text-center py-2 rounded-sm text-xs font-semibold border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
