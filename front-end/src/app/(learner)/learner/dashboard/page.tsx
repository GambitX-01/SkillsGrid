"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import StatCard from "@/components/dashboard/StatCard";
import { Sparkles, Briefcase, Eye, UserCircle, Building2, MapPin, Clock, CheckCircle2, Star } from "lucide-react";

const topMatches = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "TechAfrica Solutions",
    location: "Port Elizabeth",
    matchScore: 94,
    type: "Job",
  },
  {
    id: 2,
    title: "ICT Learnership",
    company: "Telkom Foundation",
    location: "East London",
    matchScore: 89,
    type: "Learnership",
  },
  {
    id: 3,
    title: "Data Analyst Internship",
    company: "Eastern Cape Development Corp",
    location: "Port Elizabeth",
    matchScore: 82,
    type: "Internship",
  },
];

const recentActivity = [
  { id: 1, icon: CheckCircle2, message: "Application submitted to TechAfrica Solutions", time: "2 hours ago", color: "text-emerald-500" },
  { id: 2, icon: Sparkles, message: "3 new AI matches found based on your profile", time: "Yesterday", color: "text-cyan-500" },
  { id: 3, icon: Eye, message: "SEDA viewed your profile", time: "2 days ago", color: "text-slate-400" },
  { id: 4, icon: UserCircle, message: "Profile updated — skills section", time: "3 days ago", color: "text-slate-400" },
  { id: 5, icon: Star, message: "Marked 'ICT Learnership' as a favourite", time: "5 days ago", color: "text-amber-500" },
];

export default function LearnerDashboard() {
  return (
    <>
      <DashboardHeader title="Dashboard" userName="Amahle Dlamini" notificationCount={3} />
      <PageWrapper>
        {/* Welcome */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Welcome back, Amahle</h2>
          <p className="text-slate-500 text-sm mt-1">Here&apos;s what&apos;s happening with your job search today.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Sparkles} label="Active Matches" value={12} change="+3 this week" changeType="positive" />
          <StatCard icon={CheckCircle2} label="Applications Sent" value={4} />
          <StatCard icon={Eye} label="Opportunities Viewed" value={38} change="+12 this week" changeType="positive" />
          <StatCard icon={UserCircle} label="Profile Completion" value="75%" change="+5% since last week" changeType="positive" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Top Matches */}
          <div className="xl:col-span-2">
            <div className="bg-white border border-slate-200 rounded-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Top Matches</h3>
                <a href="/learner/matches" className="text-xs font-medium text-emerald-600 hover:text-emerald-500">
                  View all
                </a>
              </div>
              <div className="space-y-3">
                {topMatches.map((match) => (
                  <div key={match.id} className="flex items-center gap-4 p-3 border border-slate-100 rounded-sm hover:border-slate-200 transition-colors">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                    >
                      <Briefcase size={18} className="text-slate-900" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">{match.title}</p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Building2 size={11} /> {match.company}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin size={11} /> {match.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        {match.matchScore}% match
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1">{match.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white border border-slate-200 rounded-sm p-5">
            <h3 className="font-semibold text-slate-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-start gap-3">
                    <Icon size={16} className={`mt-0.5 shrink-0 ${item.color}`} />
                    <div>
                      <p className="text-sm text-slate-700">{item.message}</p>
                      <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                        <Clock size={10} /> {item.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
