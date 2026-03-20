"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Users, Clock, User } from "lucide-react";

const programmes = [
  {
    id: 1,
    name: "Agri-Tech Startup Accelerator",
    duration: "6 months",
    spotsAvailable: 3,
    mentor: "Dr. Nadia Osman",
    status: "active" as const,
    enrolled: 9,
    description: "Supporting agricultural entrepreneurs with technology-driven solutions for Eastern Cape farming communities.",
  },
  {
    id: 2,
    name: "Township Retail Incubator",
    duration: "4 months",
    spotsAvailable: 0,
    mentor: "Bongani Khumalo",
    status: "active" as const,
    enrolled: 14,
    description: "Helping township-based retailers formalise their businesses and access digital markets.",
  },
  {
    id: 3,
    name: "ICT Founders Bootcamp",
    duration: "3 months",
    spotsAvailable: 2,
    mentor: "Sipho Mthembu",
    status: "active" as const,
    enrolled: 8,
    description: "An intensive programme for tech founders building scalable products for the African market.",
  },
  {
    id: 4,
    name: "Women in Business Programme",
    duration: "8 months",
    spotsAvailable: 5,
    mentor: "Nomsa Dlamini",
    status: "active" as const,
    enrolled: 12,
    description: "Empowering women entrepreneurs through mentorship, funding access and business skills development.",
  },
  {
    id: 5,
    name: "Green Economy Incubator",
    duration: "6 months",
    spotsAvailable: 8,
    mentor: "TBD",
    status: "pending" as const,
    enrolled: 0,
    description: "Upcoming programme for sustainability and renewable energy startups in the Eastern Cape.",
  },
  {
    id: 6,
    name: "Creative Industries Hub",
    duration: "5 months",
    spotsAvailable: 4,
    mentor: "Thandi Nkosi",
    status: "active" as const,
    enrolled: 5,
    description: "Supporting creatives — designers, musicians and content creators — to build sustainable businesses.",
  },
];

export default function IncubatorProgrammesPage() {
  return (
    <>
      <DashboardHeader title="Programmes" userName="Zanele Khumalo" notificationCount={2} />
      <PageWrapper>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Programmes</h2>
            <p className="text-sm text-slate-500 mt-0.5">Manage incubator programmes and track enrolment</p>
          </div>
          <button
            className="px-4 py-2.5 rounded-sm text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
          >
            + New Programme
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {programmes.map((prog) => (
            <div key={prog.id} className="bg-white border border-slate-200 rounded-sm p-5 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <StatusBadge status={prog.status} />
                {prog.spotsAvailable > 0 ? (
                  <span className="text-xs font-medium text-cyan-600 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">
                    {prog.spotsAvailable} spots open
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
                    Full
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-slate-900 text-sm mb-2">{prog.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{prog.description}</p>

              <div className="space-y-1.5 text-xs text-slate-500">
                <p className="flex items-center gap-1.5"><Clock size={11} /> {prog.duration}</p>
                <p className="flex items-center gap-1.5"><User size={11} /> Mentor: {prog.mentor}</p>
                <p className="flex items-center gap-1.5"><Users size={11} /> {prog.enrolled} enrolled</p>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
