"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const ProminentProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Aarambh",
      area: "1500 sqft",
      price: "₹59.0 Lac",
      location: "Jamtha, Nagpur",
      bhk: "3 BHK Apartment",
      image: "/images/Jamtha3BHK.jpeg"
    },
    {
      id: 2,
      name: "Golden Vista",
      area: "1650 sqft",
      price: "₹67.3 Lac",
      location: "Chinch Bhawan, Nagpur, Maharashtra",
      bhk: "3 BHK Apartment",
      image: "/images/ChinchBhawan.jpeg"
    },
    {
      id: 3,
      name: "Jaitala, Nagpur",
      area: "1381 sqft",
      price: "₹51.1 Lac",
      location: "Jaitala, Nagpur",
      bhk: "3 BHK Apartments",
      image: "/images/Jaitala.jpeg"
    },
    {
      id: 4,
      name: "Royal Gardens",
      area: "1633 sqft",
      price: "₹73.5 Lac",
      location: "Bell Tarodi, Nagpur",
      bhk: "3 BHK Luxury Apartments",
      image: "/images/BellTarodi.jpeg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Prominent Projects to Explore</h2>
          <p className="text-lg text-gray-600 mb-4">Best projects to look out for in Nagpur</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5 }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
                    <div className="md:flex">
                      <div className="md:w-1/2 h-64 md:h-auto">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold text-blue-800">{project.name}</h3>
                            <p className="text-blue-600 mb-2"> {project.area}</p>
                          </div>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {project.bhk}
                          </span>
                        </div>
                        
                        <div className="my-4">
                          <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-600">{project.location}</p>
                          </div>
                          
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm text-blue-600 font-medium mb-1">Price</p>
                            <p className="text-xl font-bold text-blue-800">{project.price}</p>
                          </div>
                        </div>
                        
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                          View Project Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md text-blue-600 hover:bg-blue-50 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md text-blue-600 hover:bg-blue-50 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-blue-200'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProminentProjects;
