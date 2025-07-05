import React from 'react';

const WhatsApp = () => {
  return (
    <div>
      <a
        href="https://wa.me/919096076177" // Replace with your WhatsApp number
        className="fixed bottom-4 right-3.5 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/WhatsApp.svg" // Put a WhatsApp logo in public folder
          alt="Chat on WhatsApp"
          className="w-10 h-10   hover:scale-110 transition-transform duration-300"

        />
        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-bounce hidden group-hover:block">
          hii!!
        </span>
      </a>
    </div>
  );
}

export default WhatsApp;
