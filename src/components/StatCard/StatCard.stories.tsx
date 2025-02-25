import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";

const meta = {
    title: "Components/StatCard",
    component: StatCard,
    argTypes: {
        title: {
            control: "text",
            name: "Titre",
        },
        amount: {
            control: "number",
            name: "Montant",
        },
        currency: {
            control: {
                type: "text",
                name: "Devise",
            },
        },
        percentage: {
            control: "number",
            name: "percentage",
        },
        type: {
            name: "Type de variation",
            control: { type: "select" },
            options: ["increase", "decrease", "neutral"],
        },
        description: {
            control: "text",
            name: "Description",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof StatCard>;

export default meta;

// -----------------------------------------------------------------

type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
    args: {
        title: "Chiffre d'affaires",
        amount: 121870.1,
        currency: "EUR",
        percentage: 10,
        type: "increase",
        description: "Comparé au mois dernier",
    },
};
export const Clients: Story = {
    name: "2 ieme exemple",
    args: {
        title: "Nouveaux clients",
        amount: 132,
        percentage: 8.9,
        type: "decrease",
        description: "Comparé au mois dernier",
    },
};
export const Conversion: Story = {
    name: "3 ieme exemple",
    args: {
        title: "Taux de conversion",
        amount: 3.252,
        percentage: 0,
        type: "neutral",
        description: "Par rapport à la moyenne",
    },
};
export const Visitor: Story = {
    name: "4 ieme exemple",
    args: {
        title: "Visiteur uniques",
        amount: 1.458795,
        percentage: 24.3,
        type: "increase",
        description: "Ce mois-ci",
    },
};
export const jsp: Story = {
    name: "5 ieme exemple",
    args: {
        title: "La moula",
        amount: 999999999,
        percentage: 24.3,
        type: "increase",
        description: "Aujourd'hui",
        currency: "USD",
    },
};
