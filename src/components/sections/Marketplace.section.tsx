import { Button, CardComponent, Header } from "@components";

const MarketplaceSection: React.FC = () => {
    return (
        <div>
            <section className="relative w-full h-screen bg-gradient-to-tr from-[#F59047]/70 via-[#2C2C2F]/40 to-[#0B1219] flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col justify-between sm:gap-20 lg:gap-32 md:p-42">
                    <div>
                        <Header
                            size="h1"
                            gradient="right"
                            className="flex justify-center md:justify-start"
                        >
                            Onboard by SPUR
                        </Header>
                        <Header
                            size="h1"
                            gradient="left"
                            className="flex justify-center md:justify-start"
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
                        <h2 className="text-white">SPUR Innovation Fund</h2>
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
                <div className="relative w-full md:mr-30">
                    <CardComponent />
                </div>
            </section>
        </div>
    );
};

export { MarketplaceSection };
