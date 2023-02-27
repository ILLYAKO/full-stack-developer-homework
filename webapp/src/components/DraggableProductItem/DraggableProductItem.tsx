import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareXmark,
    faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { DraggableProductProps } from "../interfaces";

const DraggableProductItem = (props: DraggableProductProps) => (
    <div
        ref={props.draggableProvided.innerRef}
        {...props.draggableProvided.draggableProps}
        {...props.draggableProvided.dragHandleProps}
        className="bg-neutral-300 flex flex-col items-center justify-between mt-1 p-3 rounded w-full"
        data-testid={`draggable-container-${props.ProductID}`}
    >
        <span data-testid={`draggable-productID-${props.ProductID}`}>
            Id:{props.ProductID}
        </span>

        <img
            data-testid={`draggable-productPhotoUrl-${props.ProductID}`}
            src={`${props.ProductPhotoURL}`}
            alt={`${props.ProductName}`}
            className="h-56 w-56"
        ></img>
        <span data-testid={`draggable-productName-${props.ProductID}`}>
            {props.ProductName}
        </span>
    </div>
);

export default DraggableProductItem;
