import type { Meta, StoryObj } from "@storybook/react";
import { AddNoteButton } from "../components/AddNoteButton/AddNoteButton";

const meta: Meta<typeof AddNoteButton> = {
  component: AddNoteButton,
};

export default meta;

type Story = StoryObj<typeof AddNoteButton>;

export const AddNote: Story = {
  render: (args) => <AddNoteButton {...args} />,
};
