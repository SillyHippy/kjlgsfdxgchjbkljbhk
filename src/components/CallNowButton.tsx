"use client";

import React from 'react';
import { Phone } from 'lucide-react';

const CallNowButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-blue-500 text-white py-3 text-center shadow-lg">
        <a
          href="tel:918-638-2837"
          className="flex items-center justify-center font-semibold"
        >
          <Phone className="mr-2" size={20} />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default CallNowButton;
