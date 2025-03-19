import { SlideDeckComponent } from "@components";

const EventsSection: React.FC = () => {
    return (
        <div>
            <section className="relative px-36 h-screen flex justify-center items-center bg-gradient-to-br from-spurOrange/70 via-[#2C2C2F]/40 to-nearBlack">
                {/* Slide Deck Card */}
                <div className="flex w-full justify-between items-center max-w-8xl h-[80vh] bg-nearBlack/5 backdrop-blur-3xl mx-auto border-1 border-white/30 rounded-4xl text-white shadow-inner-custom">
                    
                    {/* Card slide deck (Right-section) */}
                    <div className="relative flex w-1/2 max-w-5xl h-full">
                        <SlideDeckComponent />
                    </div>
                </div>
            </section>
        </div>
    );
};

export { EventsSection };
