const SearchFilters = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>Select Location</option>
              <option>Civil Lines</option>
              <option>Dharampeth</option>
              <option>Wardha Road</option>
              <option>Manish Nagar</option>
              <option>Hingna</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>All Types</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>Any Budget</option>
              <option>Under 50 L</option>
              <option>50 L - 1 Cr</option>
              <option>1 Cr - 2 Cr</option>
              <option>Above 2 Cr</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Search Properties
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchFilters;