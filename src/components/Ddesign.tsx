"use client";
import React from "react";

function Ddesign({ embedUrl}) {
  return (
    <div className="flex bg-gradient-to-br from-orange-50 to-teal-50">

      <div className="sketchfab-embed-wrapper +rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          title="3D Temple View"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          src={embedUrl}
          className="w-screen h-screen"
        ></iframe>
      </div>
    </div>
  );
}

export default Ddesign;
