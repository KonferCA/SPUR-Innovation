import { Vexacool } from "@assets";
import { EventCarousel } from "@components";

const EventsSection: React.FC = () => {
	const events = [
		{
			image: Vexacool,
			tags: ["Tech", "AI"],
			title: "Future of AI Conference",
			description:
				"Explore the latest trends in AI and machine learning.",
			date: "March 15, 2025",
			location: "San Francisco, CA",
			link: "https://example.com",
		},
		{
			image: Vexacool,
			tags: ["Business", "Networking"],
			title: "Event2",
			description: "Meet founders, VCs, and industry leaders.",
			date: "April 10, 2025",
			location: "New York, NY",
			link: "https://example.com",
		},
		{
			image: Vexacool,
			tags: ["Business", "Networking"],
			title: "Event3",
			description: "Meet founders, VCs, and industry leaders.",
			date: "April 10, 2025",
			location: "New York, NY",
			link: "https://example.com",
		},
		{
			image: Vexacool,
			tags: ["Business", "Networking"],
			title: "Event4",
			description: "Meet founders, VCs, and industry leaders.",
			date: "April 10, 2025",
			location: "New York, NY",
			link: "https://example.com",
		},
	];
	return (
		<div>
			<section className="relative px-36 h-screen flex flex-col justify-center items-center bg-nearBlack">
				{/* Title */}
				<div className="flex flex-col items-center text-6xl">
					<div className="flex gap-5 leading-relaxed">
						<h1 className="text-gradient">Meet</h1>
						<h1 className="text-gradient">Us</h1>
						<h1 className="text-gradient">At</h1>
						<h1 className="text-gradient">Industry-</h1>
						<h1 className="text-gradient -ml-5">Leading</h1>
						<h1 className="text-gradient">Events,</h1>
					</div>
					<div className="flex gap-5 -mt-5">
						<h1 className="text-gradient-reverse">Conferences</h1>
						<h1 className="text-gradient-reverse">and</h1>
						<h1 className="text-gradient-reverse">Summits</h1>
					</div>
				</div>
				<EventCarousel events={events} />
			</section>
		</div>
	);
};

export { EventsSection };
