import { Navbar, HeroSection, AboutSection, ResourcesSection, MarketplaceSection } from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-[#050B10] transition ease-in">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResourcesSection />
        <MarketplaceSection />
      </main>
    </div>
  );
};

export { Landing };
