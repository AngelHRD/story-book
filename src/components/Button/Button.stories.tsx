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
    },
    tags: ["autodocs"], // Permet d'avoir la doc automatiquement
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: "Boutton principal",
    args: {
        children: "Ajouter un nouveau contact",
        variant: "primary",
    },
};

export const Secondary: Story = {
    name: "Boutton secondaire",
    args: {
        children: "Créer un avis",
        variant: "secondary",
    },
};

// { Type StoryObj --> Générique
//     name : string,
//     args: unknown,
//     options: array
//     }

// { Type StoriObj<typeof Button>
//     name : string,
//     args: type Button,
//     options: array
//     }
