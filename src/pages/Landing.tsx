import {
    Navbar,
    HeroSection,
    AboutSection,
    ResourcesSection,
    MarketplaceSection,
    FooterSection,
    InnovationFundSection,
    PartnersSection,
} from "@components";

const Landing: React.FC = () => {
    return (
        <div className="bg-[#050B10] transition ease-in">
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <ResourcesSection />
                <MarketplaceSection />
                <InnovationFundSection />
                <PartnersSection />
            </main>
            <FooterSection />
        </div>
    );
};

export { Landing };
