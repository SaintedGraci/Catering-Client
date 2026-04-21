import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Full-Screen Background */}
      <section className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070')",
      }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Transparent Navigation Header */}
        <nav className="absolute top-0 left-0 right-0 z-20 bg-transparent">
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold text-white tracking-wide" style={{ fontFamily: 'serif' }}>
              Catering Co.
            </Link>
            
            {/* Center Navigation Links with Dropdowns */}
            <div className="hidden md:flex gap-8 text-white">
              {/* Catering & Events Dropdown */}
              <div className="relative group">
                <button className="hover:text-amber-400 transition flex items-center gap-1">
                  Catering & Events
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                <button className="hover:text-amber-400 transition flex items-center gap-1">
                  Venues
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                <button className="hover:text-amber-400 transition flex items-center gap-1">
                  Rentals
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                <button className="hover:text-amber-400 transition flex items-center gap-1">
                  Our Menus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-700 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
              <Link href="/about" className="hover:text-amber-400 transition">
                About
              </Link>

              {/* Contact - Simple Link */}
              <Link href="/contact" className="hover:text-amber-400 transition">
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

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'serif' }}>
            Exquisite Catering
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Creating unforgettable culinary experiences for your special occasions
          </p>
          <div className="flex gap-4">
            <Link 
              href="/menu" 
              className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition font-medium"
            >
              View Menu
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition border border-white/30 font-medium"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From intimate gatherings to grand celebrations, we bring culinary excellence to every event
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-semibold mb-3">Corporate Events</h3>
            <p className="text-gray-600">Professional catering for meetings, conferences, and corporate gatherings with impeccable service.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">💍</div>
            <h3 className="text-2xl font-semibold mb-3">Weddings</h3>
            <p className="text-gray-600">Make your special day unforgettable with our elegant wedding catering and personalized menus.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎊</div>
            <h3 className="text-2xl font-semibold mb-3">Private Parties</h3>
            <p className="text-gray-600">Customized menus for birthdays, anniversaries, and celebrations of all sizes.</p>
          </div>
        </div>
      </section>

      {/* Featured Section 1 - Image Left */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/c1.jpg" 
                alt="Catering service" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Exquisite Culinary Experiences</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our team of expert chefs crafts each dish with precision and passion, using only the finest ingredients to create memorable dining experiences for your guests.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-amber-600">✓</span>
                  <span>Farm-to-table fresh ingredients</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600">✓</span>
                  <span>Customizable menu options</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600">✓</span>
                  <span>Professional presentation</span>
                </li>
              </ul>
              <Link 
                href="/menu" 
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
              >
                Explore Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 2 - Image Right */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6">Perfect Venues for Every Occasion</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Choose from our stunning collection of venues, each offering unique ambiance and amenities to make your event truly special.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-amber-600">✓</span>
                  <span>Indoor & outdoor options</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600">✓</span>
                  <span>Flexible capacity arrangements</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-600">✓</span>
                  <span>Full-service event coordination</span>
                </li>
              </ul>
              <Link 
                href="/venues" 
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
              >
                View Venues
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <img 
                src="/c2.jpg" 
                alt="Event venue" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section 3 - Full Width */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/c3.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-6">Complete Event Solutions</h2>
          <p className="text-xl mb-8 max-w-2xl">
            From elegant table settings to stunning decor, we provide everything you need to create an unforgettable event
          </p>
          <Link 
            href="/rentals" 
            className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition font-medium"
          >
            Explore Rentals
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">500+</div>
              <p className="text-gray-600">Events Catered</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">100%</div>
              <p className="text-gray-600">Fresh Ingredients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8">Let's create something extraordinary together</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
