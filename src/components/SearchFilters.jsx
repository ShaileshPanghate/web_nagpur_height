'use client';
import React from "react";

const SearchFilters = ({
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
  propertyType,
  setPropertyType,
  budget,
  setBudget,
  handleSearch
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-8xl -mb-8 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">

        {/* Keyword Search */}
        <input
          type="text"
          placeholder="Search by name or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-md px-4 py-2"
        />

        {/* Location */}
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="border rounded-md px-4 py-2">
          <option>Select Location</option>
          <option>Civil Lines</option>
          <option>Dharampeth</option>
          <option>Wardha Road</option>
          <option>Wanadongari</option>
          <option>Pipla</option>
          <option>Mouza</option>
          <option>Sitabuldi</option>
          <option>Hingna</option>
          <option>Narendra Nagar</option>
          <option>Mohgaon</option>
          <option>Besa</option>
          <option>Omkar Nagar</option>
          <option>Beedipeth</option>
          <option>Suraburdi Backyard</option>
        </select>

        {/* Property Type */}
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="border rounded-md px-4 py-2">
          <option>All Types</option>
          <option>2BHK & 3BHK Flats</option>
          <option>2BHK Flats</option>
          <option>3BHK Flats</option>
          <option>Commercial Space</option>
          <option>Villa</option>
          <option>Plots</option>
        </select>

        {/* Budget */}
        <select value={budget} onChange={(e) => setBudget(e.target.value)} className="border rounded-md px-4 py-2">
          <option>Any Budget</option>
          <option>Under 50 L</option>
          <option>50 L - 1 Cr</option>
          <option>1 Cr - 2 Cr</option>
        </select>

        {/* Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
