import React from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { create, ReactTestRenderer } from "react-test-renderer";
import DraggableProductItem from "./DraggableProductItem";

describe("DraggableProductItem", () => {
    let tree: ReactTestRenderer;
    const ID = "1234";
    beforeEach(() => {
        const draggableProvided: DraggableProvided = {
            innerRef: () => {},
            draggableProps: {
                "data-rbd-draggable-context-id": "1",
                "data-rbd-draggable-id": "1",
            },
            dragHandleProps: null,
        };
        const props = {
            ProductID: 1234,
            ProductName: "Hat",
            ProductPhotoURL:
                "https://fastly.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM",
            ProductStatus: "Active",
            draggableProvided,
            removeProduct: () => {},
        };
        tree = create(<DraggableProductItem {...props} />);
    });
    afterEach(() => {
        tree.unmount();
    });
    it("rendersDraggableItem", async () => {
        const testInstance = tree.root;
        await testInstance.findByProps({
            "data-testid": `draggable-container-${ID}`,
        });
        await testInstance.findByProps({
            "data-testid": `draggable-productID-${ID}`,
        });
        await testInstance.findByProps({
            "data-testid": `draggable-productPhotoURL-${ID}`,
        });

        await testInstance.findByProps({
            "data-testid": `draggable-btn-${ID}`,
        });
    });
});
