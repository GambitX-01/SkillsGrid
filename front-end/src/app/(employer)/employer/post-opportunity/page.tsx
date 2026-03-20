"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PageWrapper from "@/components/dashboard/PageWrapper";

type OpportunityType = "Job" | "Learnership" | "Internship" | "Bursary";

export default function PostOpportunityPage() {
  const [form, setForm] = useState({
    title: "",
    type: "Job" as OpportunityType,
    sector: "",
    location: "",
    description: "",
    requirements: "",
    closingDate: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const types: OpportunityType[] = ["Job", "Learnership", "Internship", "Bursary"];

  return (
    <>
      <DashboardHeader title="Post Opportunity" userName="Sipho Ndlovu" notificationCount={2} />
      <PageWrapper>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">Post a New Opportunity</h2>
          <p className="text-sm text-slate-500 mt-0.5">Fill in the details below. Candidates will be matched via AI.</p>
        </div>

        <div className="max-w-3xl">
          <div className="bg-white border border-slate-200 rounded-sm p-6 space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Opportunity Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="e.g. Junior Software Developer"
                className="w-full border border-slate-200 rounded-sm px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Type *</label>
              <div className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleChange("type", t)}
                    className={`px-4 py-2 rounded-sm text-sm font-medium border transition-all ${
                      form.type === t
                        ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Sector + Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Sector *</label>
                <select
                  value={form.sector}
                  onChange={(e) => handleChange("sector", e.target.value)}
                  className="w-full border border-slate-200 rounded-sm px-3.5 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-emerald-400"
                >
                  <option value="">Select sector</option>
                  <option>ICT</option>
                  <option>Finance</option>
                  <option>Engineering</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Agriculture</option>
                  <option>Tourism</option>
                  <option>Business Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Location *</label>
                <select
                  value={form.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full border border-slate-200 rounded-sm px-3.5 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-emerald-400"
                >
                  <option value="">Select location</option>
                  <option>Port Elizabeth (Gqeberha)</option>
                  <option>East London</option>
                  <option>Mthatha</option>
                  <option>King William&apos;s Town</option>
                  <option>Queenstown</option>
                  <option>Remote</option>
                  <option>Multiple Locations</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Description *</label>
              <textarea
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe the role, responsibilities, and what candidates can expect..."
                rows={5}
                className="w-full border border-slate-200 rounded-sm px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Requirements</label>
              <textarea
                value={form.requirements}
                onChange={(e) => handleChange("requirements", e.target.value)}
                placeholder="List the key requirements, one per line..."
                rows={4}
                className="w-full border border-slate-200 rounded-sm px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              />
            </div>

            {/* Closing Date */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Closing Date *</label>
              <input
                type="date"
                value={form.closingDate}
                onChange={(e) => handleChange("closingDate", e.target.value)}
                className="w-full border border-slate-200 rounded-sm px-3.5 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-emerald-400"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 flex gap-3">
              <button
                className="px-6 py-2.5 rounded-sm text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #34d399, #22d3ee)" }}
              >
                Post Opportunity
              </button>
              <button className="px-6 py-2.5 rounded-sm text-sm font-medium border border-slate-200 text-slate-600 hover:border-slate-300 transition-colors">
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
