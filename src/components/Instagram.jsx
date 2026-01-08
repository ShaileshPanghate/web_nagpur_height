import React from 'react';

const Instagram = () => {
  return (
    <div>
      <a
        href="https://www.instagram.com/nagpur_propertiess?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        className="fixed bottom-26 right-4 z-50 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/instagram.png" // Place an Instagram logo in your /public/logos folder
          alt="Follow us on Instagram"
          className="w-8 h-8 hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-bounce hidden group-hover:block">
          Follow 
        </span>
      </a>
    </div>
  );
};

export default Instagram;
