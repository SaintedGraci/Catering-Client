import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Exquisite Catering Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Elevate your events with our premium catering solutions. From intimate gatherings to grand celebrations.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/menu" 
            className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
          >
            View Menu
          </Link>
          <Link 
            href="/contact" 
            className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Get Quote
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Corporate Events</h3>
            <p className="text-gray-600">Professional catering for meetings, conferences, and corporate gatherings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Weddings</h3>
            <p className="text-gray-600">Make your special day unforgettable with our elegant wedding catering.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Private Parties</h3>
            <p className="text-gray-600">Customized menus for birthdays, anniversaries, and celebrations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
