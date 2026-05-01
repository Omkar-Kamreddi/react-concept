import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;