import { Vexacool } from "@assets";
import { EventCarousel, Header } from "@components";

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
            <section className="relative px-10 lg:h-screen flex flex-col justify-center items-center bg-nearBlack">
                {/* Title */}
                <div className="flex flex-col items-center text-6xl mt-28">
                    <Header size="h1" gradient="right">
                        Meet Us At Industry-Leading Events,
                    </Header>
                    <Header size="h1" gradient="left">
                        Conferences and Summits
                    </Header>
                </div>
                <EventCarousel events={events} />
            </section>
        </div>
    );
};

export { EventsSection };
