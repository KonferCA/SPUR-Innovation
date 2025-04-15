import { useState } from "react";
import {
    ArrowTopRightIcon,
    CaretLeftIcon,
    CaretRightIcon,
} from "@radix-ui/react-icons";

import { Button } from "@components";
import { KonferLogo, RedBlueQuantumLogo } from "@assets";

const CardComponent: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            id: 1,
            title: "Konfer Inc.",
            description:
                "We bridge innovative companies with the next generation of tech talent through organizing high-impact initiatives. 🚀",
            image: KonferLogo,
            link: "https://konfer.ca/",
        },
        {
            id: 2,
            title: "Red Blue Quantum",
            description: "Turning ideas into experiments",
            image: RedBlueQuantumLogo,
            link: "https://www.rbquantum.com/",
        },
    ];

    // Function to handle the next card in the carousel
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    // Function to handle the previous card in the carousel
    const handlePrev = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
        );
    };

    const activeCard = cards[activeIndex];

    return (
        <div className="bg-[#0B1219]/5 backdrop-blur-3xl elative max-w-lg mx-auto p-8 border-1 border-white/30 rounded-4xl text-white shadow-inner-custom">
            {/* Image & Title */}
            <div className="relative">
                <img
                    src={activeCard.image}
                    alt={activeCard.title}
                    className="w-full h-1/2 object-cover rounded-2xl"
                />
                <div className="flex mt-6 justify-center sm:justify-start">
                    <h2 className="text-2xl sm:text-4xl flex text-white font-thin mr-2 sm:mr-6 text-center sm:text-start">
                        {activeCard.title}
                    </h2>
                    <ArrowTopRightIcon
                        width={22}
                        height={22}
                        className="animate-pulse"
                    />
                </div>
            </div>
            {/* Description */}
            <div className="mt-3">
                <p className="text-sm text-white text-center sm:text-start">
                    {activeCard.description}{" "}
                </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
                <div className="flex items-center order-last sm:order-first">
                    <button
                        onClick={handlePrev}
                        className="px-1 py-1 rounded-lg text-white hover:bg-gray-600 mx-2"
                    >
                        <CaretLeftIcon />
                    </button>
                    {/* Track Progress - Small Rectangles */}
                    <div className="flex justify-center space-x-2">
                        {cards.map((_, index) => (
                            <div
                                key={index}
                                className={`w-4 h-1 rounded-md ${
                                    index === activeIndex
                                        ? "bg-[#F59047]"
                                        : "bg-gray-500"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="px-1 py-1 rounded-lg text-white hover:bg-gray-600 mx-2"
                    >
                        <CaretRightIcon />
                    </button>
                </div>

                <Button
                    intent="secondary"
                    className="whitespace-nowrap"
                    link={activeCard.link}
                    newtab
                >
                    View Project
                </Button>
            </div>
        </div>
    );
};

export { CardComponent };
