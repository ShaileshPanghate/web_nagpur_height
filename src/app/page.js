import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import SearchFilters from '../components/SearchFilters';
import AdviceToolsSection from '../components/AdviceToolsSection';
import ProminentProjects from '@/components/ProminentProjects';
import PostPropertyBanner from '@/components/PostPropertyBanner';
import WhatsApp from '@/components/WhatsApp';

const Home = () => {



  const featuredProperties = [
    {
      id: 1,
      title: 'Meher Ganga',
      location: 'New Narendra Nagar, Nagpur',
      area: '1500 ',
      price: '80 Lac',
      type: 'Apartment',
      image: '/images/meher.jpg'
    },
    {
      id: 2,
      title: 'Modern 4BHK Villa in Hingna',
      location: '4BHK For sale in Vyankateshwara kalash, Hingna Nagpur',
      area: '1900',
      price: '55.5 Lac',
      type: 'Villa',
      image: '/images/Vyankateshwara.jpeg'
    },
    {
      id: 3,
      title: 'Commercial Space in Manewada, Nagpur',
      location: 'Manewada, Gandhi Square, Nagpur',
      area: '4115',
      price: '4.52 Cr',
      type: 'Commercial',
      image: '/images/Manewada.jpeg'
    },
    {
      id: 4,
      title: 'Residential Plot in Privara Vihar 8',
      location: 'Godhani, Nagpur',
      area: '1000.00 - 3000.00 sq.ftconvert unit',
      price: '₹2.2 K/sq.ft',
      type: 'Plot',
      image: '/images/privara.avif'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />
     <WhatsApp />

      {/* Hero Section */}
      {/* Hero Section with Background Image */}
      <div
        className="relative py-12 mt-16 " // 90% opacity blue overlay
        style={{
          backgroundImage: "url('./images/back22.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto py-0 px-4 relative z-10"> {/* z-10 brings content above overlay */}
          <h1 className="text-5xl  mb-4 text-white">Find Your Dream Property in Nagpur</h1>
          <p className="text-2xl text-white">Discover the best residential and commercial properties in Nagpur</p>
          <SearchFilters />
        </div>
      </div>

      {/* Featured Properties */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Nagpur Heights?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Verified Listings</h3>
              <p className="text-gray-600">All our properties are thoroughly verified for authenticity.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-gray-600">We offer competitive prices for all types of properties.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our support team is always ready to assist you.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ProminentProjects */}
      <div>
        <ProminentProjects />
      </div>
      <div>
        <PostPropertyBanner />
      </div>

      {/* Tools section */}
      <div>
        <AdviceToolsSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;