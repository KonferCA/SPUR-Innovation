import { Button, Header } from "@components";
import { SpurLogoV2, xLogo } from "@assets";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const FooterSection: React.FC = () => {
    return (
        <div>
            <section className="relative bg-[#050B10] to-10% px-10 xl:px-28 py-16">
                <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row justify-center xl:justify-between items-center xl:items-start">
                    {/* Logo */}
                    <img src={SpurLogoV2} className="w-1/2 xl:w-1/3" />
                    {/* Directory */}
                    <div className="flex gap-10 w-1/3 justify-center text-center xl:text-start">
                        <div className="flex flex-col gap-2">
                            <Header
                                size="h4"
                                gradient="right"
                                className="mb-2 ml-4 xl:ml-0"
                            >
                                About
                            </Header>
                            <a href="/coming-soon">Our Story</a>
                            <a href="/coming-soon">Resources</a>
                            <a href="/coming-soon">News</a>
                            <a href="/coming-soon">Partners</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Header
                                size="h4"
                                gradient="right"
                                className="mb-2 ml-4 xl:ml-0"
                            >
                                Contact
                            </Header>
                            <a href="/coming-soon">Join SPUR</a>
                            <a href="/coming-soon">Become a Partner</a>
                            <a href="/coming-soon">Contact Us</a>
                        </div>
                    </div>
                    {/* Mailing List */}
                    <div className="flex text-center sm:text-start flex-col gap-5 xl:w-1/3">
                        <p className="text-2xl">
                            Join our mailing list for exclusive news
                        </p>
                        <div className="flex justify-center sm:justify-start flex-wrap w-full gap-4">
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                defaultValue="Enter your email"
                                className="grow pl-6 py-3 text-gray-300/60 border border-amber-600 rounded-full"
                            />
                            <Button intent="secondary">Email Me</Button>
                        </div>
                    </div>
                </div>
                {/* Logo & Copyright statement */}
                <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row justify-center xl:justify-between items-center xl:items-start pt-24">
                    <div className="flex gap-5 items-end">
                        <LinkedInLogoIcon
                            width={32}
                            height={32}
                            color="#969CA1"
                            className="hover:cursor-pointer hover:scale-110"
                        />
                        <InstagramLogoIcon
                            width={32}
                            height={32}
                            color="#969CA1"
                            className="hover:cursor-pointer hover:scale-110"
                        />
                        <img
                            src={xLogo}
                            className="w-8 hover:cursor-pointer hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-16 text-center xl:text-start">
                        <p>
                            © 2025 SPUR Innovation. Konfer Inc. All rights
                            reserved
                        </p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export { FooterSection };
