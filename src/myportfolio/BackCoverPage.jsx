import React, { forwardRef } from 'react';

const BackCoverPage = forwardRef((props, ref) => {
  return (
    <div
      className="page book-page-theme h-full w-full bg-neutral-900 border-2 border-yellow-500/70 p-5 flex flex-col justify-center items-center text-center shadow-inner box-border"
      ref={ref}
    >
      <div className="p-6 border border-yellow-500/30 rounded-xl bg-neutral-800/50 backdrop-blur">
        <h2 className="text-xl font-bold text-yellow-400 mb-2">Thank You!</h2>
        <p className="text-xs text-slate-300 mb-4">
          Looking forward to working together.
        </p>
        <span className="text-2xl">✨</span>
      </div>
    </div>
  );
});

export default BackCoverPage;