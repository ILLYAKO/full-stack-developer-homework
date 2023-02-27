import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import type { DraggableProvided } from "react-beautiful-dnd";
import { Product } from "../interfaces";
import DraggableProductItem from "./DraggableProductItem";

export default {
    title: "Draggable Product Item",
    component: DraggableProductItem,
} as ComponentMeta<typeof DraggableProductItem>;

const Template: ComponentStory<typeof DraggableProductItem> = (args) => (
    <DraggableProductItem {...args} />
);

const draggableProvided: DraggableProvided = {
    innerRef: () => {},
    draggableProps: {
        "data-rbd-draggable-context-id": "1",
        "data-rbd-draggable-id": "1",
    },
    dragHandleProps: null,
};

const getArgs = (ProductStatus: string) => ({
    ProductID: 1234,
    ProductName: "Hat",
    ProductPhotoURL:
        "https://fastly.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM",
    ProductStatus,
    draggableProvided,
    removeProduct: (product: Product) => {},
});

export const Active = Template.bind({});
Active.args = getArgs("Active");

export const Inactive = Template.bind({});
Inactive.args = getArgs("InActive");
