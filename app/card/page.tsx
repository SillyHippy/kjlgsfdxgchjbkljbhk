"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function CardPage() {
  const [showShareMenu, setShowShareMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B132B] flex items-center justify-center p-4 relative">
      <div className="bg-[#1C2541] rounded-[15px] p-6 max-w-[420px] w-full shadow-lg relative" itemScope itemType="https://schema.org/Person">
        {/* Share Button */}
        <button 
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition" 
          onClick={() => setShowShareMenu(!showShareMenu)}
        >
          <Image src="/icons/share.svg" alt="Share" width={24} height={24} />
        </button>

        {/* Share Menu */}
        {showShareMenu && (
          <div className="absolute top-12 right-4 bg-white p-4 rounded-lg shadow-lg w-64">
            <h3 className="text-center font-bold mb-2">Share Just Legal Solutions</h3>
            <ul className="space-y-2">
              <li>
                <button className="w-full bg-gray-200 p-2 rounded" onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy Link</button>
              </li>
              <li>
                <a href={`sms:?&body=Check%20out%20Just%20Legal%20Solutions:%20${window.location.href}`} className="block text-center bg-green-500 text-white p-2 rounded">Share via Text</a>
              </li>
              <li>
                <a href={`mailto:?subject=Check%20this%20out!&body=${window.location.href}`} className="block text-center bg-blue-500 text-white p-2 rounded">Share via Email</a>
              </li>
            </ul>
          </div>
        )}

        {/* Top Profile Section */}
        <div className="flex items-center mb-4">
          <div className="w-[90px] h-[90px] bg-white rounded-full flex-shrink-0 mr-4 flex items-center justify-center overflow-hidden">
            <Image
              src="/favicon1.svg"
              alt="Just Legal Solutions Logo"
              width={90}
              height={90}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div>
            <h2 className="text-[26px] font-bold text-white -mb-1" itemProp="worksFor">Just Legal Solutions</h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="pl-1 mb-3">
          <h1 className="text-[28px] text-white mb-3" itemProp="name">Joseph Iannazzi</h1>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm" itemProp="jobTitle">
              Process Server
            </span>
            <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm">
              Legal Support
            </span>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-3 mt-6">
          <a href="/contact-details.vcf" download className="block bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors">
            Download my contact details
          </a>
          <a href="mailto:Info@JustLegalSolutions.org" itemProp="email" className="block bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors">
            Email
          </a>
          <a href="tel:+15393676832" itemProp="telephone" className="block bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors">
            Call
          </a>
          <a href="/card/calendar" className="block bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors">
            Add a Reminder
          </a>
          <a href="https://justlegalsolutions.org" itemProp="url" className="block bg-[#2D3748] text-white p-5 rounded-lg hover:bg-[#4A5568] transition-colors">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
