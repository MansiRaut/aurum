import { lounge } from "@/media";

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
                <div>
                    <img
                        src={lounge.src}
                        alt="Brand Story"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
