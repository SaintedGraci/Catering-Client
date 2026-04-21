import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-amber-600" style={{ fontFamily: 'serif' }}>
          Catering Co.
        </Link>
        
        {/* Center Navigation Links with Dropdowns */}
        <div className="hidden md:flex gap-8">
          {/* Catering & Events Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
              Catering & Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/catering/corporate" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Corporate Events
              </Link>
              <Link href="/catering/weddings" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Weddings
              </Link>
              <Link href="/catering/private-parties" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Private Parties
              </Link>
              <Link href="/catering/social-events" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Social Events
              </Link>
            </div>
          </div>

          {/* Venues Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
              Venues
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/venues/indoor" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Indoor Venues
              </Link>
              <Link href="/venues/outdoor" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Outdoor Venues
              </Link>
              <Link href="/venues/ballrooms" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Ballrooms
              </Link>
              <Link href="/venues/gardens" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Gardens
              </Link>
            </div>
          </div>

          {/* Rentals Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
              Rentals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/rentals/tables-chairs" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Tables & Chairs
              </Link>
              <Link href="/rentals/linens" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Linens & Tableware
              </Link>
              <Link href="/rentals/tents" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Tents & Canopies
              </Link>
              <Link href="/rentals/decor" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Decor & Lighting
              </Link>
            </div>
          </div>

          {/* Our Menus Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-amber-600 transition flex items-center gap-1">
              Our Menus
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/menu/appetizers" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Appetizers
              </Link>
              <Link href="/menu/main-courses" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Main Courses
              </Link>
              <Link href="/menu/desserts" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Desserts
              </Link>
              <Link href="/menu/beverages" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Beverages
              </Link>
              <Link href="/menu/packages" className="block px-4 py-3 hover:bg-amber-50 hover:text-amber-600">
                Packages
              </Link>
            </div>
          </div>

          {/* About - Simple Link */}
          <Link href="/about" className="text-gray-700 hover:text-amber-600 transition">
            About
          </Link>

          {/* Contact - Simple Link */}
          <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition">
            Contact
          </Link>
        </div>

        {/* Right Side - CTA Button */}
        <Link 
          href="/contact" 
          className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition font-medium uppercase tracking-wide"
        >
          START PLANNING
        </Link>
      </div>
    </nav>
  );
}
