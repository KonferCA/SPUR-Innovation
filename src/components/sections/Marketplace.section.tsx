import { Button, CardComponent, Header } from "@components";

const MarketplaceSection: React.FC = () => {
    return (
        <div>
            <section className="relative w-full lg:h-screen flex flex-col lg:flex-row justify-center items-center bg-[radial-gradient(ellipse_120%_60%_at_0%_100%,_rgba(245,144,71,0.85),_transparent_70%)] bg-nearBlack">
                <div className="flex flex-col justfiy-center lg:justify-between gap-10 sm:gap-20 lg:gap-30 text-center lg:text-start px-20 pt-20 pb-10 lg:ml-10 lg:p-25">
                    <div>
                        <Header
                            size="h1"
                            gradient="right"
                            className="flex justify-center lg:justify-start"
                        >
                            Onboard by SPUR
                        </Header>
                        {/* <Header
                            size="h1"
                            gradient="left"
                            className="flex justify-center lg:justify-start"
                        >
                            Featured Projects
                        </Header> */}
                        <p className="my-10 text-pretty">
                            Launching a startup? Looking for freelance work?
                            Onboard by SPUR is a community-driven platform that
                            connects startups with talented individuals and
                            freelancers. Our mission is to foster innovation and
                            collaboration by providing a space where ideas can
                            flourish and partnerships can thrive. Whether you're
                            a startup seeking talent or an individual looking
                            for exciting opportunities, Onboard by SPUR is here
                            to help you succeed. Onboard by SPUR features a
                            blockchain‑based marketplace platform for investors,
                            featuring secure document review workflows and
                            direct funding capabilities.
                        </p>
                        <Button
                            intent="secondary"
                            link="https://onboard.spuric.com/"
                            newtab
                        >
                            Onboard By SPUR
                        </Button>
                    </div>
                </div>
                {/* Card slide deck */}
                <div className="relative w-full lg:mr-30 p-10 lg:p-0">
                    <CardComponent />
                </div>
            </section>
        </div>
    );
};

export { MarketplaceSection };
