import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

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
    return (
        <div className="relative w-full overflow-hidden">
            {/* Carousel Wrapper */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 py-6">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 snap-center w-1/4 bg-[#0B1219]/5 backdrop-blur-3xl relative p-8 border border-white/30 rounded-4xl text-white shadow-inner-custom"
                    >
                        {/* Event Image */}
                        <div className="w-full h-48 rounded-2xl overflow-hidden">
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
                        <h3 className="text-2xl mt-3">{event.title}</h3>

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
                            className="flex w-fit gap-3 mt-4 uppercase hover:underline font-thin"
                        >
                            Learn More
                            <ArrowTopRightIcon width={20} height={20} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { EventCarousel };
