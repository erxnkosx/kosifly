import e2 from "@/data/etalage-2.json";
import e3 from "@/data/etalage-3.json";
import e4 from "@/data/etalage-4.json";
import e5 from "@/data/etalage-5.json";
import { EtalageCarousel } from "@/components/home/EtalageCarousel";
import { DataSlide, type EtalageData } from "@/components/home/etalage/DataSlide";
import { Slide1 } from "@/components/home/etalage/Slide1";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Reviews } from "@/components/home/Reviews";
import { Verschil } from "@/components/home/Verschil";
import { WatWeDoen } from "@/components/home/WatWeDoen";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar active="Home" />
      <main id="main-content" className="home-page">
        <Hero />
        <div className="home-visual legacy-home">
          <div className="legacy-canvas">
          </div>
        </div>
        <Verschil />
        <WatWeDoen />
        <div id="projecten" className="home-visual legacy-home">
          <div className="legacy-canvas">
            <EtalageCarousel
              slides={[
                <Slide1 key={1} />,
                <DataSlide id="project-2" key={2} data={e2 as unknown as EtalageData} />,
                <DataSlide id="project-3" key={3} data={e3 as unknown as EtalageData} />,
                <DataSlide id="project-4" key={4} data={e4 as unknown as EtalageData} />,
                <DataSlide id="project-5" key={5} data={e5 as unknown as EtalageData} />,
              ]}
            />
          </div>
        </div>
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
