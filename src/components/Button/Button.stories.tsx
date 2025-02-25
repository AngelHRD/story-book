import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        children: {
            name: "Contenu",
            control: "text",
        },
        variant: {
            name: "Variation",
            control: {
                type: "select",
            },
        },
        size: {
            name: "Taille",
            control: {
                type: "select",
            },
        },
        type: {
            name: "Type",
            control: {
                type: "select",
            },
        },
    },
    tags: ["autodocs"], // Permet d'avoir la doc automatiquement
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: "Boutton principal",
    args: {
        children: "Je suis un boutton",
        variant: "accent",
        size: "small",
        type: "submit",
        disabled: true,
    },
};

export const Secondary: Story = {
    name: "Boutton secondaire",
    args: {
        children: "Créer un avis",
        variant: "secondary",
        type: "button",
        size: "medium",
    },
};

export const Tertiary: Story = {
    name: "Boutton tertiaire",
    args: {
        children: "Créer un avis",
        variant: "danger",
        type: "button",
        size: "small",
    },
};
