import React, { forwardRef } from 'react';

const HobbiesPage = forwardRef((props, ref) => {
  return (
    <div
      className="page book-page-theme h-full w-full bg-neutral-900 border-2 border-yellow-500/70 p-5 flex flex-col justify-between shadow-inner box-border"
      ref={ref}
    >
      <div>
        {/* Header */}
        <div className="flex justify-between items-center border-b border-yellow-500/40 pb-2 mb-4">
          <span className="font-bold text-yellow-400 font-mono text-base">02</span>
          <h5 className="mb-0 uppercase tracking-widest text-yellow-400 font-bold text-xs">
            Interests & Hobbies
          </h5>
        </div>

        <h3 className="text-sm font-bold text-white mb-4 tracking-wide">
          Personal Passions
        </h3>

        {/* Hobbies Cards Container */}
        <div className="space-y-3">
          
          {/* Card 1: Continuous Learning */}
          <div className="p-3 bg-neutral-800/90 border-l-4 border-yellow-500 rounded-r-lg shadow-md hover:bg-neutral-800 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">📚</span>
              <h6 className="font-bold text-yellow-400 text-xs mb-0">Continuous Learning</h6>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-0 pl-6">
              Constantly upgrading technical knowledge and keeping up with modern web development standards.
            </p>
          </div>

          {/* Card 2: Exploring Tech */}
          <div className="p-3 bg-neutral-800/90 border-l-4 border-yellow-400 rounded-r-lg shadow-md hover:bg-neutral-800 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">🚀</span>
              <h6 className="font-bold text-yellow-400 text-xs mb-0">Exploring New Tech</h6>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-0 pl-6">
              Experimenting with new tools, libraries, and web techniques to optimize coding workflows.
            </p>
          </div>

          {/* Card 3: Music */}
          <div className="p-3 bg-neutral-800/90 border-l-4 border-yellow-500 rounded-r-lg shadow-md hover:bg-neutral-800 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">🎧</span>
              <h6 className="font-bold text-yellow-400 text-xs mb-0">Listening to Music</h6>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-0 pl-6">
              Unwinding and finding creative inspiration through favorite music playlists.
            </p>
          </div>

        </div>
      </div>

      {/* Footer Page Marker */}
      <div className="text-center text-[10px] text-slate-500 pt-1 border-t border-neutral-800 shrink-0">
        Page 02
      </div>
    </div>
  );
});

export default HobbiesPage;