import { Button } from "@components";
import { Vexacool } from "@assets";
import { useState } from "react";
import {
    ArrowTopRightIcon,
    CaretLeftIcon,
    CaretRightIcon,
} from "@radix-ui/react-icons";

const SlideDeckComponent: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        {
            id: 1,
            title: "This Company Inc.",
            description:
                "Placerat maecenas aliquam primis duis viverra integer. Vehicula nulla bibendum facilisis per quis vehicula risus donec euismod. Curabitur aliquet sem vel fermentum lacinia. Aliquam sodales neque lorem, aliquam luctus tellus viverra ut.",
            image: Vexacool,
        },
        {
            id: 2,
            title: "That Company co.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: Vexacool,
        },
        {
            id: 3,
            title: "Who's Company Ltd.",
            description:
                "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.",
            image: Vexacool,
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
        <div className="flex flex-col p-12 text-white">
            {/* Image, Title, Description */}
            <div className="relative flex flex-col h-3/5">
                <img
                    src={activeCard.image}
                    alt={activeCard.title}
                    className="w-full h-full object-cover rounded-2xl"
                />
                <div className="flex mt-10 gap-5">
                    <h2 className="text-4xl flex items-center text-white">
                        {activeCard.title}
                    </h2>
                    <ArrowTopRightIcon width={22} height={22} />
                </div>
                <p className="text-white mt-5">{activeCard.description} </p>
            </div>
            {/* Buttons */}
            <div className="flex justify-between mt-auto">
                <div className="flex items-center justify-center">
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
                                        ? "bg-spurOrange"
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
                <Button intent="secondary">Learn More</Button>
            </div>
        </div>
    );
};

export { SlideDeckComponent };
