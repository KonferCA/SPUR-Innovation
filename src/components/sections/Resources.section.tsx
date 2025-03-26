import { Header } from "@components";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const ResourcesSection: React.FC = () => {
    const cardData = [
        {
            title: "Investments & Funding",
            description:
                "Placerat maecenas aliquam primis duis viverra integer. Vehicula nulla bibendum facilisis per quis vehicula risus donec euismod.",
        },
        {
            title: "AI-Driven Data Centers",
            description:
                "Placerat maecenas aliquam primis duis viverra integer. Vehicula nulla bibendum facilisis per quis vehicula risus donec euismod.",
        },
        {
            title: "Office Spaces",
            description:
                "Placerat maecenas aliquam primis duis viverra integer. Vehicula nulla bibendum facilisis per quis vehicula risus donec euismod.",
        },
    ];

    return (
        <div>
            <section className="relative h-screen bg-[#0B1219] to-10%">
                <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-6xl">
                    <div className="flex gap-5 leading-relaxed">
                        <Header size="h1" gradient="right">
                            Catalysts for
                        </Header>
                    </div>
                    <div className="flex gap-5">
                        <Header size="h1" gradient="left">
                            Technological Advancements
                        </Header>
                    </div>
                    <p className="text-center text-lg w-2/3 mt-8">
                        SPUR lorem ipsum odor amet, consectetuer adipiscing
                        elit. Dictum convallis nostra vel dui diam. Curabitur ex
                        nunc quis sit.{" "}
                    </p>
                </div>
                {/* Cards (will be converted into a component) */}
                <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 w-2/3 flex gap-10">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="border-1 border-[rgba(251,198,159,0.8)] rounded-4xl px-8 py-10 bg-[linear-gradient(to_bottom_left,_#0B1219_60%,_#16202A_100%)]"
                        >
                            <div className="flex w-full justify-between">
                                <h1 className="text-2xl mb-10">{card.title}</h1>
                                <ArrowTopRightIcon width={25} height={25} />
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
