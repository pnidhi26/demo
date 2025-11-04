import React from 'react';

const PeachyClub = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="peachy-card">
        <div className="flex items-center gap-4 justify-center">
          <span className="font-bold">GET INTO WAITLIST NOW</span>
          <button 
            onClick={() => window.open('https://forms.gle/dNi7VEXo53B8zZiM7', '_blank', 'noopener,noreferrer')}
            className="peachy-button"
          >
            Join Peachy Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeachyClub;
