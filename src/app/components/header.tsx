// 'use client';

// import { useState, useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
//   const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  
//   const pathname = usePathname();
//   const isOnSolutionsPage = pathname === '/solutions';
//   const isOnIndustriesPage = pathname === '/industries';
  
//   const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSolutionsMouseEnter = () => {
//     if (solutionsTimeoutRef.current) {
//       clearTimeout(solutionsTimeoutRef.current);
//     }
//     setIsSolutionsOpen(true);
//   };

//   const handleSolutionsMouseLeave = () => {
//     solutionsTimeoutRef.current = setTimeout(() => {
//       setIsSolutionsOpen(false);
//     }, 300);
//   };

//   const handleIndustriesMouseEnter = () => {
//     if (industriesTimeoutRef.current) {
//       clearTimeout(industriesTimeoutRef.current);
//     }
//     setIsIndustriesOpen(true);
//   };

//   const handleIndustriesMouseLeave = () => {
//     industriesTimeoutRef.current = setTimeout(() => {
//       setIsIndustriesOpen(false);
//     }, 300);
//   };

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo - Far Left */}
//           <div className="flex-shrink-0 w-1/4">
//             <Link href="/">
//               <Image
//                 src="/logo.png"
//                 alt="Argus Logo"
//                 width={120}
//                 height={60}
//                 className="h-16 w-auto"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation - Center Aligned */}
//           <div className="hidden md:flex md:items-center md:justify-center md:space-x-8 flex-1">
//             {/* Solutions Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={!isOnSolutionsPage ? handleSolutionsMouseEnter : undefined}
//               onMouseLeave={!isOnSolutionsPage ? handleSolutionsMouseLeave : undefined}
//             >
//               <Link
//                 href="/solutions"
//                 className={`transition-colors duration-200 font-medium ${
//                   isOnSolutionsPage 
//                     ? 'text-[#C9A23A] border-b-2 border-[#C9A23A] pb-1' 
//                     : 'text-[#0F172A] hover:text-[#C9A23A]'
//                 }`}
//               >
//                 Solutions
//               </Link>
              
//               {isSolutionsOpen && !isOnSolutionsPage && (
//                 <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[528px] bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100">
//                   <div className="flex">
//                     {/* Left side - Menu items */}
//                     <div className="flex-1 p-6">
//                       <Link
//                         href="/solutions#mobility"
//                         onClick={() => setIsSolutionsOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         Mobility & Traffic Intelligence
//                       </Link>
//                       <Link
//                         href="/solutions#incident-911"
//                         onClick={() => setIsSolutionsOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         Incident Management & 911
//                       </Link>
//                       <Link
//                         href="/solutions#public-records"
//                         onClick={() => setIsSolutionsOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         Public Records & Open Data
//                       </Link>
//                       <Link
//                         href="/solutions#cctv-distribution"
//                         onClick={() => setIsSolutionsOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         CCTV Streaming & Distribution
//                       </Link>
//                     </div>
                    
//                     {/* Right side - Image */}
//                     <div className="w-50 relative overflow-hidden">
//                       <Image
//                         src="/images/solutions.png"
//                         alt="Solutions"
//                         width={160}
//                         height={140}
//                         className="w-full h-60"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             {/* Industries Dropdown */}
//             <div 
//               className="relative"
//               onMouseEnter={!isOnIndustriesPage ? handleIndustriesMouseEnter : undefined}
//               onMouseLeave={!isOnIndustriesPage ? handleIndustriesMouseLeave : undefined}
//             >
//               <Link
//                 href="/industries"
//                 className={`transition-colors duration-200 font-medium ${
//                   isOnIndustriesPage 
//                     ? 'text-[#C9A23A] border-b-2 border-[#C9A23A] pb-1' 
//                     : 'text-[#0F172A] hover:text-[#C9A23A]'
//                 }`}
//               >
//                 Industries
//               </Link>
              
//               {isIndustriesOpen && !isOnIndustriesPage && (
//                 <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[528px] bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100">
//                   <div className="flex">
//                     {/* Left side - Menu items */}
//                     <div className="flex-1 p-6">
//                       <Link
//                         href="/industries#government"
//                         onClick={() => setIsIndustriesOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         Government
//                       </Link>
//                       <Link
//                         href="/industries#fleet"
//                         onClick={() => setIsIndustriesOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         Fleet/Last Mile
//                       </Link>
//                       <Link
//                         href="/industries#rideshare"
//                         onClick={() => setIsIndustriesOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         Ride Share/Mobility
//                       </Link>
//                       <Link
//                         href="/industries#insurtech"
//                         onClick={() => setIsIndustriesOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         InsurTech
//                       </Link>
//                       <Link
//                         href="/industries#forensics"
//                         onClick={() => setIsIndustriesOpen(false)}
//                         className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
//                       >
//                         Forensics
//                       </Link>
//                     </div>
                    
