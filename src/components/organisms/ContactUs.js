export default function ContactUs() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-gray-800">
      <h3 className="text-2xl font-bold mb-2">Let’s talk</h3>
      <p className="text-sm text-gray-600 mb-8">
        Have questions? We’re here to help you grow your network.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Type your message here..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
