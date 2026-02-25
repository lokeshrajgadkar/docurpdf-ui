import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className="space-y-2">
      <progress
        className="progress progress-primary w-full"
        value={progress}
        max="100"
      />
      <p className="text-sm text-center">{progress}%</p>
    </div>
  );
}

export default ProgressBar