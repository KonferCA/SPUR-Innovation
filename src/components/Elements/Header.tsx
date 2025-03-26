import React from "react";
import { cn } from "@utils";

type HeaderProps = {
    size?: "h1" | "h2" | "h3";
    gradient?: "none" | "left" | "right";
    className?: string;
    children: string;
};

const sizeClassMap: Record<NonNullable<HeaderProps["size"]>, string> = {
    h1: "text-6xl font-light",
    h2: "text-5xl text-white",
    h3: "text-xl text-white",
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
        <Tag className={cn("mb-2 inline-block", sizeClasses, className)}>
            {words.map((word, i) => (
                <span key={i} className={cn("mr-4", directionClasses)}>
                    {word}
                </span>
            ))}
        </Tag>
    );
};

export { Header };
