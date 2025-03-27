import React from "react";
import { cn } from "@utils";

type HeaderProps = {
    size?: "h1" | "h2" | "h3" | "h4";
    gradient?: "none" | "left" | "right";
    className?: string;
    children: string;
};

const sizeClassMap: Record<NonNullable<HeaderProps["size"]>, string> = {
    h1: "text-4xl sm:text-5xl md:text-6xl font-light flex flex-wrap justify-center px-10",
    h2: "text-3xl sm:text-4xl md:text-5xl font-light text-white",
    h3: "text-xl font-light text-white",
    h4: "text-2xl font-light",
};

const directionClassMap: Record<
    NonNullable<HeaderProps["gradient"]>,
    string
> = {
    none: "",
    left: "text-gradient-reverse",
    right: "text-gradient",
};

const Header: React.FC<HeaderProps> = ({
    size = "h1",
    gradient = "none",
    className,
    children,
}) => {
    const Tag = size;
    const words = children.split(" ");
    const sizeClasses = sizeClassMap[size];
    const directionClasses = directionClassMap[gradient];

    return (
        <Tag className={cn("", sizeClasses, className)}>
            {words.map((word, i) => (
                <span key={i} className={cn("mr-4", directionClasses)}>
                    {word}
                </span>
            ))}
        </Tag>
    );
};

export { Header };
