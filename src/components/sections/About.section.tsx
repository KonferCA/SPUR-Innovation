import { Button, Header } from "@components";
import { HalfEllipse } from "@assets";

const AboutSection: React.FC = () => {
    return (
        <div>
            <section className="relative h-screen bg-[#050B10] to-10%">
                <div className="flex flex-col items-center pt-30 lg:pt-40 px-4 sm:px-10">
                    <Header size="h1" gradient="right">
                        A Community Spurring
                    </Header>
                    <Header size="h1" gradient="left">
                        Innovation and Enterprise
                    </Header>
                </div>
                <img
                    className="absolute top-65 sm:top-50 md:top-55 lg:top-40 xl:top-20 2xl:top-0"
                    src={HalfEllipse}
                />
                <div className="absolute top-1/2 lg:top-7/12 left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row w-2/3 lg:w-5/6 xl:w-2/3">
                    <Header
                        size="h2"
                        className="w-full text-center lg:text-end lg:pr-8 xl:pr-10 pt-4 mb-4"
                    >
                        Our Mandate
                    </Header>
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:px-10 lg:px-8">
                        <p className="mb-6">
                            Placerat maecenas aliquam primis duis viverra
                            integer. Vehicula nulla bibendum facilisis per quis
                            vehicula risus donec euismod. Curabitur aliquet sem
                            vel fermentum lacinia. Aliquam sodales neque lorem,
                            aliquam luctus tellus viverra ut.
                        </p>
                        <Button intent="secondary">Learn more</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export { AboutSection };
