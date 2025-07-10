import { brandStory } from "@/media";
import SectionHeading from "../atoms/SectionHeading";
import Image from "next/image";

export default function BrandStories() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Heading, Paragraph and Button */}
          <div>
            <SectionHeading className="text-left mb-6">Brand Stories</SectionHeading>

            <p className="text-gray-700 text-lg mb-6">
              Our members don't just join a network—they enter a space designed
              to accelerate growth, foster collaborations, and share real
              impact. Explore stories that highlight how strategic connections
              turn visions into ventures.
            </p>

            <button className="text-black border border-black px-6 py-2 rounded hover:bg-gray-100 transition font-medium">
              Read More
            </button>
          </div>

          {/* Right: Image */}
          <div>
            <Image
              src={brandStory.src}
              alt="Brand Story"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
