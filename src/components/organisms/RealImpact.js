"use client";
import { TrendingUp } from "lucide-react";
import WhyCard from "@/components/molecules/WhyCard";

export default function RealImpact() {
  const cards = [
    {
      title: "Active Members",
      stat: "5,000+",
      color: "text-blue-600",
      iconBg: "bg-blue-100",
      description:
        "Connect with decision-makers from diverse industries, all focused on mutual growth and success.",
    },
    {
      title: "Successful Referrals",
      stat: "3,500+",
      color: "text-green-600",
      iconBg: "bg-green-100",
      description:
        "Quality introductions that lead to meaningful business relationships and opportunities.",
    },
    {
      title: "Revenue Generated",
      stat: "23.7M",
      color: "text-purple-600",
      iconBg: "bg-purple-100",
      description:
        "Our members have collectively generated millions in revenue through network connections.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
          Real Impact, Real Result
        </h2>
        <p className="text-sm text-gray-600 mt-2 mb-12 max-w-xl mx-auto">
          Join thousands of professionals who have transformed their business
          through strategic networking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((card, idx) => (
            <WhyCard
              key={idx}
              title={card.title}
              description={card.description}
              icon={<TrendingUp className={`w-5 h-5 ${card.color}`} />}
              bgColor={card.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
