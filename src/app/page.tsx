import FeaturedTour from "@/components/FeaturedTour";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import TravelCategories from "@/components/TravelCategories";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PopularDestinations />
        <WhyChooseUs />
        <FeaturedTour />
        <TravelCategories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
