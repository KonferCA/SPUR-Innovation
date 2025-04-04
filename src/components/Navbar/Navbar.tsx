import { Button } from "@components";
import { SpurLogo } from "@assets";
import React, { useState } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed w-full z-50">
            {/* Mobile Menu (only shown when open) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-0 left-0 w-full bg-nearBlack/95 px-10 py-6 pt-20 pb-10 flex flex-col justify-center items-center gap-2 shadow-md"
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
                            <Button intent="primary">Investor Portal</Button>
                            <Button intent="primary">Let's talk</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center justify-between px-6 md:px-10 py-6 relative">
                {/* Hamburger (mobile only) */}
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

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-x-5 font-thin">
                    <a href="#about">About us</a>
                    <a href="#resources">Resources</a>
                    <a href="#news">News</a>
                    <a href="#partners">Partners</a>
                </div>

                {/* Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img src={SpurLogo} className="w-8" alt="SpurLogo" />
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-x-5">
                    <Button intent="primary">Investor Portal</Button>
                    <Button intent="primary">Let's talk</Button>
                </div>
            </div>
        </header>
    );
};

export { Navbar };
