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
            <section className="relative h-screen flex flex-col gap-10 md:gap-20 items-center justify-center bg-[radial-gradient(ellipse_40%_60%_at_50%_50%,_rgba(244,250,255,0.12),_transparent_70%)] bg-nearBlack">
                <div className="flex flex-col items-center gap-10 text-6xl px-10 md:px-6 lg:px-0">
                    <Header size="h1" gradient="right">
                        Join the SPUR Community
                    </Header>
                    <p className="text-center text-lg w-2/3">
                        Join SPUR's ever-increasing ecosystem of innovative
                        partners and companies, working together to drive
                        impactful change and foster collaboration.
                    </p>
                </div>
                <div className="flex flex-col items-center md:flex-row gap-5 md:gap-10 w-fit">
                    <Button
                        intent="tertiary"
                        link="https://capital.spuric.com/partners"
                        newtab
                    >
                        Become a partner
                    </Button>
                    <Button
                        intent="secondary"
                        link="mailto:info@spuric.com"
                        className="w-fit"
                    >
                        Contact us
                    </Button>
                </div>
                <Slider
                    speed={25}
                    direction="right"
                    pauseOnHover
                    className="mt-6"
                >
                    {partners.map((partner, index) => (
                        <Slider.Slide key={index}>
                            <img
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
