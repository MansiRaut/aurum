import { lounge } from "@/media";
import Image from "next/image";

export default function DigitalLounge() {
    return (
        <section className="bg-blue-950 text-white py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Step into the Digital Lounge
                </h2>
                <p className="text-md md:text-lg mb-8 text-yellow-600">
                    Explore resources, conversations, and upcoming events designed to grow your entrepreneurial journey.
                </p>
                <div className="relative w-full h-64 md:h-96 mt-6 rounded-lg overflow-hidden">
                    <Image
                        src={lounge.src}
                        alt="Digital Lounge"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
