import Link from 'next/link';

const PropertyCard = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`} passHref>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img 
          loading="lazy"
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium">
          {property.type}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        
        <div className="flex items-center text-blue-600 mb-3">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{property.area} sq.ft</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">₹{property.price}</span>
          <span className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View Details
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PropertyCard;