import Sidebar from "@/components/dashboard/Sidebar";

export default function LearnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role="learner" userName="Amahle Dlamini" userEmail="amahle@example.com" />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
