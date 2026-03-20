"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { TrendingUp, MapPin, Banknote, Building2 } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "Top Skills in Demand",
    description: "AI-ranked skills most sought by Eastern Cape employers, updated quarterly.",
    icon: TrendingUp,
    keyStat: "Software Dev #1",
    statLabel: "Most demanded skill",
    chartData: [
      { label: "Software Dev", value: 87 },
      { label: "Electrical Eng", value: 72 },
      { label: "Healthcare", value: 68 },
      { label: "Agriculture", value: 54 },
      { label: "Finance", value: 49 },
    ],
  },
  {
    id: 2,
    title: "Placement Rates by District",
    description: "Graduate placement success rates across all 8 Eastern Cape district municipalities.",
    icon: MapPin,
    keyStat: "74%",
    statLabel: "NMB placement rate (highest)",
    chartData: [
      { label: "NMB", value: 74 },
      { label: "Buffalo City", value: 61 },
      { label: "OR Tambo", value: 48 },
      { label: "Amathole", value: 43 },
      { label: "Chris Hani", value: 39 },
    ],
  },
  {
    id: 3,
    title: "Funding Utilisation",
    description: "Breakdown of SETA grant spending vs. available budget by programme sector.",
    icon: Banknote,
    keyStat: "65%",
    statLabel: "Overall utilisation rate",
    chartData: [
      { label: "ICT", value: 71 },
      { label: "Construction", value: 100 },
      { label: "Agriculture", value: 20 },
      { label: "Healthcare", value: 77 },
      { label: "Engineering", value: 0 },
    ],
  },
  {
    id: 4,
    title: "Employer Demand Trends",
    description: "Trends in employer postings and hiring activity on SkillsGrid over the past 12 months.",
    icon: Building2,
    keyStat: "+34%",
    statLabel: "YoY employer growth",
    chartData: [
      { label: "Q1 2025", value: 52 },
      { label: "Q2 2025", value: 63 },
      { label: "Q3 2025", value: 71 },
      { label: "Q4 2025", value: 85 },
      { label: "Q1 2026", value: 89 },
    ],
  },
];

export default function SetaReportsPage() {
  return (
    <>
      <DashboardHeader title="Reports" userName="Thabo Mokoena" notificationCount={5} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Regional Skills Reports</h2>
          <p className="text-sm text-slate-500 mt-0.5">AI-generated insights on the Eastern Cape skills ecosystem</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {reports.map((report) => {
            const Icon = report.icon;
            const maxValue = Math.max(...report.chartData.map((d) => d.value));
            return (
              <div key={report.id} className="bg-white border border-slate-200 rounded-sm p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                  >
                    <Icon size={18} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{report.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{report.description}</p>
                  </div>
                </div>

                {/* Key stat */}
                <div className="mb-4 p-3 bg-slate-50 rounded-sm inline-block">
                  <p className="text-2xl font-bold text-slate-900">{report.keyStat}</p>
                  <p className="text-xs text-slate-500">{report.statLabel}</p>
                </div>

                {/* Placeholder bar chart */}
                <div className="space-y-2">
                  {report.chartData.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-24 shrink-0 truncate">{item.label}</span>
                      <div className="flex-1 bg-slate-100 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{
                            width: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%`,
                            background: "linear-gradient(90deg, #34d399, #22d3ee)",
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-700 w-8 text-right">{item.value}{report.id !== 4 ? "%" : ""}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-4 w-full py-2 rounded-sm text-xs font-medium border border-slate-200 text-slate-600 hover:border-slate-300 transition-colors">
                  Download Full Report
                </button>
              </div>
            );
          })}
        </div>
      </PageWrapper>
    </>
  );
}
