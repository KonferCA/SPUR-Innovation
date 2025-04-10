import { Button, Header, SlideDeckComponent } from "@components";

const InnovationFundSection: React.FC = () => {
	return (
		<div>
			<section className="relative px-10 xl:px-30 py-30 2xl:h-screen flex justify-center items-center bg-gradient-to-br from-spurOrange/70 via-[#2C2C2F]/40 to-nearBlack">
				{/* Slide Deck Card */}
				<div className="flex flex-col lg:flex-row w-full justify-between items-center max-w-8xl 2xl:h-[85vh] bg-nearBlack/5 backdrop-blur-3xl mx-auto border-1 border-white/30 rounded-4xl text-white shadow-inner-custom">
					{/* Innovation Fund Details (Left-section) */}
					<div className="flex flex-col justify-center lg:justify-end items-center lg:items-start gap-6 text-center lg:text-start p-10 w-full lg:w-1/2">
						{/* Title */}
						<Header
							size="h1"
							gradient="right"
							className="flex justify-center lg:justify-start"
						>
							SPUR Innovation Fund
						</Header>
						{/* Description */}
						<p className="max-w-xl">
							The SPUR Innovation Fund empowers students, developers, and
							entrepreneurs to bring their world-changing ideas to life. Apply
							for funding and turn your vision into reality with the support of
							a community dedicated to driving innovation and impact.
						</p>
						<Button
							intent="secondary"
							link="https://capital.spuric.com/"
							newtab
						>
							Learn More
						</Button>
						<div className="flex flex-col justify-center lg:gap-6 mt-4 xl:mt-16 text-center lg:text-left">
							<h1 className="lg:pl-2 text-5xl">Revenue</h1>
							<h1 className="text-7xl sm:text-8xl xl:text-9xl">89%</h1>
						</div>
					</div>
					{/* Card slide deck (Right-section) */}
					<div className="relative flex lg:w-1/2 lg:max-w-5xl h-full mt-8 sm:mt-0">
						<SlideDeckComponent />
					</div>
				</div>
			</section>
		</div>
	);
};

export { InnovationFundSection };
