import {
	ArrowTopRightIcon,
	CaretLeftIcon,
	CaretRightIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";

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
	const [activeIndex, setActiveIndex] = useState(0);

	// Function to handle the next card in the carousel
	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
	};

	// Function to handle the previous card in the carousel
	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + events.length) % events.length
		);
	};

	const activeCardSet = events.slice(activeIndex, activeIndex + 3);

	return (
		<div className="relative flex items-center justify-center px-30 pt-10 pb-24">
			<button
				onClick={handlePrev}
				className="px-1 py-1 rounded-full border border-white/30 text-white hover:bg-gray-600 mx-2"
			>
				<CaretLeftIcon />
			</button>
			{/* Carousel Wrapper */}
			<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 py-6">
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
			<button
				onClick={handleNext}
				className="px-1 py-1 rounded-full border border-white/30 text-white hover:bg-gray-600 mx-2"
			>
				<CaretRightIcon />
			</button>
		</div>
	);
};

export { EventCarousel };
