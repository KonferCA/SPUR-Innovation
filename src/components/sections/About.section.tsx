import { Button, Header } from "@components";
import { HalfEllipse } from "@assets";

const AboutSection: React.FC = () => {
    return (
        <div>
            <section className="relative h-screen bg-[#050B10] to-10%">
                <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="flex gap-5 leading-relaxed">
                        <Header size="h1" gradient="right">
                            A Community Spurring
                        </Header>
                    </div>
                    <div className="flex gap-5">
                        <Header size="h1" gradient="left">
                            Innovation and Enterprise
                        </Header>
                    </div>
                </div>
                <img className="absolute -top-8" src={HalfEllipse} />
                <div className="absolute top-4/6 left-1/2 transform -translate-x-1/2 flex w-2/3">
                    <Header size="h2" className="w-full text-end pr-10 pt-4">
                        Our Mandate
                    </Header>
                    <div className="flex flex-col items-start px-10">
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
