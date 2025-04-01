import { cn, useMediaQuery } from "@utils";
import {
    ArrowTopRightIcon,
    CaretLeftIcon,
    CaretRightIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Event = {
    image: string;
    tags: string[];
    title: string;
    description: string;
    date: string;
    location: string;
    link: string;
};

type EventCarouselProps = {
    events: Event[];
};

const EventCarousel: React.FC<EventCarouselProps> = ({ events }) => {
    const isLarge = useMediaQuery("(min-width: 1024px)");
    const visibleCount = isLarge ? 3 : 1;
    const [activeIndex, setActiveIndex] = useState(0);

    // Move to next group if there's room
    const handleNext = () => {
        if (activeIndex + visibleCount < events.length) {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Move to previous group if not at the beginning
    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Show up to 3 cards
    const activeCardSet = events.slice(activeIndex, activeIndex + visibleCount);

    // Set buttons disabled state
    const isAtStart = activeIndex === 0;
    const isAtEnd = activeIndex + visibleCount >= events.length;

    return (
        <div className="relative flex items-center justify-center xl:px-20 pt-10 lg:pb-24">
            <button
                onClick={handlePrev}
                disabled={isAtStart}
                aria-label="Previous event"
                className={cn(
                    "px-1 py-1 rounded-full border border-white/30 text-white hover:bg-gray-600 mx-2",
                    isAtStart && "opacity-30 cursor-not-allowed"
                )}
            >
                <CaretLeftIcon />
            </button>
            {/* Carousel Wrapper */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex} // Important for AnimatePresence to detect change
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 py-6"
                >
                    {activeCardSet.map((event, index) => (
                        // Each Event
                        <div
                            key={index}
                            className="relative h-full bg-nearBlack/5 backdrop-blur-3xl p-8 border border-white/30 rounded-4xl text-white shadow-inner-custom"
                        >
                            {/* Event Image */}
                            <div className="w-full h-1/2 rounded-2xl overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover "
                                />
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {event.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="uppercase bg-radial-[at_-50%_-50%] from-lightSpurOrange to-darkNavy text-spurOrangeText text-xs px-4 py-2 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg xl:text-2xl mt-3">
                                {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-200 mt-2">
                                {event.description}
                            </p>

                            {/* Date & Location */}
                            <div className="text-sm text-gray-400 mt-3">
                                <p className="uppercase">{event.date}</p>
                                <p>{event.location}</p>
                            </div>

                            {/* Event Link */}
                            <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-fit text-sm gap-3 mt-4 uppercase hover:underline font-thin"
                            >
                                Learn More
                                <ArrowTopRightIcon width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <button
                onClick={handleNext}
                disabled={isAtEnd}
                aria-label="Next event"
                className={cn(
                    "px-1 py-1 rounded-full border border-white/30 text-white hover:bg-gray-600 mx-2",
                    isAtEnd && "opacity-30 cursor-not-allowed"
                )}
            >
                <CaretRightIcon />
            </button>
        </div>
    );
};

export { EventCarousel };
