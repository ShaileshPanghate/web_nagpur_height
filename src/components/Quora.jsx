import React from 'react';

const Quora = () => {
  return (
    <div>
      <a
        href="https://www.quora.com/profile/Nagpur-Heights"
        className="fixed bottom-35 right-2.5 z-50 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/Quora.png" // Place an Instagram logo in your /public/logos folder
          alt="Follow us on Quora"
           className="w-11 h-11 hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full animate-bounce hidden group-hover:block">
          Follow 
        </span>
      </a>
    </div>
  );
};

export default Quora;
