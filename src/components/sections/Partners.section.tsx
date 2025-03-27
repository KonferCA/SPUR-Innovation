import {
    McGill_logo,
    Queens_logo,
    TMU_logo,
    UBC_logo,
    UW_logo,
    WLU_logo,
} from "@assets";
import { Button, Header, Slider } from "@components";

const PartnersSection: React.FC = () => {
    const partners = [
        {
            id: 1,
            title: "McGill University",
            image: McGill_logo,
        },
        {
            id: 2,
            title: "Queens University",
            image: Queens_logo,
        },
        {
            id: 3,
            title: "Toronto Metropolitan University",
            image: TMU_logo,
        },
        {
            id: 4,
            title: "University of British Columbia",
            image: UBC_logo,
        },
        {
            id: 5,
            title: "University of Waterloo",
            image: UW_logo,
        },
        {
            id: 6,
            title: "Wilfrid Laurier University",
            image: WLU_logo,
        },
    ];
    return (
        <div>
            <section className="relative h-screen bg-nearBlack to-10% flex flex-col gap-20 items-center justify-center">
                <div className="flex flex-col items-center gap-10 text-6xl">
                    <Header size="h1" gradient="right">
                        Join the SPUR Community
                    </Header>
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
                                className="h-18"
                            />
                        </Slider.Slide>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export { PartnersSection };
