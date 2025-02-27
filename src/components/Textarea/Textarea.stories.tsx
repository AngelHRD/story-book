import { Textarea } from "./Textarea";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Textarea",
    component: Textarea,
    tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof Textarea>;

export const DefaultTextarea: Story = {
    name: "Textarea",
    args: {
        label: "Message",
    },
};

export const MaxLenghtTextarea: Story = {
    name: "Textarea avec longueur max",
    args: {
        label: "Message",
        maxLength: 140,
    },
};

export const MaxLenghtTextareaWithError: Story = {
    name: "Textarea avec longueur max et une erreur",
    args: {
        label: "Message",
        maxLength: 140,
    },
};
