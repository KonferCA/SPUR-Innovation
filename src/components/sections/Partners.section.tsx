import { SpurLogo } from "@assets";
import { Button, Slider } from "@components";

const PartnersSection: React.FC = () => {
    const partners = [
        {
            id: 1,
            title: "Partner 1",
            image: SpurLogo,
        },
        {
            id: 2,
            title: "Partner 2",
            image: SpurLogo,
        },
        {
            id: 3,
            title: "Partner 3",
            image: SpurLogo,
        },
        {
            id: 4,
            title: "Partner 4",
            image: SpurLogo,
        },
    ];
    return (
        <div>
            <section className="relative h-screen bg-nearBlack to-10% flex flex-col gap-20 items-center justify-center">
                <div className="flex flex-col items-center gap-10 text-6xl">
                    <div className="flex gap-5 leading-relaxed">
                        <h1 className="text-gradient">Join</h1>
                        <h1 className="text-gradient">the</h1>
                        <h1 className="text-gradient">SPUR</h1>
                        <h1 className="text-gradient">Community</h1>
                    </div>
                    <p className="text-center text-lg w-2/3">
                        Placerat maecenas aliquam primis duis viverra integer.
                        Vehicula nulla bibendum facilisis per quis vehicula
                        risus donec euismod. Curabitur aliquet sem vel fermentum
                        lacinia.
                    </p>
                </div>
                <div className="flex gap-10 w-fit">
                    <Button intent="tertiary">Become a partner</Button>
                    <Button intent="secondary">Contact us</Button>
                </div>
                <Slider
                    speed={25}
                    direction="right"
                    pauseOnHover
                    className="mt-6"
                >
                    {partners.map((partner, index) => (
                        <Slider.Slide>
                            <img
                                key={index}
                                src={partner.image}
                                alt={partner.title}
                                className="h-16"
                            />
                        </Slider.Slide>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export { PartnersSection };
