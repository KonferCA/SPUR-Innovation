import {
    Navbar,
    HeroSection,
    AboutSection,
    ResourcesSection,
    MarketplaceSection,
    FooterSection,
    // InnovationFundSection,
    PartnersSection,
    EventsSection,
} from "@components";

const Landing: React.FC = () => {
    return (
        <div className="bg-[#050B10] transition ease-in">
            <Navbar />
            <main>
                <div id="hero">
                    <HeroSection />
                </div>
                <div id="about">
                    <AboutSection />
                </div>
                <div id="resources">
                    <ResourcesSection />
                </div>
                <div id="innovationfund">
                {/* <div id="marketplace"> */}
                    <MarketplaceSection />
                </div>
                {/* <div id="innovationfund">
                    <InnovationFundSection />
                </div> */}
                <div id="news">
                    <EventsSection />
                </div>
                <div id="partners">
                    <PartnersSection />
                </div>
            </main>
            <FooterSection />
        </div>
    );
};

export { Landing };
