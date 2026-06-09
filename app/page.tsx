import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";


export const metadata = {
  title: "Gedo Holdings Ltd: Building Dreams, Enhancing Lives.",
  description:
    "Trusted construction company building across Kenya since 2018. Homes, offices, architectural design, renovations, cabro paving and precast panels.",
  openGraph: {
    title: "Gedo Holdings Ltd: Building Dreams, Enhancing Lives.",
    description:
      "Trusted construction company building across Kenya since 2018. Homes, offices, architectural design, renovations, cabro paving and precast panels.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Testimonials />
    </>
  );
}
