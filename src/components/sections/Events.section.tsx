import { Vexacool, SpurHacksBanner, HawkHacksBanner, CUCAIBanner, NvidiaGTCBanner } from "@assets";
import { EventCarousel, Header } from "@components";

const EventsSection: React.FC = () => {
    const events = [
        {
            image: SpurHacksBanner,
            tags: ["Hackathon", "Business", "Networking", "Tech"],
            title: "SpurHacks 2025",
            description:
                "SpurHacks is Canada's largest hackathon, with over 2,000 attendees and $100k in prizes, hosted by SPUR.",
            date: "June 20th, , 2025",
            location: "Waterloo, ON, Canada",
            link: "https://spurhacks.com",
        },
        {
            image: HawkHacksBanner,
            tags: ["Hackathon", "Business", "Networking", "Tech"],
            title: "HawkHacks 2025",
            description: "The second-largest student-run hackathon in Canada, hosted by Wilfrid Laurier University.",
            date: "July 25th, 2025",
            location: "Waterloo, ON, Canada",
            link: "https://hawkhacks.ca",
        },
        {
            image: CUCAIBanner,
            tags: ["Business", "Networking"],
            title: "CUCAI 2025",
            description: "CUCAI is a not-for-profit conference that unites over 320 of Canada's brightest AI minds run entirely by passionate undergraduate volunteers",
            date: "March 8th, 2025",
            location: "Toronto, ON, Canada",
            link: "https://cucai.ca/",
        },
        {
            image: NvidiaGTCBanner,
            tags: ["Business", "AI", "Tech"],
            title: "NVIDIA GTC 2025",
            description: "Business leaders recognize the significant impact AI is having on industries, from improved customer experiences to product innovation.",
            date: "March 17th, 2025",
            location: "San Jose, CA, USA",
            link: "https://nvidia.com/gtc/",
        },
        {
            image: Vexacool,
            tags: ["Hackathon", "Tech"],
            title: "HackCanada 2025",
            description: "Hackers of all ages and skill levels from Canada and beyond to solve pressing challenges with technology.",
            date: "February 21st, 2025",
            location: "Waterloo, ON, Canada",
            link: "https://hackcanada.org/",
        },
    ];
    return (
        <div>
            <section className="relative px-2 sm:px-10 lg:h-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_120%_120%_at_0%_0%,_rgba(245,144,71,0.85),_transparent_70%)] bg-nearBlack">
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
