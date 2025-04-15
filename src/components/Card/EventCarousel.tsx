import { cn, useMediaQuery } from "@utils";
import {
    ArrowTopRightIcon,
    CaretLeftIcon,
    CaretRightIcon,
    ClockIcon,
    SewingPinIcon,
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
    const isVeryLarge = useMediaQuery("(min-width: 1850px)");
    const isLarge = useMediaQuery("(min-width: 1350px)");
    const isMedium = useMediaQuery("(min-width: 800px)");
    const visibleCount = isVeryLarge ? 4 : isLarge ? 3 : isMedium ? 2 : 1;
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
        <div className="relative flex items-center justify-center xl:px-30 pt-10 lg:pb-24">
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
                    className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 py-6"
                >
                    {activeCardSet.map((event, index) => (
                        // Each Event
                        <div
                            key={index}
                            className="size-100 relative flex flex-col justify-between h-full bg-nearBlack/5 backdrop-blur-3xl p-8 border border-white/30 rounded-4xl text-white shadow-inner-custom"
                        >
                            {/* Event Image */}
                            <div className="self-center h-50 h-1/2 max-h-96 rounded-2xl overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover "
                                />
                            </div>

                            {/* Tags */}
                            <div className="grid grid-rows-2 grid-cols-3 gap-2 mt-3">
                                {event.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="col-span-1 row-span-1 text-center uppercase bg-radial-[at_-50%_-50%] from-lightSpurOrange to-darkNavy text-spurOrangeText text-xs px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-2xl mt-3">
                                {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-200 mt-2">
                                {event.description.length > 100 ? event.description.slice(0, 98) + "..." : event.description}
                            </p>

                            {/* Date & Location */}
                            <div className="flex flex-col gap-4 text-sm text-gray-400 mt-3">
                                <div className="flex gap-5 items-center">
                                    <ClockIcon width={20} height={20} />
                                    <p className="uppercase">{event.date}</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <SewingPinIcon width={20} height={20} />
                                    <p>{event.location}</p>
                                </div>
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
