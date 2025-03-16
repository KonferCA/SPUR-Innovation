import { Button, SlideDeckComponent } from "@components";

const InnovationFundSection: React.FC = () => {
    return (
        <div>
            <section className="relative px-36 h-screen flex justify-center items-center bg-gradient-to-br from-spurOrange/70 via-[#2C2C2F]/40 to-nearBlack">
                {/* Slide Deck Card */}
                <div className="flex w-full justify-between items-center max-w-8xl h-[80vh] bg-nearBlack/5 backdrop-blur-3xl mx-auto border-1 border-white/30 rounded-4xl text-white shadow-inner-custom">
                    {/* Innovation Fund Details (Left-section) */}
                    <div className="flex flex-col gap-6 justify-end items-start p-20 w-1/2">
                        {/* Title */}
                        <div className="flex gap-5 leading-relaxed text-6xl">
                            <h1 className="text-gradient">SPUR</h1>
                            <h1 className="text-gradient">Innovation</h1>
                            <h1 className="text-gradient">Fund</h1>
                        </div>
                        {/* Description */}
                        <p>
                            Placerat maecenas aliquam primis duis viverra
                            integer. Vehicula nulla bibendum facilisis per quis
                            vehicula risus donec euismod. Curabitur aliquet sem
                            vel fermentum lacinia. Aliquam sodales neque lorem,
                            aliquam luctus tellus viverra ut.
                        </p>
                        <Button intent="secondary">Learn More</Button>
                        <div className="flex flex-col gap-6 mt-16">
                            <h1 className="text-5xl">Revenue</h1>
                            <h1 className="text-9xl">89%</h1>
                        </div>
                    </div>
                    {/* Card slide deck (Right-section) */}
                    <div className="relative flex w-1/2 max-w-5xl h-full">
                        <SlideDeckComponent />
                    </div>
                </div>
            </section>
        </div>
    );
};

export { InnovationFundSection };
