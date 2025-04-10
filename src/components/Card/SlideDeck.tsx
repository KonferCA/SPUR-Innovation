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
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
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
		<div className="flex flex-col p-8 sm:p-12 text-white">
			{/* Image */}
			<div className="relative w-full">
				<img
					src={activeCard.image}
					alt={activeCard.title}
					className="w-full h-full object-cover rounded-2xl max-h-[300px] sm:max-h-[400px] lg:max-h-[450px]"
				/>
			</div>
			{/* Title, Description, Buttons */}
			<div className="flex flex-col h-full gap-2 justify-between">
				{/* Title with arrow */}
				<div className="flex mt-4 lg:mt-6 gap-2 sm:gap-5 justify-center sm:justify-start">
					<h2 className="text-2xl sm:text-4xl flex items-center text-white text-center sm:text-start">
						{activeCard.title}
					</h2>
					<ArrowTopRightIcon width={22} height={22} />
				</div>
				{/* Description */}
				<p className="text-white mt-1 lg:mt-3 text-center sm:text-start grow">
					{activeCard.description}{" "}
				</p>
				{/* Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 lg:mt-10">
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
										index === activeIndex ? "bg-spurOrange" : "bg-gray-500"
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
					<Button intent="secondary" className="whitespace-nowrap">
						Learn More
					</Button>
				</div>
			</div>
		</div>
	);
};

export { SlideDeckComponent };
