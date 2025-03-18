import React, { useRef, useState } from "react";
import { cn } from "@utils";

// Slider Props
type SliderProps = {
    children: React.ReactElement[];
    speed?: number; // Speed of animation in seconds
    direction?: "left" | "right"; // Direction of scroll
    pauseOnHover?: boolean;
    blurEdges?: boolean;
    className?: string;
};

// Slide Props
type SlideProps = {
    children: React.ReactNode;
    width?: string;
};

// Flexible Infinite Scrolling Slider Component
const Slider: React.FC<SliderProps> & { Slide: React.FC<SlideProps> } = ({
    children,
    speed = 20,
    direction = "left",
    pauseOnHover = false,
    blurEdges = false,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const animationClass =
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
    const pauseClass = isHovered && pauseOnHover ? "paused" : "";

    return (
        <div className={cn("relative w-full overflow-hidden", className)}>
            {blurEdges && (
                <>
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-darkNavy to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-darkNavy to-transparent"></div>
                </>
            )}

            <div
                ref={containerRef}
                className={cn("flex w-max", animationClass, pauseClass)}
                style={{ animationDuration: `${speed}s` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {[...children, ...children].map((child, index) => (
                    <div key={index} className="mx-4 flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Slide Component for Individual Items
const Slide: React.FC<SlideProps> = ({ children, width = "200px" }) => {
    return (
        <div className="flex items-center justify-center" style={{ width }}>
            {children}
        </div>
    );
};

// Assign Slide component to Slider for unified API
Slider.Slide = Slide;

export { Slider };
