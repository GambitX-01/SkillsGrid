"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";
import { Edit2, MapPin, Mail, Phone, GraduationCap, Code2 } from "lucide-react";

const skills = [
  "JavaScript", "Python", "React", "SQL", "Git",
  "HTML/CSS", "Microsoft Excel", "Communication", "Problem Solving",
];

export default function LearnerProfilePage() {
  const completion = 75;

  return (
    <>
      <DashboardHeader title="My Profile" userName="Amahle Dlamini" notificationCount={3} />
      <PageWrapper>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">My Profile</h2>
            <p className="text-sm text-slate-500 mt-0.5">Keep your profile up to date to improve your matches</p>
          </div>
        </div>

        {/* Completion bar */}
        <div className="bg-white border border-slate-200 rounded-sm p-5 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">Profile Completion</span>
            <span className="text-sm font-bold text-emerald-600">{completion}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: `${completion}%`, background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-2">Add your work experience to reach 90% completion</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div className="bg-white border border-slate-200 rounded-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Personal Information</h3>
              <button className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-500">
                <Edit2 size={13} /> Edit
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg"
                  style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
                >
                  AD
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Amahle Dlamini</p>
                  <p className="text-xs text-slate-500">Software Development Student</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <p className="text-sm text-slate-600 flex items-center gap-2"><Mail size={14} className="text-slate-400" /> amahle@example.com</p>
                <p className="text-sm text-slate-600 flex items-center gap-2"><Phone size={14} className="text-slate-400" /> +27 64 123 4567</p>
                <p className="text-sm text-slate-600 flex items-center gap-2"><MapPin size={14} className="text-slate-400" /> Gqeberha, Eastern Cape</p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-white border border-slate-200 rounded-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Qualifications</h3>
              <button className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-500">
                <Edit2 size={13} /> Edit
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 border border-slate-100 rounded-sm">
                <GraduationCap size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-900">National Diploma: Information Technology</p>
                  <p className="text-xs text-slate-500">Nelson Mandela University · 2022 – 2025</p>
                  <p className="text-xs text-slate-400 mt-0.5">NQF Level 6 · In Progress</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border border-slate-100 rounded-sm">
                <GraduationCap size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-900">National Senior Certificate</p>
                  <p className="text-xs text-slate-500">Langa High School · 2021</p>
                  <p className="text-xs text-slate-400 mt-0.5">Maths, Physical Science, IT · Distinction in IT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border border-slate-200 rounded-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Skills</h3>
              <button className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-500">
                <Edit2 size={13} /> Edit
              </button>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={16} className="text-slate-400" />
              <span className="text-sm text-slate-600">{skills.length} skills listed</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Location & Availability */}
          <div className="bg-white border border-slate-200 rounded-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Location & Availability</h3>
              <button className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-500">
                <Edit2 size={13} /> Edit
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Current location</span>
                <span className="font-medium text-slate-900">Gqeberha, Eastern Cape</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Willing to relocate</span>
                <span className="font-medium text-emerald-600">Yes</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Availability</span>
                <span className="font-medium text-slate-900">From June 2026</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-500">Preferred type</span>
                <span className="font-medium text-slate-900">Job / Internship</span>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
