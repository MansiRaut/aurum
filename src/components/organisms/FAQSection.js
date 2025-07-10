import AccordionItem from "@/components/molecules/AccordionItem";

export default function FAQSection() {
  const faqs = [
    {
      question: "Who can join Aurum?",
      answer: "Any entrepreneur or founder who’s actively building or scaling a business.",
    },
    {
      question: "How does matchmaking work?",
      answer: "We use interest, industry, and stage filters to connect you with relevant peer groups.",
    },
    {
      question: "Are events virtual or in-person?",
      answer: "We host both! Many networking sessions and masterclasses are online, while local chapters meet in person too.",
    },
  ];

  return (
    <section className="bg-white py-16" id="blogs">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Clear answers to common questions about membership, networking opportunities, and the Aurum experience.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}