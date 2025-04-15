import React, { useState, useEffect } from "react";
import { Button } from "@components";
import { SpurIcon } from "@assets";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const investorButton = (
        <Button intent="primary" link="https://onboard.spuric.com/" newtab>
            Investor Portal
        </Button>
    );

    const letsTalkButton = (
        <Button intent="primary" link="mailto:info@spuric.com">
            Let's talk
        </Button>
    );

    return (
        <header
            className={`fixed w-full z-50 transition-colors duration-300 ${
                isScrolled ? "bg-gradient-to-b from-nearBlack from-40% via-nearBlack/60 via-70% to-nearBlack/0 focus:outline-none" : ""
            }`}
        >
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-0 left-0 w-full bg-nearBlack/95 py-6 pt-20 pb-10 flex flex-col justify-center items-center gap-2 shadow-md"
                    >
                        <a href="#about" onClick={() => setMenuOpen(false)}>
                            About us
                        </a>
                        <a href="#resources" onClick={() => setMenuOpen(false)}>
                            Resources
                        </a>
                        <a href="#news" onClick={() => setMenuOpen(false)}>
                            News
                        </a>
                        <a href="#partners" onClick={() => setMenuOpen(false)}>
                            Partners
                        </a>
                        <div className="flex flex-col gap-2 mt-4">
                            {investorButton}
                            {letsTalkButton}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center justify-between px-6 md:px-10 py-6 relative">
                <div
                    className="md:hidden z-50 hover:cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <Cross2Icon width={25} height={25} />
                    ) : (
                        <HamburgerMenuIcon width={25} height={25} />
                    )}
                </div>

                <div className="hidden md:flex gap-x-5 font-thin">
                    <a href="#about">About us</a>
                    <a href="#resources">Resources</a>
                    <a href="#news">News</a>
                    <a href="#partners">Partners</a>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img src={SpurIcon} className="w-8" alt="SpurIcon" />
                </div>

                <div className="hidden md:flex gap-x-5">
                    {investorButton}
                    {letsTalkButton}
                </div>
            </div>
        </header>
    );
};

export { Navbar };
