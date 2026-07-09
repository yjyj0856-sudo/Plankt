import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brand-violet text-white/50 border-t border-white/10 py-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand tag */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            PLANKIT STUDIO
          </span>
          <span className="w-1.5 h-1.5 bg-brand-pink rounded-full" />
          <span className="font-mono text-[10px] tracking-wider text-white/40">
            SEOUL // MICE CREATIVE
          </span>
        </div>

        {/* Right Side: Exact requested footer format */}
        <div className="font-mono text-xs text-white/60 text-center md:text-right">
          © 2026 Plankit Studio. Planning. Design. Education.
        </div>
        
      </div>
    </footer>
  );
}
