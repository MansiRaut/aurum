import WhyCard from "../molecules/WhyCard";

const steps = [
  {
    number: 1,
    title: "Apply to Join",
    description: "Submit your application to become a verified member.",
  },
  {
    number: 2,
    title: "Get Matched",
    description: "We connect you with relevant groups and peers.",
  },
  {
    number: 3,
    title: "Start Networking",
    description: "Attend curated events and connect with trusted entrepreneurs.",
  },
  {
    number: 4,
    title: "Grow Together",
    description: "Build long-term value through strategic collaborations.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">How It Works</h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto mt-2 mb-12">
          From sign-up to success — here’s how your journey unfolds inside Aurum.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {steps.map((step, idx) => (
            <WhyCard
              key={idx}
              num={step.number}
              title={step.title}
              description={step.description}
            />
            // <div
            //   key={idx}
            //   className="bg-white rounded-lg p-6 shadow hover:shadow-md transition"
            // >
            //   <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold mb-4">
            //     {step.number}
            //   </div>
            //   <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
            //   <p className="text-sm text-gray-600">{step.description}</p>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}
