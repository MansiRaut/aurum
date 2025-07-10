import { Lightbulb, Users, Sparkles } from "lucide-react";
import WhyCard from "@/components/molecules/WhyCard";
import SectionHeading from "@/components/atoms/SectionHeading";

export default function WhyChooseUs() {
    const items = [
        {
            icon: <Lightbulb className="w-5 h-5 text-blue-900" />,
            bg: "bg-blue-100",
            title: "Curated Connections",
            desc: "Meet only relevant founders, mentors, and clients through our intelligent matchmaking.",
        },
        {
            icon: <Users className="w-5 h-5 text-pink-900" />,
            bg: "bg-pink-100",
            title: "Peer-Led Circles",
            desc: "Grow with like-minded individuals in trusted, confidential peer groups.",
        },
        {
            icon: <Sparkles className="w-5 h-5 text-yellow-900" />,
            bg: "bg-yellow-100",
            title: "Real Impact",
            desc: "Gain traction, funding, and clarity through curated sessions and active communities.",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 border-y border-gray-100" id="about">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                    Why business leaders choose us
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    Our platform delivers measurable result through strategic connections and Qualified referrals.
                </p>

                <div className="grid gap-8 md:grid-cols-3 mt-10 text-left">
                    {items.map((item, idx) => (
                        <WhyCard
                            key={idx}
                            icon={item.icon}
                            bgColor={item.bg}
                            title={item.title}
                            description={item.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
