import Navigation from '../components/Navigation';

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Get a Quote</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Event Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600">
                    <option>Corporate Event</option>
                    <option>Wedding</option>
                    <option>Private Party</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Tell us about your event..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@cateringservice.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 Culinary Street<br />Food City, FC 12345</p>
                </div>
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
