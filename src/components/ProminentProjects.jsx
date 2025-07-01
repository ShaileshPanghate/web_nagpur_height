"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Properties } from '../data/properties.json';
import Link from 'next/link';

const ProminentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Properties.slice(0, 4).length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Properties.slice(0, 4).length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Prominent Projects in Nagpur to Explore</h2>
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
              {Properties.slice(0, 4).map((property) => {
                const slug = `${property.id}-${property.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^\w-]+/g, '')}`;

                return (
                  <div key={property.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
                      <div className="md:flex">
                        <div className="md:w-1/2 h-64 md:h-auto">
                          <img
                            loading="lazy"
                            src={property.images[0]}
                            alt={property.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-2xl font-bold text-blue-800">{property.title}</h3>
                              <p className="text-blue-600 mb-2">{property.area}</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {property.type}
                            </span>
                          </div>

                          <div className="my-4">
                            <div className="flex items-center mb-2">
                              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-gray-600">{property.location}</p>
                            </div>

                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-600 font-medium mb-1">Price</p>
                              <p className="text-xl font-bold text-blue-800">{property.price}</p>
                            </div>
                          </div>

                          {property.description && (
                            <div className="bg-white rounded-xl shadow-md p-6 my-4 w-full md:w-[40px] lg:w-[380px]">
                              <h2 className="text-2xl font-semibold text-gray-800 mb-2">About {property.title}</h2>
                              <p className="text-gray-700">
                                {property.description.split(" ").slice(0, 10).join(" ")}...
                              </p>
                            </div>
                          )}

                          <Link href={`/property/${slug}`} passHref>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                              View Project Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 ml-2 bg-white p-3 m-2 rounded-full shadow-md text-blue-600 hover:bg-blue-50 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 bg-white p-3 m-2 rounded-full shadow-md text-blue-600 hover:bg-blue-50 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Properties.slice(0, 4).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-blue-600' : 'bg-blue-300'}`}
                style={{ padding: '4px', margin: '4px' }}
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
