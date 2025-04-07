import { SpurBuilding, xLogo } from "@assets";
import { Button } from "@components";
import {
    DoubleArrowDownIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const HeroSection: React.FC = () => {
    return (
        <div>
            <section className="relative pt-30 flex flex-col justify-between h-full lg:h-screen bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,_rgba(36,46,54,1)_1%,_rgba(255,238,226,0)_120%)]">
                {/* 4 Headers */}
                <div className="relative flex flex-col lg:flex-row justify-center items-center sm:px-10">
                    {/* Top headers */}
                    <div className="lg:absolute lg:top-9 xl:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 text-3xl sm:text-4xl lg:text-7xl xl:text-8xl w-full flex flex-wrap lg:flex-nowrap justify-center gap-2 sm:gap-10">
                        <h1 className="lg:text-right">
                            <span className="inline-block text-gradient">
                                Innovative
                            </span>
                        </h1>
                        <h1 className="lg:text-left">
                            <span className="inline-block text-gradient">
                                Resources
                            </span>
                        </h1>
                    </div>
                    {/* Bottom headers */}
                    <div className="pb-10 -mt-2 lg:-mt-1 lg:absolute lg:top-18 xl:top-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 text-3xl sm:text-4xl lg:text-7xl xl:text-8xl w-full flex flex-wrap lg:flex-nowrap justify-center gap-0 sm:gap-40 lg:gap-50 xl:gap-72">
                        <h1 className="lg:text-right absolute right-[60%] lg:right-[61%] xl:right-7/12">
                            <span className="lg:leading-relaxed inline-block text-gradient-reverse">
                                Strategic
                            </span>
                        </h1>
                        <h1 className="lg:text-left absolute left-[56%] lg:left-[61%] xl:left-7/12">
                            <span className="lg:leading-relaxed inline-block text-gradient-reverse">
                                Advantages
                            </span>
                        </h1>
                    </div>
                </div>
                {/* Stats and Building */}
                <div className="flex flex-col lg:flex-row items-center lg:justify-center w-full">
                    {/* subdiv: left callout */}
                    <div className="order-2 lg:order-1 flex flex-col items-center lg:items-end gap-2 px-10 lg:px-5 py-5 xl:max-w-lg">
                        <p className="text-center lg:text-right text-lg xl:text-2xl">
                            Advanced solutions for technology and
                            innovation-focused companies
                        </p>
                        <Button
                            intent="secondary"
                            link="https://capital.spuric.com/"
                            newtab
                        >
                            Learn more
                        </Button>
                    </div>
                    {/* subdiv: building image */}
                    <div className="order-1 lg:order-2 w-3/4 lg:w-full max-w-[650px] 2xl:w-1/2 justify-center z-20">
                        <img
                            src={SpurBuilding}
                            className="w-full"
                            alt="Spur Building"
                        />
                    </div>
                    {/* subdiv: right stats */}
                    <div className="order-3 flex flex-col items-center lg:items-start gap-3 2xl:gap-5 text-center lg:text-start px-10 lg:px-5 py-5 xl:max-w-lg">
                        <div>
                            <p className="font-thin">
                                Companies utilizing resources
                            </p>
                            <h2>15K+</h2>
                        </div>
                        <div>
                            <p className="font-thin">Tech workers</p>
                            <h2>20K+</h2>
                        </div>
                        <p className="text-lg xl:text-2xl">
                            Community culture that nurtures collaboration and
                            support
                        </p>
                    </div>
                </div>
                {/* Bottom stats and media */}
                <div className="w-full lg:h-44 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center items-center mt-10 lg:mt-0 lg:pb-10 xl:pb-16">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 text-center lg:text-start lg:justify-start lg:self-end lg:w-1/3 lg:pl-10">
                        <div>
                            <p className="text-offWhite">Employees</p>
                            <h3>3195</h3>
                        </div>
                        <div>
                            <p className="text-offWhite">Valuation</p>
                            <h3>$23,430,052,648</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center lg:w-1/3 lg:self-start">
                        <Button intent="tertiary" link="#partners">
                            Get started
                        </Button>
                        <DoubleArrowDownIcon width={16} height={16} />
                    </div>
                    <div className="flex gap-5 lg:w-1/3 lg:justify-end lg:self-end lg:pr-10">
                        <a
                            href="https://linkedin.com/company/spur-innovation-center/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInLogoIcon
                                width={32}
                                height={32}
                                color="#969CA1"
                                className="hover:cursor-pointer hover:scale-110"
                            />
                        </a>
                        <a
                            href="https://instagram.com/spur_innovation/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramLogoIcon
                                width={32}
                                height={32}
                                color="#969CA1"
                                className="hover:cursor-pointer hover:scale-110"
                            />
                        </a>
                        <a
                            href="https://instagram.com/spur_innovation/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={xLogo}
                                className="w-8 hover:cursor-pointer hover:scale-110"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export { HeroSection };
