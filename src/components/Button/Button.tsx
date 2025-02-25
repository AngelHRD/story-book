// pnpm i storybook --> pour installer storybook
// pnpm i clsx -->

import { ComponentProps } from "react";
import clsx from "clsx";

type ButtonProps = ComponentProps<"button"> & {
    variant: "primary" | "secondary" | "accent" | "danger";
    type: "button" | "submit" | "reset";
    disabled: boolean;
};

export const Button = ({ children, variant, type, disabled }: ButtonProps) => {
    const className = clsx(
        `cursor-pointer rounded-md `,
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-orange-500 text-white",
        variant === "accent" && "bg-teal-500 text-white",
        variant === "danger" && "bg-red-500 text-white",

        disabled && "opacity-50 !cursor-not-allowed"
    );

    return (
        <button className={className} disabled={disabled} type={type}>
            {children}
        </button>
    );
};
