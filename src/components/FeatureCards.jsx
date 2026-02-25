import React from 'react'

const FeatureCards = () => {
  const features = [
    { title: "Compress", sub: "PDF" },
    { title: "Edit", sub: "PDF" },
    { title: "Merge", sub: "PDF" },
    { title: "Convert", sub: "PDF" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
      {features.map((feature, index) => (
        <div key={index} className="card bg-base-200 p-4 text-center">
          <p className="font-semibold">{feature.title}</p>
          <p className="text-sm">{feature.sub}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards