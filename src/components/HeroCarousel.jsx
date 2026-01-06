'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  '/images/extras/hero1.1.png',
  '/images/extras/hero2.png',
  '/images/extras/hero3.png',
  '/images/extras/hero4.png',
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Optional: auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (

   <section className="relative mt-18 lg:mt-10 h-[18vh] sm:h-[45vh] md:h-[85vh] lg:h-[90vh] w-full bg-white overflow-hidden">

      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
      ${index === current ? 'opacity-100' : 'opacity-0'}
    `}
        >
          <div className="relative w-full h-full overflow-hidden">

            <Image
              src={img}
              alt="slide"
              fill
              className="
    object-cover
    object-[50%_40%]
    sm:object-[50%_35%]
    md:object-[50%_30%]
    lg:object-contain
    lg:object-center
    transition-all
    duration-700
  "
              sizes="(max-width: 768px) 100vw, 100vw"
              priority={index === 0}
            />

          </div>
        </div>
      ))}

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                   bg-white/20 hover:bg-white/40
                   backdrop-blur-md text-white
                   w-12 h-12 rounded-full
                   flex items-center justify-center
                   transition"
      >
        ❮
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                   bg-white/20 hover:bg-white/40
                   backdrop-blur-md text-white
                   w-12 h-12 rounded-full
                   flex items-center justify-center
                   transition"
      >
        ❯
      </button>
    </section>
  );
}
