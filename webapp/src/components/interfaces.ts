import type { DraggableProvided } from 'react-beautiful-dnd';

export interface Product {
    ProductID: number;
    ProductName: string;
    ProductPhotoURL: string;
    ProductStatus: string;
}

export interface ProductData {
    Active: Product[];
    InActive: Product[];
}

export interface Order {
    OrderID: number;
    CustomerID: number;
    ProductID: number;
    OrderStatus: string;
}

export interface OrderData {
  Queued: Order[],
  InProgress: Order[],
  QA: Order[],
}

export interface DraggableProductProps extends Product {
    draggableProvided: DraggableProvided;
    removeProduct: (product: Product) => void;
}

export interface DraggableItemProps extends Order{
    draggableProvided: DraggableProvided;
    removeOrder: (order: Order) => void;
}

export interface DraggableProductListProps {
    ID: string;
    listTitle: string;
    removeProduct: (product: Product) => void;
    items: Product[];
    isChecked: boolean;
};

export interface DraggableListProps {
    ID: string;
    listTitle: string;
    removeOrder: (order: Order) => void;
    items: Order[];
};

export interface HeaderLink {
    label: string;
    url: string;
}

export interface HeaderProps {
    links: HeaderLink[];
}