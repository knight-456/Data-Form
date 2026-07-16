import { Bell, Menu, Search, User } from "lucide-react";

export function DeviceMockup() {
  return (
    <div className="relative mx-auto border-gray-900 dark:border-gray-800 bg-gray-900 dark:bg-gray-800 border-[8px] rounded-[2.5rem] h-[450px] w-[230px] shadow-2xl overflow-hidden ring-4 ring-black/10 group-hover:scale-[1.02] transition-transform duration-500">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-xl w-28 mx-auto z-20 flex justify-center items-end pb-1">
        <div className="w-10 h-1.5 bg-black/20 rounded-full" />
      </div>
      
      {/* Screen */}
      <div className="bg-slate-50 dark:bg-slate-950 w-full h-full relative z-10 overflow-hidden flex flex-col">
        {/* App Header */}
        <div className="bg-brand pt-10 pb-4 px-4 text-white shadow-md">
          <div className="flex justify-between items-center">
            <Menu className="w-4 h-4" />
            <span className="font-bold text-xs">LeadsForce360</span>
            <Bell className="w-4 h-4" />
          </div>
        </div>
        
        {/* App Body */}
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-2.5 flex items-center gap-2 border border-gray-100 dark:border-slate-800 shadow-sm">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <div className="h-3 w-24 bg-gray-200 dark:bg-slate-800 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-50/50 dark:bg-blue-900/10 p-3 rounded-xl border border-blue-100 dark:border-blue-900/30 flex flex-col justify-center items-center gap-1">
              <span className="text-xl font-black text-brand">42</span>
              <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">New Leads</span>
            </div>
            <div className="bg-green-50/50 dark:bg-green-900/10 p-3 rounded-xl border border-green-100 dark:border-green-900/30 flex flex-col justify-center items-center gap-1">
              <span className="text-xl font-black text-green-600 dark:text-green-500">98%</span>
              <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">Attendance</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Recent Activity</span>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2.5 p-2.5 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
                <div className="w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5 text-brand" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="h-2 w-full bg-gray-200 dark:bg-slate-800 rounded animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  <div className="h-2 w-2/3 bg-gray-100 dark:bg-slate-800/60 rounded animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1.5 inset-x-0 mx-auto w-20 h-1 bg-black/20 dark:bg-white/20 rounded-full" />
      </div>
    </div>
  );
}
