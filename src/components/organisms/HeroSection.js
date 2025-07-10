import { banner } from "@/media";
import JoinButton from "../atoms/JoinButton";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 text-white"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="md:max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Grow Your Network. Amplify Your Success.
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Connect with strategic collaborators, mentors, and clients from trusted entrepreneurial peer groups.
          </p>
          <JoinButton/>
        </div>
      </div>
    </section>
  );
}
