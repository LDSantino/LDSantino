'use client';

import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import {AcmeLogo} from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-4 mt-auto">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        <div className="mb-4 md:mb-0">
          <AcmeLogo />
        </div>
        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex space-x-4 text-black">
            <li><Link href="/appartamenti">Residenze</Link></li>
            <li><Link href="/">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; 2024 Ottiglio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer