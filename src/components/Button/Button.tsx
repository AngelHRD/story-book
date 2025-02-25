import { ComponentProps } from "react";
import clsx from "clsx";

type ButtonProps = ComponentProps<"button"> & {
    variant: "primary" | "secondary" | "accent" | "danger";
    type: "button" | "submit" | "reset";
    disabled: boolean;
    size: "large" | "medium" | "small";
};

/**
 * Composant Button
 *
 * Ce composant permet de créer un bouton personnalisable avec différentes variantes,
 * types, états (disabled) et tailles.
 *
 * ## Usage
 * ```tsx
 * <Button variant="primary" type="submit" disabled={false} size="medium">
 *   Envoyer
 * </Button>
 * ```
 *
 * ## Props
 * - `variant` : Détermine la couleur et le style du bouton. Valeurs possibles : "primary", "secondary", "accent", "danger".
 * - `type` : Définit le type du bouton HTML. Valeurs possibles : "button", "submit", "reset".
 * - `disabled` : Indique si le bouton est désactivé (true ou false).
 * - `size` : Définit la taille du bouton. Valeurs possibles : "big", "small", "medium".
 */

export const Button = ({ children, variant, type, disabled, size = "medium" }: ButtonProps) => {
    const className = clsx(
        "cursor-pointer rounded-md",

        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-orange-500 text-white",
        variant === "accent" && "bg-teal-500 text-white",
        variant === "danger" && "bg-red-500 text-white",

        disabled && "opacity-50 !cursor-not-allowed",

        size === "small" && "px-2 py-1",
        size === "medium" && "px-4 py-2",
        size === "large" && "px-6 py-4"
    );

    return (
        <button className={className} disabled={disabled} type={type}>
            {children}
        </button>
    );
};
