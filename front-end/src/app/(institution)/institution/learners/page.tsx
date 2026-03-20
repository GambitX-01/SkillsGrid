"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Search, ExternalLink } from "lucide-react";

const learners = [
  { id: 1, name: "Amahle Dlamini", programme: "ND: Information Technology", year: "Year 3", status: "active" as const, matchScore: 94 },
  { id: 2, name: "Luthando Mbeki", programme: "BSc Computer Science", year: "Year 2", status: "active" as const, matchScore: 88 },
  { id: 3, name: "Nontobeko Sithole", programme: "ND: Accounting", year: "Year 3", status: "matched" as const, matchScore: 76 },
  { id: 4, name: "Siyabonga Dube", programme: "ND: Civil Engineering", year: "Year 1", status: "active" as const, matchScore: 65 },
  { id: 5, name: "Ayanda Ntuli", programme: "BSc Information Systems", year: "Year 4", status: "approved" as const, matchScore: 91 },
  { id: 6, name: "Thandeka Mokoena", programme: "ND: Information Technology", year: "Year 2", status: "active" as const, matchScore: 72 },
  { id: 7, name: "Siphamandla Cele", programme: "BSc Computer Science", year: "Year 3", status: "matched" as const, matchScore: 85 },
  { id: 8, name: "Nomvula Dlamini", programme: "ND: Accounting", year: "Year 2", status: "active" as const, matchScore: 60 },
];

const programmes = ["All", "ND: Information Technology", "BSc Computer Science", "ND: Accounting", "ND: Civil Engineering", "BSc Information Systems"];

export default function InstitutionLearnersPage() {
  const [search, setSearch] = useState("");
  const [programmeFilter, setProgrammeFilter] = useState("All");

  const filtered = learners.filter((l) => {
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase());
    const matchProgramme = programmeFilter === "All" || l.programme === programmeFilter;
    return matchSearch && matchProgramme;
  });

  return (
    <>
      <DashboardHeader title="Learners" userName="Dr. Noxolo Mthembu" notificationCount={4} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Learners</h2>
          <p className="text-sm text-slate-500 mt-0.5">Manage and monitor enrolled learners</p>
        </div>

        {/* Search + filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-sm pl-9 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
          <select
            value={programmeFilter}
            onChange={(e) => setProgrammeFilter(e.target.value)}
            className="bg-white border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-emerald-400"
          >
            {programmes.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>

        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Programme</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Year</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Match Score</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((learner) => (
                  <tr key={learner.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-medium text-slate-900">{learner.name}</td>
                    <td className="py-3.5 px-4 text-slate-600 text-xs">{learner.programme}</td>
                    <td className="py-3.5 px-4 text-slate-500">{learner.year}</td>
                    <td className="py-3.5 px-4"><StatusBadge status={learner.status} /></td>
                    <td className="py-3.5 px-4 font-semibold text-emerald-600">{learner.matchScore}%</td>
                    <td className="py-3.5 px-4">
                      <button className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-500 font-medium">
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
