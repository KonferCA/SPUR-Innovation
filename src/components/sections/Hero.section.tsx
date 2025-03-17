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
            <section className="relative h-screen bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,_rgba(36,46,54,1)_1%,_rgba(255,238,226,0)_120%)]">
                {/* 4 Headers */}
                <div className="absolute top-34 left-1/2 transform -translate-x-1/2 text-8xl w-full flex gap-20">
                    <h1 className="flex-1 text-right">
                        <span className="inline-block text-gradient">
                            Innovative
                        </span>
                    </h1>
                    <h1 className="flex-1 text-left">
                        <span className="inline-block text-gradient">
                            Resources
                        </span>
                    </h1>
                </div>
                <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 text-8xl w-full flex gap-72">
                    <h1 className="flex-1 text-right">
                        <span className="inline-block text-gradient-reverse leading-relaxed">
                            Strategic
                        </span>
                    </h1>
                    <h1 className="flex-1 text-left">
                        <span className="inline-block text-gradient-reverse leading-relaxed">
                            Advantages
                        </span>
                    </h1>
                </div>
                {/* Stats and Building */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-full h-screen">
                    {/* subdiv: left callout */}
                    <div className="flex flex-col items-end gap-5 pl-32 pt-18">
                        <p className="text-right text-2xl">
                            Advanced solutions for technology and
                            innovation-focused companies
                        </p>
                        <Button intent="secondary">Learn more</Button>
                    </div>
                    {/* subdiv: building image */}
                    <div className="w-1/2 flex justify-center">
                        <img src={SpurBuilding} className="w-full" alt="" />
                    </div>
                    {/* subdiv: right stats */}
                    <div className="flex flex-col gap-5 mr-12 pr-32 pt-24">
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
                        <p className="text-2xl">
                            Community culture that nurtures collaboration and
                            support
                        </p>
                    </div>
                </div>
                {/* Bottom stats and media */}
                <div className="absolute bottom-0 w-full h-44 flex">
                    <div className="flex gap-10 items-end w-1/3 pl-14 pb-14">
                        <div>
                            <p className="text-offWhite">Employees</p>
                            <h3>3195</h3>
                        </div>
                        <div>
                            <p className="text-offWhite">Valuation</p>
                            <h3>$23,430,052,648</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center w-1/3">
                        <Button intent="tertiary">Get started</Button>
                        <DoubleArrowDownIcon width={16} height={16} />
                    </div>
                    <div className="flex gap-5 w-1/3 justify-end items-end pr-14 pb-14">
                        <LinkedInLogoIcon
                            width={32}
                            height={32}
                            color="#969CA1"
                        />
                        <InstagramLogoIcon
                            width={32}
                            height={32}
                            color="#969CA1"
                        />
                        <img src={xLogo} className="w-8" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export { HeroSection };
