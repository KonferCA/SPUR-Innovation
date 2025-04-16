import {
    McGillLogo,
    QueensLogo,
    TMULogo,
    UBCLogo,
    UWLogo,
    WLULogo,

    BlackberryLogo,
    QNXLogo,
    PurolatorLogo,
    AvidbotsLogo,
    FluidAiLogo,
    CloudwifiLogo,
    AlchemyLogo,
    GeneracLogo,
    DirectGlobalLogo,
    FareEatsLogo,
    NicoyaLogo,
    CrawfordLogo,
    MolexLogo,
    MagnetLogo,
    WSIBLogo,

    KonferLogo
} from "@assets";
import { Button, Header, Slider } from "@components";

const PartnersSection: React.FC = () => {
    const schools = [
        { title: "McGill University", image: McGillLogo },
        { title: "Queens University", image: QueensLogo },
        { title: "Toronto Metropolitan University", image: TMULogo },
        { title: "University of British Columbia", image: UBCLogo },
        { title: "University of Waterloo", image: UWLogo },
        { title: "Wilfrid Laurier University", image: WLULogo },
    ];

    const companies = [
        { title: "Blackberry", image: BlackberryLogo },
        { title: "QNX", image: QNXLogo },
        { title: "Purolator", image: PurolatorLogo },
        { title: "Avidbots", image: AvidbotsLogo },
        { title: "FluidAi", image: FluidAiLogo },
        { title: "Cloudwifi", image: CloudwifiLogo },
        { title: "Alchemy", image: AlchemyLogo },
        { title: "Generac", image: GeneracLogo },
        { title: "Direct Global", image: DirectGlobalLogo },
        { title: "Fare Eats", image: FareEatsLogo },
        { title: "Nicoya", image: NicoyaLogo },
        { title: "Crawford", image: CrawfordLogo },
        { title: "Molex", image: MolexLogo },
        { title: "Magnet Forensics", image: MagnetLogo },
        { title: "WSIB Ontario", image: WSIBLogo },
        { title: "Konfer", image: KonferLogo },
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
                <div className="flex flex-col items-center justify-center md:flex-row gap-5 md:gap-10 w-fit">
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
                        className="w-full md:w-fit h-full text-center flex items-center justify-center py-2 md:py-0"
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
                    {schools.map((partner, index) => (
                        <Slider.Slide key={index}>
                            <img
                                src={partner.image}
                                alt={partner.title}
                                className="w-auto h-20"
                            />
                        </Slider.Slide>
                    ))}
                </Slider>

                <Slider
                    speed={25}
                    direction="left"
                    pauseOnHover
                    className="mt-6"
                    >
                    {companies.map((company, index) => (
                        <Slider.Slide key={index}>
                            <img
                                src={company.image}
                                alt={company.title}
                                className="w-auto h-20"
                            />
                        </Slider.Slide>
                    ))}
                </Slider>


            </section>
        </div>
    );
};

export { PartnersSection };
