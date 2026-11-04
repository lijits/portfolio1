import React, { forwardRef } from 'react';

const EducationPage = forwardRef((props, ref) => {
  return (
    <div className="page book-page-theme" ref={ref}>
      <div className="h-full w-full bg-neutral-900 border-2 border-yellow-500/70 rounded-lg p-5 flex flex-col justify-between shadow-inner">
        
        <div>
          {/* Header */}
          <div className="flex justify-between items-center border-b border-yellow-500/40 pb-2 mb-4">
            <span className="font-bold text-yellow-400 font-mono text-lg">04</span>
            <h5 className="mb-0 uppercase tracking-widest text-yellow-400 font-bold text-sm">
              Academics & Training
            </h5>
          </div>

          {/* Card 1: Full-Stack Training */}
          <div className="mb-3 p-3 bg-neutral-800 border-l-4 border-yellow-500 rounded shadow-md">
            <span className="inline-block bg-yellow-500 text-neutral-950 font-bold text-[10px] px-2 py-0.5 rounded mb-1">
              2026 – Present
            </span>
            <h5 className="font-bold text-white text-sm mb-0.5">
              GET Innovative, Nagercoil
            </h5>
            <h6 className="text-xs text-yellow-400 font-medium mb-1">
              Full-Stack Web Development
            </h6>
            <p className="text-xs text-slate-300 leading-relaxed mb-0">
              Training covers front-end and back-end technologies including React.js and Node.js.
            </p>
          </div>

          {/* Card 2: BCA Degree */}
          <div className="mb-3 p-3 bg-neutral-800 border-l-4 border-slate-400 rounded shadow-md">
            <span className="inline-block bg-slate-700 text-slate-200 font-bold text-[10px] px-2 py-0.5 rounded mb-1">
              2010 – 2013
            </span>
            <h5 className="font-bold text-white text-sm mb-0.5">
              Malankara Catholic College, Mariagiri
            </h5>
            <h6 className="text-xs text-slate-300 font-medium mb-0">
              Bachelor of Computer Applications (BCA)
            </h6>
          </div>

          {/* Card 3: Higher Secondary */}
          <div className="p-3 bg-neutral-800 border-l-4 border-slate-400 rounded shadow-md">
            <span className="inline-block bg-slate-700 text-slate-200 font-bold text-[10px] px-2 py-0.5 rounded mb-1">
              2008 – 2010
            </span>
            <h5 className="font-bold text-white text-sm mb-0.5">
              Evans HSS, Parassala
            </h5>
            <h6 className="text-xs text-slate-300 font-medium mb-0">
              Higher Secondary Education (HSE)
            </h6>
          </div>
        </div>

        {/* Footer Page Marker */}
        <div className="text-center text-xs text-slate-500 pt-2 border-t border-neutral-800">
          Page 04
        </div>

      </div>
    </div>
  );
});

export default EducationPage;