"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { MessageSquare } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Dr. Nadia Osman",
    expertise: ["AgriTech", "Business Strategy", "Funding"],
    availability: "active" as const,
    sessions: 24,
    bio: "PhD in Agricultural Economics. 12 years experience in startup acceleration and rural development.",
  },
  {
    id: 2,
    name: "Bongani Khumalo",
    expertise: ["Retail", "Supply Chain", "SMME Development"],
    availability: "active" as const,
    sessions: 18,
    bio: "Former retail executive turned entrepreneur coach. Expert in township economy activation.",
  },
  {
    id: 3,
    name: "Sipho Mthembu",
    expertise: ["Software", "Product Design", "Venture Capital"],
    availability: "active" as const,
    sessions: 31,
    bio: "Co-founder of two successful African tech startups. Advisor to multiple VC-backed companies.",
  },
  {
    id: 4,
    name: "Nomsa Dlamini",
    expertise: ["Women Entrepreneurship", "Finance", "Marketing"],
    availability: "active" as const,
    sessions: 22,
    bio: "Award-winning businesswoman and advocate for women-led enterprise development in South Africa.",
  },
  {
    id: 5,
    name: "Thandi Nkosi",
    expertise: ["Creative Industries", "Brand Building", "Digital Media"],
    availability: "active" as const,
    sessions: 9,
    bio: "Creative director and business coach specialising in the creative economy across Southern Africa.",
  },
  {
    id: 6,
    name: "Luyanda Jacobs",
    expertise: ["Legal", "Compliance", "IP Rights"],
    availability: "closed" as const,
    sessions: 14,
    bio: "Commercial attorney with expertise in startup legal structures, contracts and IP protection.",
  },
];

export default function IncubatorMentorsPage() {
  return (
    <>
      <DashboardHeader title="Mentors" userName="Zanele Khumalo" notificationCount={2} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Mentors</h2>
          <p className="text-sm text-slate-500 mt-0.5">Expert mentors supporting incubator entrepreneurs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white border border-slate-200 rounded-sm p-5">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-slate-900 font-bold shrink-0"
                  style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                >
                  {mentor.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 text-sm truncate">{mentor.name}</p>
                  <StatusBadge status={mentor.availability} />
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed mb-3">{mentor.bio}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {mentor.expertise.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{mentor.sessions} sessions completed</span>
                <button className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-500">
                  <MessageSquare size={12} /> Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
