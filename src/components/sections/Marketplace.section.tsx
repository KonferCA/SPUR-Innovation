import { Button, CardComponent, Header } from "@components";

const MarketplaceSection: React.FC = () => {
    return (
        <div>
            <section className="relative w-full lg:h-screen bg-gradient-to-tr from-[#F59047]/70 via-[#2C2C2F]/40 to-[#0B1219] flex flex-col lg:flex-row justify-center items-center">
                <div className="flex flex-col justfiy-center lg:justify-between gap-10 sm:gap-20 lg:gap-32 text-center lg:text-start px-20 py-30 md:py-20 lg:p-25">
                    <div>
                        <Header
                            size="h1"
                            gradient="right"
                            className="flex justify-center lg:justify-start "
                        >
                            Onboard by SPUR
                        </Header>
                        <Header
                            size="h1"
                            gradient="left"
                            className="flex justify-center lg:justify-start"
                        >
                            Featured Projects
                        </Header>
                        <p className="my-10">
                            SPUR lorem ipsum odor amet, consectetuer adipiscing
                            elit. Dictum convallis nostra vel dui diam.
                            Curabitur ex nunc quis sit. Itc vitae feugiat
                            tristique, nibh velit suscipit nulla, sit amet
                            suscipit diam magna ut nunc.
                        </p>
                        <Button intent="secondary">Investment Portal</Button>
                    </div>
                    <div>
                        <Header size="h2" className="text-white mb-4">SPUR Innovation Fund</Header>
                        <p>
                            Placerat maecenas aliquam primis duis viverra
                            integer. Vehicula nulla bibendum facilisis per quis
                            vehicula risus donec euismod. Curabitur aliquet sem
                            vel fermentum lacinia. Aliquam sodales neque lorem,
                            aliquam luctus tellus viverra ut.
                        </p>
                    </div>
                </div>
                {/* Card slide deck */}
                <div className="relative w-full lg:mr-30 p-10">
                    <CardComponent />
                </div>
            </section>
        </div>
    );
};

export { MarketplaceSection };