//                     {/* Right side - Image */}
//                     <div className="w-50 relative overflow-hidden">
//                       <Image
//                         src="/images/Industries.png"
//                         alt="Industries"
//                      width={160}
//                         height={140}
//                         className="w-full h-60"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/about"
//               className="text-[#0F172A] hover:text-[#C9A23A] transition-colors duration-200 font-medium"
//             >
//               About
//             </Link>
//           </div>

//      {/* Contact Button - Far Right */}
//           <div className="hidden md:flex md:items-center md:justify-end w-1/4">
//             <Link
//               href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
//               className="bg-[#C9A23A] text-white px-6 py-2.5 rounded-md hover:bg-[#E7C873] transition-colors duration-200 font-semibold"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Hamburger Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-[#0F172A] hover:text-[#C9A23A] focus:outline-none focus:ring-2 focus:ring-[#C9A23A] rounded-md p-2"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isMenuOpen ? (
//                   <path d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu - Dropdown */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4 space-y-2">
//             <Link
//               href="/solutions"
//               className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Solutions
//             </Link>
//             <Link
//               href="/industries"
//               className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Industries
//             </Link>
//             <Link
//               href="/about"
//               className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="block px-4 py-3 bg-[#C9A23A] text-white hover:bg-[#E7C873] transition-colors duration-200 rounded-md font-semibold text-center"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }




