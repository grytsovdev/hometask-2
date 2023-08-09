import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { NotesContainer } from "../components/NotesContainer/NotesContainer";
import { store } from "../redux/store";

const meta: Meta<typeof NotesContainer> = {
  component: NotesContainer,
  argTypes: {
    isStats: { options: ["yes", "no"], control: { type: "boolean" } },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story></Story>
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NotesContainer>;

export const Notes: Story = {
  render: (args) => <NotesContainer {...args} />,
};
