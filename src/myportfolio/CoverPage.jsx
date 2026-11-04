import React from 'react';
import profileImg from '../assets/xx.png';

const CoverPage = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        ...props.style,
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Matching dark desk background gradient
        background: 'radial-gradient(circle at center, #1b2735 0%, #090a0f 100%)',
        padding: '10px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)', // Subtle inner depth
      }}
    >
      {/* Decorative inner golden page frame */}
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '4px',
          padding: '6px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={profileImg}
          alt="Full Stack Developer Cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // Keeps full image visible without cropping
            borderRadius: '4px',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
});

export default CoverPage;