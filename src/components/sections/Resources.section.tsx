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
            <section className="lg:h-screen py-20 px-5 bg-[#0B1219] to-10% flex flex-col justify-center items-center gap-10 md:gap-30">
                <div className="flex flex-col items-center">
                    <Header size="h1" gradient="right">
                        Catalysts for
                    </Header>
                    <Header size="h1" gradient="left">
                        Technological Advancements
                    </Header>
                    <p className="text-center text-lg w-full sm:w-2/3 mt-8 px-6">
                        SPUR lorem ipsum odor amet, consectetuer adipiscing
                        elit. Dictum convallis nostra vel dui diam. Curabitur ex
                        nunc quis sit.{" "}
                    </p>
                </div>
                {/* Cards (will be converted into a component) */}
                <div className="w-5/6 xl:w-3/4 flex flex-col lg:flex-row gap-6 xl:gap-10">
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
