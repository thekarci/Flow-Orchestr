"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-gray-800">
      <nav className="container mx-auto px-4 py-6 md:py-4">
        <div className="flex items-center justify-between">
          {/* Mobil Hamburger Butonu */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Sol: Menü Items - Desktop */}
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
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-card border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6">
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="#all-solutions"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">Tüm Çözümler</h4>
                    <p className="text-[#9CA3AF] text-xs">Tüm AI Agent çözümlerimizi keşfedin</p>
                  </a>
                  <a
                    href="#budgetguard"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">BudgetGuard AI</h4>
                    <p className="text-[#9CA3AF] text-xs">Bütçe yönetimi ve optimizasyon</p>
                  </a>
                  <a
                    href="#intentradar"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">IntentRadar</h4>
                    <p className="text-[#9CA3AF] text-xs">Kullanıcı niyet analizi</p>
                  </a>
                  <a
                    href="#salesagent"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">SalesAgent Pro</h4>
                    <p className="text-[#9CA3AF] text-xs">Satış otomasyonu</p>
                  </a>
                  <a
                    href="#competeiq"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">CompeteIQ</h4>
                    <p className="text-[#9CA3AF] text-xs">Rekabet analizi</p>
                  </a>
                  <a
                    href="#adwatch"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">AdWatch AI</h4>
                    <p className="text-[#9CA3AF] text-xs">Reklam izleme ve analiz</p>
                  </a>
                  <a
                    href="#contentflow"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">ContentFlow AI</h4>
                    <p className="text-[#9CA3AF] text-xs">İçerik yönetimi ve optimizasyon</p>
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
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-card border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6">
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="#about"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">About Us</h4>
                    <p className="text-[#9CA3AF] text-xs">Hakkımızda bilgi edinin</p>
                  </a>
                  <a
                    href="#faq"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">FAQ</h4>
                    <p className="text-[#9CA3AF] text-xs">Sık sorulan sorular</p>
                  </a>
                  <a
                    href="#contact"
                    className="group/item relative bg-black border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
                  >
                    <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover/item:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
                    <h4 className="text-sm font-bold text-white mb-2">Contact Us</h4>
                    <p className="text-[#9CA3AF] text-xs">Bizimle iletişime geçin</p>
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

        {/* Mobil Menü Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-1 pt-4">
              {/* Ürünler Accordion */}
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-white hover:bg-cyan-300/20 transition-colors ${productsOpen ? 'bg-cyan-300/20' : ''}`}
                >
                  <span>Çözümler</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
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
                {productsOpen && (
                  <div className="bg-black/50">
                    <a
                      href="#all-solutions"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Tüm Çözümler
                    </a>
                    <a
                      href="#budgetguard"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      BudgetGuard AI
                    </a>
                    <a
                      href="#intentradar"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      IntentRadar
                    </a>
                    <a
                      href="#salesagent"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SalesAgent Pro
                    </a>
                    <a
                      href="#competeiq"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      CompeteIQ
                    </a>
                    <a
                      href="#adwatch"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      AdWatch AI
                    </a>
                    <a
                      href="#contentflow"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      ContentFlow AI
                    </a>
                  </div>
                )}
              </div>

              {/* Şirket Accordion */}
              <div>
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-white hover:bg-cyan-300/20 transition-colors ${companyOpen ? 'bg-cyan-300/20' : ''}`}
                >
                  <span>Şirket</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`}
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
                {companyOpen && (
                  <div className="bg-black/50">
                    <a
                      href="#about"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </a>
                    <a
                      href="#faq"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQ
                    </a>
                    <a
                      href="#contact"
                      className="block px-8 py-2 text-white hover:bg-cyan-300/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </a>
                  </div>
                )}
              </div>

              {/* Docs Link */}
              <a
                href="#docs"
                className="block px-4 py-3 text-white hover:bg-cyan-300/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

