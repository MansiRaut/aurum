import ContactUs from "@/components/organisms/ContactUs";

export default function CTASection() {
  const infoPoints = [
    "Accelerate your network.",
    "Curated peer circles.",
    "Events and collaborations.",
    "Membership benefits and pricing.",
  ];

  return (
    <section className="bg-blue-950 text-white py-16" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main CTA Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Start Growing Your Network Today
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          It’s free to get started. Apply now and begin your journey with Aurum.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Info points */}
          <div className="space-y-6">
            {infoPoints.map((point, idx) => (
              <div
                key={idx}
                className="border-l-4 border-yellow-600 pl-4 text-gray-200"
              >
                <h3 className="text-2xl font-bold mb-2">{point}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit placeat dolores voluptatem, quas voluptate sed distinctio id natus expedita ratione! </p>
              </div>
            ))}
          </div>

          {/* Right: Contact form */}
          <ContactUs />
        </div>
      </div>
    </section>
  );
}
