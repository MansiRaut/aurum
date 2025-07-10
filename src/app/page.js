import Header from "@/components/layout/Header";
import BrandStories from "@/components/organisms/BrandStories";
import CTASection from "@/components/organisms/CTASection";
import DigitalLounge from "@/components/organisms/DigitalLounge";
import FAQSection from "@/components/organisms/FAQSection";
import Footer from "@/components/organisms/Footer";
import HeroSection from "@/components/organisms/HeroSection";
import HowItWorks from "@/components/organisms/HowItWorks";
import MembershipPlans from "@/components/organisms/MembershipPlans";
import NetworkActivity from "@/components/organisms/NetworkActivity";
import RealImpact from "@/components/organisms/RealImpact";
import StatsSection from "@/components/organisms/StatsSection";
import Testimonials from "@/components/organisms/Testimonials";
import WhyChooseUs from "@/components/organisms/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <BrandStories />
      <WhyChooseUs />
      <NetworkActivity />
      <HowItWorks />
      <DigitalLounge />
      <RealImpact/>
      <Testimonials />
      <MembershipPlans />
      <CTASection />
      <FAQSection />
      <Footer/>
    </>
  );
}
