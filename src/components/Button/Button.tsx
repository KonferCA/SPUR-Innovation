import React from "react";
import { cn } from "@utils";
import { getButtonStyles } from "./Button.styles";
import type { ButtonStylesProps } from "./Button.styles";
import * as Tooltip from "@radix-ui/react-tooltip";

/**
 * Button Props
 */
type ButtonProps = ButtonStylesProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        icon?: React.ReactNode;
        iconPosition?: "left" | "right";
        link?: string;
        newtab?: boolean;
        norel?: boolean;
        tooltip?: string;
        type?: "button" | "submit" | "reset";
    };

/**
 * Flexible Button Component
 */
const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    iconPosition = "left",
    link,
    newtab,
    norel,
    intent,
    className,
    tooltip,
    type = "button",
    onClick,
    ...buttonProps
}) => {
    const buttonContent = (
        <>
            {icon && iconPosition === "left" && <span>{icon}</span>}
            {children && <span>{children}</span>}
            {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
    );

    // Renders either an <a> or <button> based on `link` prop
    const buttonElement = link ? (
        <a
            href={link}
            target={newtab ? "_blank" : "_self"}
            rel={norel ? "noreferrer" : undefined}
            className={cn(getButtonStyles({ intent, className }))}
        >
            {buttonContent}
        </a>
    ) : (
        <button
            type={type}
            className={cn(getButtonStyles({ intent, className }))}
            onClick={onClick}
            {...buttonProps}
        >
            {buttonContent}
        </button>
    );

    // If no tooltip is provided, return the button normally
    if (!tooltip) {
        return buttonElement;
    }

    // If tooltip exists, wrap the button in a Radix Tooltip
    return (
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>{buttonElement}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="bg-gray-500 text-white text-xs px-3 py-1 rounded shadow-md"
                        side="top"
                        align="center"
                    >
                        {tooltip}
                        <Tooltip.Arrow className="fill-gray-500" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export { Button };
