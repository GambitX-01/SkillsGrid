"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { Search, ExternalLink } from "lucide-react";

const candidates = [
  {
    id: 1,
    name: "Amahle Dlamini",
    qualification: "ND: Information Technology",
    skills: ["JavaScript", "Python", "React", "SQL"],
    matchScore: 94,
    location: "Gqeberha",
  },
  {
    id: 2,
    name: "Luthando Mbeki",
    qualification: "BSc Computer Science",
    skills: ["Java", "Spring Boot", "MySQL", "Docker"],
    matchScore: 88,
    location: "East London",
  },
  {
    id: 3,
    name: "Nontobeko Sithole",
    qualification: "ND: Software Development",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    matchScore: 82,
    location: "Gqeberha",
  },
  {
    id: 4,
    name: "Siyabonga Dube",
    qualification: "Certificate: Web Development",
    skills: ["HTML/CSS", "JavaScript", "Vue.js"],
    matchScore: 71,
    location: "Mthatha",
  },
  {
    id: 5,
    name: "Ayanda Ntuli",
    qualification: "BSc Information Systems",
    skills: ["SQL", "Python", "Power BI", "Excel"],
    matchScore: 68,
    location: "East London",
  },
  {
    id: 6,
    name: "Thandeka Mokoena",
    qualification: "ND: IT: Systems Development",
    skills: ["C#", ".NET", "SQL Server", "Azure"],
    matchScore: 65,
    location: "Gqeberha",
  },
];

export default function EmployerCandidatesPage() {
  const [search, setSearch] = useState("");

  const filtered = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.qualification.toLowerCase().includes(search.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <DashboardHeader title="Candidates" userName="Sipho Ndlovu" notificationCount={2} />
      <PageWrapper>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Matched Candidates</h2>
            <p className="text-sm text-slate-500 mt-0.5">AI-matched candidates based on your active listings</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-sm mb-6">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-sm pl-9 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        {/* Candidate cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((candidate) => (
            <div key={candidate.id} className="bg-white border border-slate-200 rounded-sm p-5">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm shrink-0"
                  style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                >
                  {candidate.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{candidate.name}</p>
                  <p className="text-xs text-slate-500">{candidate.location}</p>
                </div>
                <div className="ml-auto">
                  <span className={`text-xs font-bold ${candidate.matchScore >= 85 ? "text-emerald-600" : "text-amber-600"}`}>
                    {candidate.matchScore}%
                  </span>
                  <p className="text-[10px] text-slate-400">match</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-3">{candidate.qualification}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {candidate.skills.map((skill) => (
                  <span key={skill} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-1.5 py-2 rounded-sm text-xs font-semibold border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-colors">
                <ExternalLink size={12} /> View Profile
              </button>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
