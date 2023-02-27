import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableProductList from "./DraggableProductList";
import { Product } from "../interfaces";

export default {
    title: "Draggable Product List",
    component: DraggableProductList,
} as ComponentMeta<typeof DraggableProductList>;

const Template: ComponentStory<typeof DraggableProductList> = (args) => (
    <DragDropContext onDragEnd={() => {}}>
        <DraggableProductList {...args} />
    </DragDropContext>
);

const getArgs = (ProductStatus: string) => ({
    ID: "123",
    listTitle: "Test Product List",
    removeProduct: (product: Product) => {},
    items: [
        {
            ProductID: 1234,
            ProductName: "Hat",
            ProductPhotoURL:
                "https://fastly.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM",
            ProductStatus: "Active",
        },
        {
            ProductID: 1235,
            ProductName: "Shoes",
            ProductPhotoURL:
                "https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
            ProductStatus: "Active",
        },
        {
            ProductID: 1236,
            ProductName: "Pants",
            ProductPhotoURL:
                "https://fastly.picsum.photos/id/361/5000/3333.jpg?hmac=XLgLKar1Bg3tKSqrrdfsBC1SUPoiCyRmtP35fSQOSOM",
            ProductStatus: "Active",
        },
        {
            ProductID: 1237,
            ProductName: "Shirt",
            ProductPhotoURL: "https://picsum.photos/images#21",
            ProductStatus: "InActive",
        },
    ],
});

export const Active = Template.bind({});
Active.args = getArgs("Active");

export const InActive = Template.bind({});
InActive.args = getArgs("InActive");
