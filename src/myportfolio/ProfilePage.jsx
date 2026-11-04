import React, { forwardRef } from 'react';

const ProfilePage = forwardRef((props, ref) => {
  return (
    <div
      className="page book-page-theme h-full w-full bg-neutral-900 border-2 border-yellow-500/70 p-5 flex flex-col justify-between shadow-inner box-border"
      ref={ref}
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-yellow-500/40 pb-2 mb-1">
          <span className="font-bold text-yellow-400 font-mono text-base">01</span>
          <h5 className="mb-0 uppercase tracking-widest text-yellow-400 font-bold text-xs">
            About Me
          </h5>
        </div>

        <h3 className="text-sm font-bold text-white tracking-wide">
          Motivated & Detail-Oriented Full Stack Developer
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed mb-2">
          BCA graduate and skilled Full Stack Developer proficient in React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, and Node.js, with hands-on experience building dynamic web applications and RESTful APIs.
        </p>

        {/* Languages Box */}
        <div className="p-3 bg-neutral-800 border border-neutral-700/80 rounded-lg shadow-md">
          <div className="flex items-center gap-1.5 mb-2 border-b border-neutral-700 pb-1">
            <span className="text-sm">🌐</span>
            <h6 className="font-bold text-yellow-400 text-xs mb-0">Languages</h6>
          </div>
          <ul className="text-xs text-slate-300 space-y-1 pl-0 mb-0 list-none">
            <li><strong className="text-white">Malayalam:</strong> Native</li>
            <li><strong className="text-white">English:</strong> Fluent</li>
            <li><strong className="text-white">Hindi:</strong> Conversational</li>
            <li><strong className="text-white">Tamil:</strong> Conversational</li>
          </ul>
        </div>

        {/* Core Soft Skills Box */}
        <div className="p-3 bg-neutral-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-yellow-400 text-xs">⭐</span>
            <h6 className="font-bold text-white text-xs mb-0">Core Soft Skills</h6>
          </div>
          <p className="text-xs text-slate-300 mb-0 leading-relaxed">
            Communication • Problem Solving • Analytical Thinking • Teamwork
          </p>
        </div>
      </div>

      {/* Footer Page Marker */}
      <div className="text-center text-[10px] text-slate-500 pt-1 border-t border-neutral-800 shrink-0">
        Page 01
      </div>
    </div>
  );
});

export default ProfilePage;