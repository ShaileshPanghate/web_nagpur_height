'use client';

const logos = [
  '/logos/clientLogo/Ambika.png',
  '/logos/clientLogo/Atharva.webp',
  '/logos/clientLogo/Godrej.jpg',
  '/logos/clientLogo/KPIL.webp',
  '/logos/clientLogo/Kukreja.png',
  '/logos/clientLogo/Lok8-logo.svg',
  '/logos/clientLogo/Mahalaxmi.svg',
  '/logos/clientLogo/Mauli.jpg',
  '/logos/clientLogo/narmada.jpg',
  '/logos/clientLogo/wtc.png',
  '/logos/clientLogo/shiv_kailasa.png',
];

export default function LogoSlider() {
  return (
    <section className="py-6 bg-white overflow-hidden">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .marquee {
          animation: marquee 40s linear infinite;
        }

        .marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
      <h2 className="px-4 text-2xl font-bold text-gray-800 mb-6"> Our Clients</h2>
      {/* TOP ROW (left → right) */}
      <div className="flex w-max marquee gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`top-${index}`}
            className="min-w-[140px] sm:min-w-[180px] lg:min-w-[220px] h-[70px] sm:h-[90px] lg:h-[120px] flex items-center justify-center rounded-2xl bg-white shadow-md"
          >
            <img src={logo} alt="logo" className="max-h-12 sm:max-h-16 lg:max-h-16 object-contain" />
          </div>
        ))}
      </div>

      {/* BOTTOM ROW (right → left) */}
      <div className="flex w-max marquee-reverse gap-8">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`bottom-${index}`}
            className="min-w-[140px] sm:min-w-[180px] lg:min-w-[220px] h-[70px] sm:h-[90px] lg:h-[120px] flex items-center justify-center rounded-2xl bg-white shadow-md"
          >
            <img src={logo} alt="logo" className="max-h-12 sm:max-h-16 lg:max-h-16 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
