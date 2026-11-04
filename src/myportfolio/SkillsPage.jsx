import React, { forwardRef } from 'react';

const SkillsPage = forwardRef((props, ref) => {
  return (
    <div className="page book-page-theme h-full w-full bg-neutral-900 border-2 border-yellow-500/70 p-4 flex flex-col justify-between shadow-inner box-border" ref={ref}>
      
      <div className="flex flex-col gap-2 overflow-y-auto pr-1">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-yellow-500/40 pb-1 mb-2">
          <span className="font-bold text-yellow-400 font-mono text-base">02</span>
          <h5 className="mb-0 text-uppercase tracking-widest text-yellow-400 font-bold text-xs">Technical Specs</h5>
        </div>

        <h3 className="text-sm font-bold text-white mb-1 tracking-wide">Technical Mastery</h3>

        {/* Skill Cards */}
        <div className="space-y-2">
          <div className="p-2.5 border-l-4 border-yellow-500 bg-neutral-800 rounded shadow-md">
            <h6 className="font-bold text-yellow-400 text-xs mb-1">💻 Front-End Development</h6>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-0">
              React.js (Components, Hooks, State Management, Router), JavaScript (ES6+), HTML5, CSS3, Bootstrap, Responsive Design
            </p>
          </div>

          <div className="p-2.5 border-l-4 border-slate-400 bg-neutral-800 rounded shadow-md">
            <h6 className="font-bold text-white text-xs mb-1">⚙️ Back-End Development</h6>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-0">
              Node.js (Core Modules, File System, HTTP Module, npm, package.json), Basic Server Creation
            </p>
          </div>

          <div className="p-2.5 border-l-4 border-yellow-500 bg-neutral-800 rounded shadow-md">
            <h6 className="font-bold text-yellow-400 text-xs mb-1">🛠️ Tools & Version Control</h6>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-0">
              VS Code, Git, GitHub, Postman (API Testing), Nodemon
            </p>
          </div>
        </div>
      </div>

      {/* Footer Page Marker */}
      <div className="text-center text-[10px] text-slate-500 pt-1 mt-1 border-t border-neutral-800 shrink-0">
        Page 02
      </div>

    </div>
  );
});

export default SkillsPage;