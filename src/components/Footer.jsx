import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nagpur Heights</h3>
            <p className="text-gray-400">Your trusted partner for real estate solutions in Nagpur.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
              <li><Link href="/agents" className="text-gray-400 hover:text-white">Agents</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Apartments</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Villas</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Plots</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Commercial</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              Nagpur Heights<br />
              123 Business Plaza<br />
              Civil Lines, Nagpur<br />
              Maharashtra - 440001<br />
              <br />
              Phone: +91 1234567890<br />
              Email: info@nagpurheights.com
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 Nagpur Heights. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;