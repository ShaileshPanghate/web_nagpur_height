"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsApp from "@/components/WhatsApp";
import { useState } from "react";
import { use } from "react";

export default function PropertyDetails({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const [mainImage, setMainImage] = useState(0);

  const Properties = [
    {
      id: 1,
      title: 'Meher Ganga',
      location: 'New Narendra Nagar, Nagpur',
      area: '1500 sq.ft (3BHK)',
      price: '80 Lac',
      type: 'Apartment',
      images: [
        '/images/meher.jpg',
        '/images/Meher2.jpg',
        '/images/Meher3.jpg',
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings',
      whatsapp: "9096076177",
    },
    {
      id: 2,
      title: 'Arha Enclave',
      location: 'Plot no. 31, Shilpa Society, Narendra Nagar, Near Shani Dham Mandir, Nagpur, 440015',
      area: '1080 sq.ft (3BHK)',
      // price: '55.5 Lac',
      type: '3BHK Flat',
      images: [
        '/images/arhaEnclave_3BHK(1).PNG',
        '/images/arhaEnclave_3BHK(2).PNG',
        '/images/arhaEnclave_3BHK(3).PNG',
        '/images/arhaEnclave_3BHK(4).PNG',
      ],
      amenities: 'Lift (5-6 person), CCTV Security, Alloted Parking, EV Charging Point, Car Wash Area, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Earthquake resistant RCC Frame structure, 100% Vastu Compliant Apartment with full of Ventilation, 8ft height Main Door with premium Veneer ply with 80mm ply panelling frame, Granite frame for Bathroom doors, Semi Modular Kitchen, Otta with Granite top & Stainless steal sink, Powder coated Aluminium Window,  PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar/Cera Premium Fittings, Poly Cab wirings',
      whatsapp: "9096076177",
    },
    {
      id: 3,
      title: 'Sai Residency',
      location: 'Plot no. 3, Power House Road, New Beedipeth Nagar, Near Ashirwad Nagar Road, Nagpur, 440015',
      area: '1208 sq.ft (3BHK)',
      // price: '55.5 Lac',
      type: '3BHK',
      images: [
        '/images/sai_residency3BHK(1).PNG',
        '/images/sai_residency3BHK(2).PNG',
        '/images/sai_residency3BHK(3).PNG',
        '/images/sai_residency3BHK(4).PNG',
      ],
      amenities: 'Lift (5-6 person), CCTV Security, Alloted Parking, EV Charging Point, Car Wash Area, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Earthquake resistant RCC Frame structure, 100% Vastu Compliant Apartment with full of Ventilation, 8ft height Main Door with premium Veneer ply with 80mm ply panelling frame, Granite frame for Bathroom doors, Semi Modular Kitchen, Otta with Granite top & Stainless steal sink, Powder coated Aluminium Window,  PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar/Cera Premium Fittings, Poly Cab wirings',
      whatsapp: "9096076177",
    },
    {
      id: 4,
      title: 'Ved Vidhi 2BHK',
      location: 'Khasra No-162, Mouza-Pipla, P.H.No-38, Nagar Panchayat-Besa Pipla, Nagpur, 440015',
      area: '1316 sq.ft (2BHK)',
      // price: '55.5 Lac',
      type: 'Flat',
      images: [
        '/images/ved_vidhi_2BHK(1).PNG',
        '/images/ved_vidhi_2BHK(2).PNG',
        '/images/ved_vidhi_2BHK(3).PNG',
        '/images/ved_vidhi_2BHK(4).PNG'
      ],
      amenities: 'Garden, Swimming pool, Multipurpose Hall, Indoor Gym, Squash, 24 X 7 Security, CCTV Surveillance, WIFI in Lobby, EV Charging Point, Car Wash Area, Lifts with Emergency Backup, Fire-fights Equipment, Dormitory, RO Filter in Lobby, Alloted Parking, Guest Waiting Area, AC Library, Creche, Rain water Harvesting.',
      info: 'Earthquake resistant RCC Frame structure, Modular Kitchen, PoP, Secured Entry Doors, Intercom, 2*4 Verified Tiles, Sewage treatment plant, Water Supply from Corporation, Automatic water level controller, RO filter in lobby, First Aid',
      whatsapp: "9096076177",
    },
    {
      id: 5,
      title: 'Ved Vidhi 3BHK',
      location: 'Khasra No-162, Mouza-Pipla, P.H.No-38, Nagar Panchayat-Besa Pipla, Nagpur, 440015',
      area: '1811 sq.ft (3BHK)',
      // price: '55.5 Lac',
      type: 'Flat',
      images: [
        '/images/ved_vidhi_2BHK(1).PNG',
        '/images/ved_vidhi_2BHK(2).PNG',
        '/images/ved_vidhi_3BHK(3).PNG',
        '/images/ved_vidhi_3BHK(4).PNG'
      ],
      amenities: 'Garden, Swimming pool, Multipurpose Hall, Indoor Gym, Squash, 24 X 7 Security, CCTV Surveillance, WIFI in Lobby, EV Charging Point, Car Wash Area, Lifts with Emergency Backup, Fire-fights Equipment, Dormitory, RO Filter in Lobby, Alloted Parking, Guest Waiting Area, AC Library, Creche, Rain water Harvesting.',
      info: 'Earthquake resistant RCC Frame structure, Modular Kitchen, PoP, Secured Entry Doors, Intercom, 2*4 Verified Tiles, Sewage treatment plant, Water Supply from Corporation, Automatic water level controller, RO filter in lobby, First Aid',
      whatsapp: "9096076177",
    },
    {
      id: 6,
      title: 'Modern 4BHK Villa in Hingna',
      location: '4BHK For sale in Vyankateshwara kalash, Hingna Nagpur',
      area: '1900 sq.ft (4BHK)',
      price: '55.5 Lac',
      type: 'Villa',
      images: [
        '/images/Vyankateshwara.jpeg',
        '/images/Vyankateshwara2.jpeg',
        '/images/Vyankateshwara3.jpeg',
        '/images/Vyankateshwara4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings',
      whatsapp: "9096076177",
    },
    {
      id: 7,
      title: 'Commercial Space in Manewada, Nagpur',
      location: 'Manewada, Gandhi Square, Nagpur',
      area: '4115 sqft',
      price: '4.52 Cr',
      type: 'Commercial',
      images: [
        '/images/Manewada.jpeg',
        '/images/Manewada2.jpeg',
        '/images/Manewada3.jpeg',
        '/images/Manewada4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings',
      whatsapp: "9096076177",
    },
    {
      id: 8,
      title: 'Residential Plot in Privara Vihar 8',
      location: 'Godhani, Nagpur',
      area: '1000.00 - 3000.00 sq.ftconvert unit',
      price: '₹2.2 K/sq.ft',
      type: 'Plot',
      images: [
        '/images/privara.avif',
        '/images/privara2.avif',
        '/images/privara3.avif',
        '/images/privara4.avif'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings',
      whatsapp: "9096076177",
    },
    {
      id: 9,
      title: "Aarambh",
      area: "1500 sqft",
      price: "₹59.0 Lac",
      location: "Jamtha, Nagpur",
      type: "3 BHK Apartment",
      images: [
        '/images/Jamtha3BHK.jpeg',
        '/images/Jamtha3-3BHK.jpeg',
        '/images/Jamtha4-3BHK.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings',
      whatsapp: "9096076177",
    },
    {
      id: 10,
      title: "Golden Vista",
      area: "1650 sqft",
      price: "₹67.3 Lac",
      location: "Chinch Bhawan, Nagpur, Maharashtra",
      type: "3 BHK Apartment",
      images: [
        '/images/ChinchBhawan.jpeg',
        '/images/ChinchBhawan2.jpeg',
        '/images/ChinchBhawan3.jpeg',
        '/images/ChinchBhawan4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings',
      whatsapp: "9096076177",
    },
    {
      id: 11,
      title: "Jaitala, Nagpur",
      area: "1381 sqft",
      price: "₹51.1 Lac",
      location: "Jaitala, Nagpur",
      type: "3 BHK Apartments",
      images: [
        '/images/Jaitala.jpeg',
        '/images/Jaitala2.jpeg',
        '/images/Jaitala3.jpeg',
        '/images/Jaitala4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings',
      whatsapp: "9096076177",
    },
    {
      id: 12,
      title: "Royal Gardens",
      area: "1633 sqft",
      price: "₹73.5 Lac",
      location: "Bell Tarodi, Nagpur",
      type: "3 BHK Luxury Apartments",
      images: [
        '/images/BellTarodi.jpeg',
        '/images/BellTarodi2.jpeg',
        '/images/BellTarodi3.jpeg',
        '/images/BellTarodi4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings',
      whatsapp: "9096076177",
    },
    // ... other properties
  ];

  const property = Properties.find(prop => prop.id === Number(id));

  if (!property) {
    return (
      <>
        <Header />
        <div className="max-w-4xl mx-auto mt-40 p-6 text-center">
          <h1 className="text-2xl font-bold text-red-500">Property not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <WhatsApp />
      <main className="max-w-6xl mx-auto  pt-34 px-4 pb-12 bg-white">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{property.location}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-4">
              <img
                loading="lazy"
                src={property.images[mainImage]}
                alt={property.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`rounded-md overflow-hidden transition-all ${mainImage === index ? 'ring-4 ring-blue-500' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img
                    loading="lazy"
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Amenities Section */}
            {property.amenities && (
              <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.split(', ').map((amenity, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Key Details Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Price</span>
                  <span className="text-green-600 font-bold text-lg">{property.price}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Property Type</span>
                  <span className="text-blue-600 capitalize">{property.type}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Area</span>
                  <span className="text-gray-800">{property.area}</span>
                </div>

                {/* Contact Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 mt-4"
                onClick={() => {
                  window.open(`https://wa.me/${property.whatsapp}`, "_blank");
                }}>
                  Contact Agent
                </button>
              </div>
            </div>

            {/* Additional Information */}
            {property.info && (
              <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-[400px] lg:w-[500px]">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
                <ul className="space-y-2 text-gray-700">
                  {property.info.split(', ').map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}