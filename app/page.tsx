import About from "@/components/About";
import Community from "@/components/Community";
import Contacts from "@/components/Contacts";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Partners from "@/components/Partners";
import Resources from "@/components/Resources";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="mx-[100px]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Partners />
      <Resources />
      <Community />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}
