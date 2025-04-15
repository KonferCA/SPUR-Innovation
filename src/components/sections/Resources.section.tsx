import { Header } from "@components";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const ResourcesSection: React.FC = () => {
    const cardData = [
        {
            title: "Investments & Funding",
            description:
                "SPUR manages a growing portfolio of data center assets, delivering exceptional value through strategic acquisitions. Our growth strategy combines disciplined capital allocation with technical expertise, allowing us to deliver exceptional returns for our investors while meeting the growing demand for advanced computing infrastructure.",
        },
        {
            title: "Flex Tech / Industrial / Lab / Office Space",
            description:
                "SPUR offers private and co-share office spaces across Canada’s leading tech hubs, including the Waterloo Region. Our locations are strategically positioned near major universities, colleges, and industry leaders like Google, Toyota, and OpenText. Designed for startups and established companies alike, our spaces provide access to cutting-edge infrastructure, vibrant communities, and essential amenities such as 24/7 access, conference rooms, high-speed internet, and more. With convenient access to public transportation and nearby commercial districts, SPUR office spaces are the perfect environment to foster innovation and collaboration.",
        },
        {
            title: "AI-Driven Data Centers",
            description:
                "Strategic presence across major Canadian tech hubs, providing state-of-the-art facilities and infrastructure. SPUR's data centers are strategically located in Canada's technology corridors, offering clients access to reliable infrastructure, renewable energy sources, and optimal connectivity with minimal latency.",
        },
    ];

    return (
        <div>
            <section className="2xl:h-screen py-20 px-5 flex flex-col justify-center items-center gap-10 md:gap-30 bg-gradient-to-b from-nearBlack via-darkNavy to-nearBlack">
                <div className="flex flex-col items-center">
                    <Header size="h1" gradient="right">
                        Catalysts for
                    </Header>
                    <Header size="h1" gradient="left">
                        Technological Advancements
                    </Header>
                    <p className="text-center text-lg w-full sm:w-2/3 mt-8 px-6">
                        SPUR is pioneering the next generation of sustainable,
                        scalable AI and quantum computing infrastructure.
                    </p>
                </div>
                {/* Cards (will be converted into a component) */}
                <div className="w-5/6 2xl:w-3/4 flex flex-col xl:flex-row gap-6 xl:gap-10">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="border-1 border-[rgba(251,198,159,0.8)] rounded-4xl px-8 py-10 bg-[linear-gradient(to_bottom_left,_#0B1219_60%,_#16202A_100%)]"
                        >
                            <div className="flex w-full justify-between">
                                <h1 className="text-2xl mb-10">{card.title}</h1>
                                <ArrowTopRightIcon className="animate-pulse" width={25} height={25} />
                            </div>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export { ResourcesSection };
