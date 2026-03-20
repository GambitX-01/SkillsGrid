"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { GraduationCap, Building2, AlertTriangle } from "lucide-react";

const districts = [
  {
    id: 1,
    name: "Nelson Mandela Bay",
    description: "Gqeberha / Port Elizabeth",
    learners: 312,
    employers: 28,
    topGap: "Software Development",
    status: "active" as const,
  },
  {
    id: 2,
    name: "Buffalo City",
    description: "East London / King William's Town",
    learners: 241,
    employers: 19,
    topGap: "Plumbing & Waterworks",
    status: "active" as const,
  },
  {
    id: 3,
    name: "OR Tambo",
    description: "Mthatha / Lusikisiki",
    learners: 198,
    employers: 11,
    topGap: "Software Development",
    status: "active" as const,
  },
  {
    id: 4,
    name: "Amathole",
    description: "Bisho / Komani",
    learners: 147,
    employers: 9,
    topGap: "Healthcare (Nursing)",
    status: "active" as const,
  },
  {
    id: 5,
    name: "Joe Gqabi",
    description: "Aliwal North / Barkly East",
    learners: 54,
    employers: 4,
    topGap: "Agriculture & Farming",
    status: "active" as const,
  },
  {
    id: 6,
    name: "Sarah Baartman",
    description: "Graaff-Reinet / Uitenhage",
    learners: 89,
    employers: 7,
    topGap: "Electrical Engineering",
    status: "active" as const,
  },
  {
    id: 7,
    name: "Alfred Nzo",
    description: "Mount Ayliff / Kokstad",
    learners: 76,
    employers: 5,
    topGap: "Construction & Civil",
    status: "active" as const,
  },
  {
    id: 8,
    name: "Chris Hani",
    description: "Queenstown / Cofimvaba",
    learners: 123,
    employers: 8,
    topGap: "ICT Infrastructure",
    status: "active" as const,
  },
];

export default function SetaDistrictsPage() {
  return (
    <>
      <DashboardHeader title="Districts" userName="Thabo Mokoena" notificationCount={5} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Eastern Cape Districts</h2>
          <p className="text-sm text-slate-500 mt-0.5">Skills data across all 8 Eastern Cape district municipalities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {districts.map((district) => (
            <div key={district.id} className="bg-white border border-slate-200 rounded-sm p-5">
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                >
                  <span className="text-slate-900 font-bold text-xs">{district.name.split(" ").map(w => w[0]).join("").slice(0, 3)}</span>
                </div>
                <StatusBadge status={district.status} />
              </div>

              <h3 className="font-semibold text-slate-900 text-sm mb-0.5">{district.name}</h3>
              <p className="text-xs text-slate-400 mb-4">{district.description}</p>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2 bg-slate-50 rounded-sm">
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                    <GraduationCap size={11} /> Learners
                  </div>
                  <p className="text-base font-bold text-slate-900">{district.learners}</p>
                </div>
                <div className="p-2 bg-slate-50 rounded-sm">
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                    <Building2 size={11} /> Employers
                  </div>
                  <p className="text-base font-bold text-slate-900">{district.employers}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-amber-50 border border-amber-100 rounded-sm">
                <AlertTriangle size={13} className="text-amber-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-amber-600 font-medium uppercase tracking-wide">Top Skill Gap</p>
                  <p className="text-xs text-amber-800 font-semibold">{district.topGap}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
