"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-gray-800">
      <nav className="container mx-auto px-4 py-6 md:py-4">
        <div className="flex items-center justify-between">
          {/* Sol: Menü Items */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Ürünler Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-white active:text-white focus:text-white focus:outline-none active:outline-none transition-colors">
                <span>Ürünler</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href="#product1"
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Product 1
                  </a>
                  <a
                    href="#product2"
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Product 2
                  </a>
                  <a
                    href="#product3"
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Product 3
                  </a>
                </div>
              </div>
            </div>

            {/* Şirket Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-white active:text-white focus:text-white focus:outline-none active:outline-none transition-colors">
                <span>Şirket</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href="#about"
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="#faq"
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    FAQ
                  </a>
                  <a
                    href="#contact"
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* Docs Normal Link */}
            <a href="#docs" className="text-white hover:text-white active:text-white focus:text-white focus:outline-none active:outline-none transition-colors">
              Docs
            </a>
          </div>

          {/* Ortada: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={120} 
              height={120}
              className="w-20 h-20 md:w-[120px] md:h-[120px]"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

