// components/PropertyCTA.tsx
import React from 'react';

const PropertyCTA = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-xs mx-auto text-center">
  <div className="space-y-4">
    <div>
      <h2 className="text-xl font-bold text-gray-800 leading-tight">
        Post your Property for Free
      </h2>
      <p className="text-gray-600 text-sm mt-1">
        List it on Magicbricks and get genuine leads
      </p>
    </div>
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
      Post Property FREE
    </button>
  </div>
</div>
    );
};

export default PropertyCTA;