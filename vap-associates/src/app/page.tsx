import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Team from "@/components/Team";
import Updates from "@/components/Updates";
import DueDates from "@/components/DueDates";
import Gst from "@/components/Gst";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Insights from "@/components/Insights";
import BlogPost from "@/components/BlogPost";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Header />
      {/* Every section must stay a direct child of <main>: the blog-post view hides siblings with CSS (main > *). */}
      <main id="top">
        <Hero />
        <Ticker />
        <About />
        <Team />
        <Updates />
        <DueDates />
        <Gst />
        <Process />
        <Services />
        <Insights />
        <BlogPost />
        <Contact />
      </main>
      <Footer />
      <PageEffects />
      <FloatingActions />
    </>
  );
}
