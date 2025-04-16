import { Button, Header } from "@components";
import { HalfEllipse } from "@assets";

const AboutSection: React.FC = () => {
    return (
        <div>
            <section className="relative flex flex-col justify-between items-center 2xl:h-screen bg-nearBlack py-4 lg:py-20">
                <div className="flex flex-col items-center pt-30 lg:pt-20 px-5 sm:px-10">
                    <Header size="h1" gradient="right">
                        A Community Spurring
                    </Header>
                    <Header size="h1" gradient="left">
                        Innovation and Enterprise
                    </Header>
                </div>
                <img
                    className="absolute top-52 sm:top-45 md:top-40 lg:top-36 xl:top-20 2xl:top-0"
                    src={HalfEllipse}
                />
                <div className="flex flex-col xl:flex-row w-2/3 lg:w-5/6 xl:w-9/12 2xl:w-2/3 pt-40 xl:pt-50 pb-10">
                    <Header
                        size="h2"
                        className="flex justify-center w-full text-center xl:text-end text-nowrap xl:pr-10 pt-4 mb-4"
                    >
                        Our Mandate
                    </Header>
                    <div className="flex flex-col items-center xl:items-start text-center xl:text-left md:px-10 xl:px-8">
                        <p className="mb-6">
                            At SPUR, our mandate is to ignite a culture of
                            relentless innovation, foster a thriving community,
                            and drive unparalleled success. We are committed to
                            pushing boundaries, empowering individuals, and
                            transforming industries through cutting-edge
                            technology and visionary leadership.
                        </p>
                        <Button
                            intent="secondary"
                            link="https://capital.spuric.com/"
                            newtab
                        >
                            Learn more
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export { AboutSection };