'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const pathname = usePathname();
  const isOnSolutionsPage = pathname === '/solutions';
  const isOnIndustriesPage = pathname === '/industries';
  const isOnDeveloperPage = pathname?.startsWith('/developer');
  const isOnCompanyPage = pathname?.startsWith('/company') || pathname === '/about' || pathname === '/privacy-policy' || pathname === '/terms-of-service';

  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const developerTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 300);
  };

  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    }
    setIsIndustriesOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 300);
  };

  const handleDeveloperMouseEnter = () => {
    if (developerTimeoutRef.current) {
      clearTimeout(developerTimeoutRef.current);
    }
    setIsDeveloperOpen(true);
  };

  const handleDeveloperMouseLeave = () => {
    developerTimeoutRef.current = setTimeout(() => {
      setIsDeveloperOpen(false);
    }, 300);
  };

  const handleCompanyMouseEnter = () => {
    if (companyTimeoutRef.current) {
      clearTimeout(companyTimeoutRef.current);
    }
    setIsCompanyOpen(true);
  };

  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setIsCompanyOpen(false);
    }, 300);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0 w-1/4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Argus Logo"
                width={120}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center Aligned */}
          <div className="hidden md:flex md:items-center md:justify-center md:space-x-8 flex-1">
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={!isOnSolutionsPage ? handleSolutionsMouseEnter : undefined}
              onMouseLeave={!isOnSolutionsPage ? handleSolutionsMouseLeave : undefined}
            >
              <Link
                href="/solutions"
                className={`transition-colors duration-200 font-medium ${
                  isOnSolutionsPage 
                    ? 'text-[#C9A23A] border-b-2 border-[#C9A23A] pb-1' 
                    : 'text-[#0F172A] hover:text-[#C9A23A]'
                }`}
              >
                Solutions
              </Link>
              
              {isSolutionsOpen && !isOnSolutionsPage && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[528px] bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100">
                  <div className="flex">
                    {/* Left side - Menu items */}
                    <div className="flex-1 p-6">
                      <Link
                        href="/solutions#mobility"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Mobility & Traffic Intelligence
                      </Link>
                      <Link
                        href="/solutions#incident-911"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Incident Management & 911
                      </Link>
                      <Link
                        href="/solutions#public-records"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Public Records & Open Data
                      </Link>
                      <Link
                        href="/solutions#cctv-distribution"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        CCTV Streaming & Distribution
                      </Link>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="w-48 relative bg-gray-50">
                      <Image
                        src="/images/sol.png"
                        alt="Solutions"
                        width={192}
                        height={240}
                        className="w-full h-60 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={!isOnIndustriesPage ? handleIndustriesMouseEnter : undefined}
              onMouseLeave={!isOnIndustriesPage ? handleIndustriesMouseLeave : undefined}
            >
              <Link
                href="/industries"
                className={`transition-colors duration-200 font-medium ${
                  isOnIndustriesPage 
                    ? 'text-[#C9A23A] border-b-2 border-[#C9A23A] pb-1' 
                    : 'text-[#0F172A] hover:text-[#C9A23A]'
                }`}
              >
                Industries
              </Link>
              
              {isIndustriesOpen && !isOnIndustriesPage && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[528px] bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100">
                  <div className="flex">
                    {/* Left side - Menu items */}
                    <div className="flex-1 p-6">
                      <Link
                        href="/industries#government"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Government
                      </Link>
                      <Link
                        href="/industries#fleet"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Fleet/Last Mile
                      </Link>
                      <Link
                        href="/industries#rideshare"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Ride Share/Mobility
                      </Link>
                      <Link
                        href="/industries#insurtech"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        InsurTech
                      </Link>
                      <Link
                        href="/industries#forensics"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Forensics
                      </Link>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="w-48 relative bg-gray-50">
                      <Image
                        src="/images/Industries.png"
                        alt="Industries"
                        width={192}
                        height={240}
                        className="w-full h-60 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Developer Dropdown */}
            <div
              className="relative"
              onMouseEnter={!isOnDeveloperPage ? handleDeveloperMouseEnter : undefined}
              onMouseLeave={!isOnDeveloperPage ? handleDeveloperMouseLeave : undefined}
            >
              <Link
                href="/developer"
                className={`transition-colors duration-200 font-medium ${
                  isOnDeveloperPage
                    ? 'text-[#C9A23A] border-b-2 border-[#C9A23A] pb-1'
                    : 'text-[#0F172A] hover:text-[#C9A23A]'
                }`}
              >
                Developer
              </Link>

              {isDeveloperOpen && !isOnDeveloperPage && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[400px] bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <Link
                      href="/developer/api"
                      onClick={() => setIsDeveloperOpen(false)}
                      className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                    >
                      <span className="block font-semibold">API Documentation</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Integrate real-time traffic intelligence</span>
                    </Link>
                    <Link
                      href="/developer/data-sources"
                      onClick={() => setIsDeveloperOpen(false)}
                      className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                    >
                      <span className="block font-semibold">Aggregated Data Sources</span>
                      <span className="block text-xs text-gray-500 mt-0.5">911, telematics, sensors, video inference</span>
                    </Link>
                    <a
                      href="https://argusapi.ai/documentation"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsDeveloperOpen(false)}
                      className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                    >
                      <span className="block font-semibold">Full API Reference</span>
                      <span className="block text-xs text-gray-500 mt-0.5">argusapi.ai documentation</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={!isOnCompanyPage ? handleCompanyMouseEnter : undefined}
              onMouseLeave={!isOnCompanyPage ? handleCompanyMouseLeave : undefined}
            >
              <span
                className={`cursor-pointer transition-colors duration-200 font-medium ${
                  isOnCompanyPage
                    ? 'text-[#C9A23A] border-b-2 border-[#C9A23A] pb-1'
                    : 'text-[#0F172A] hover:text-[#C9A23A]'
                }`}
              >
                Company
              </span>

              {isCompanyOpen && !isOnCompanyPage && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[400px] bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <Link
                      href="/about"
                      onClick={() => setIsCompanyOpen(false)}
                      className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/company/vision"
                      onClick={() => setIsCompanyOpen(false)}
                      className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                    >
                      Our Vision
                    </Link>
                    <Link
                      href="/company/contact"
                      onClick={() => setIsCompanyOpen(false)}
                      className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/company/blog"
                      onClick={() => setIsCompanyOpen(false)}
                      className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                    >
                      Blog
                    </Link>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/privacy-policy"
                        onClick={() => setIsCompanyOpen(false)}
                        className="block py-2 px-3 text-gray-500 hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md text-xs"
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        href="/terms-of-service"
                        onClick={() => setIsCompanyOpen(false)}
                        className="block py-2 px-3 text-gray-500 hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md text-xs"
                      >
                        Terms of Service
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Performance - Coming Soon */}
            <span
              className="text-gray-400 cursor-default font-medium flex items-center gap-1"
              title="Coming Soon"
            >
              Performance
              <span className="text-[10px] bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full uppercase tracking-wider">Soon</span>
            </span>
          </div>

          {/* Contact Button - Far Right */}
          <div className="hidden md:flex md:items-center md:justify-end w-1/4">
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
              className="bg-[#7FB7FF] text-[#0F172A] px-6 py-2.5 rounded-md hover:bg-[#A5CEFF] transition-colors duration-200 font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0F172A] hover:text-[#C9A23A] focus:outline-none focus:ring-2 focus:ring-[#C9A23A] rounded-md p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/solutions"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/developer"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Developer
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/company/vision"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Vision
            </Link>
            <Link
              href="/company/blog"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <span className="block px-4 py-3 text-gray-400 rounded-md font-medium">
              Performance <span className="text-xs bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full ml-1">Soon</span>
            </span>
            <Link
              href="/company/contact"
              className="block px-4 py-3 bg-[#7FB7FF] text-[#0F172A] hover:bg-[#A5CEFF] transition-colors duration-200 rounded-md font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}