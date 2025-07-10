"use client";
import Slider from "react-slick";
import SectionHeading from "@/components/atoms/SectionHeading";
import Image from "next/image";

const testimonials = [
  {
    name: "Ruhan Kapoor",
    role: "Founder, EcoBite",
    quote: "Joining Aurum was a game-changer. I found my first investor through the network within 2 months!",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Karan Mehta",
    role: "Co-Founder, BuildBuddy",
    quote: "The mentorship and curated connections have helped us grow faster than we imagined.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Aisha Rahman",
    role: "CEO, CraftNest",
    quote: "It’s not just a network—it’s a real community of people rooting for each other.",
    image: "https://i.pravatar.cc/150?img=13",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <section className="bg-gray-50 py-16 border-y border-gray-100" id="podcast">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          What Our Members Say
        </h2>
        <p className="text-sm text-gray-600 mt-2 mb-10">
          Genuine voices from founders who’ve grown through the Aurum network.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="flex flex-col items-center">
                {/* Profile Picture */}
                <Image
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white shadow-md"
                />

                {/* Quote */}
                <p className="text-xl italic text-gray-800 mb-4 max-w-xl">“{t.quote}”</p>

                {/* Name + Role */}
                <p className="font-semibold text-blue-950">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>

                {/* Star Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.974 1.464 8.318L12 18.896l-7.4 4.704 1.464-8.318L.001 9.308l8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
