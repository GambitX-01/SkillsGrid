"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { Sparkles, Building2, MapPin, ArrowRight } from "lucide-react";

type OpportunityType = "All" | "Job" | "Learnership" | "Internship" | "Bursary";

const matches = [
  {
    id: 1,
    title: "Junior Software Developer",
    organisation: "TechAfrica Solutions",
    location: "Port Elizabeth",
    type: "Job" as const,
    matchScore: 94,
    reason: "Your Python and JavaScript skills directly match the role requirements.",
  },
  {
    id: 2,
    title: "ICT Learnership (NQF 4)",
    organisation: "Telkom Foundation",
    location: "East London",
    type: "Learnership" as const,
    matchScore: 89,
    reason: "Your qualification level and technical aptitude align with programme criteria.",
  },
  {
    id: 3,
    title: "Data Analyst Internship",
    organisation: "Eastern Cape Development Corp",
    location: "Port Elizabeth",
    type: "Internship" as const,
    matchScore: 82,
    reason: "Strong overlap with your data science coursework and Excel proficiency.",
  },
  {
    id: 4,
    title: "NSFAS Bursary — Engineering",
    organisation: "NSFAS",
    location: "Eastern Cape (Remote)",
    type: "Bursary" as const,
    matchScore: 78,
    reason: "Meets academic and financial eligibility criteria based on your profile.",
  },
  {
    id: 5,
    title: "Systems Support Technician",
    organisation: "Border Kei Chamber of Business",
    location: "East London",
    type: "Job" as const,
    matchScore: 75,
    reason: "Networking and hardware troubleshooting skills noted in your profile.",
  },
  {
    id: 6,
    title: "Software Testing Internship",
    organisation: "Entelect East London",
    location: "East London",
    type: "Internship" as const,
    matchScore: 71,
    reason: "Interest in QA engineering and basic testing experience are strong indicators.",
  },
];

const filters: OpportunityType[] = ["All", "Job", "Learnership", "Internship", "Bursary"];

export default function LearnerMatchesPage() {
  const [activeFilter, setActiveFilter] = useState<OpportunityType>("All");

  const filtered = activeFilter === "All" ? matches : matches.filter((m) => m.type === activeFilter);

  return (
    <>
      <DashboardHeader title="My Matches" userName="Amahle Dlamini" notificationCount={3} />
      <PageWrapper>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">AI-Powered Matches</h2>
            <p className="text-sm text-slate-500 mt-0.5">Based on your skills, qualifications and location</p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-semibold text-slate-900 whitespace-nowrap transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
          >
            <Sparkles size={16} />
            Run AI Match
          </button>
        </div>

        {/* Filter bar */}
        <div className="flex gap-2 flex-wrap mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-sm text-sm font-medium border transition-all duration-150 ${
                activeFilter === f
                  ? "border-emerald-400 text-emerald-700 bg-emerald-50"
                  : "border-slate-200 text-slate-600 bg-white hover:border-slate-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Match cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((match) => (
            <div key={match.id} className="bg-white border border-slate-200 rounded-sm p-5 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                >
                  <span className="text-slate-900 text-xs font-bold">{match.matchScore}%</span>
                </div>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                  {match.type}
                </span>
              </div>

              <h3 className="font-semibold text-slate-900 text-sm mb-1">{match.title}</h3>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Building2 size={11} /> {match.organisation}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <MapPin size={11} /> {match.location}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">{match.reason}</p>

              <a
                href={`/learner/opportunities/opp-${match.id}`}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-sm text-xs font-semibold text-slate-900 transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
              >
                View & Apply <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
