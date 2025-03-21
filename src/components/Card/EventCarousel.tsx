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
                        className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] rounded-lg border border-gray-300 p-4 backdrop-blur-md bg-white/10 shadow-md snap-center"
                    >
                        {/* Event Image */}
                        <div className="w-full h-48 rounded-md overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {event.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold mt-3">
                            {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-200 mt-2">
                            {event.description}
                        </p>

                        {/* Date & Location */}
                        <div className="text-sm text-gray-400 mt-3">
                            <p>{event.date}</p>
                            <p>{event.location}</p>
                        </div>

                        {/* Event Link */}
                        <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-4 text-blue-400 hover:underline"
                        >
                            Learn More →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { EventCarousel };
