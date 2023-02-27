import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import { ALL_PRODUCTS_URL, PRODUCT_UPDATE_STATUS_URL } from "../ApiHelper";

export default {
    title: "Product Page",
    component: ProductsPage,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: ALL_PRODUCTS_URL,
            method: "GET",
            status: 200,
            response: {
                data: [
                    {
                        ProductID: 1,
                        ProductName: "Hat",
                        ProductPhotoURL:
                            "https://fastly.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM",
                        ProductStatus: "Active",
                    },
                    {
                        ProductID: 2,
                        ProductName: "Shoes",
                        ProductPhotoURL:
                            "https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
                        ProductStatus: "Active",
                    },
                    {
                        ProductID: 3,
                        ProductName: "Pants",
                        ProductPhotoURL:
                            "https://fastly.picsum.photos/id/361/5000/3333.jpg?hmac=XLgLKar1Bg3tKSqrrdfsBC1SUPoiCyRmtP35fSQOSOM",
                        ProductStatus: "Active",
                    },
                    {
                        ProductID: 4,
                        ProductName: "Shirt",
                        ProductPhotoURL: "https://picsum.photos/images#21",
                        ProductStatus: "InActive",
                    },
                    {
                        ProductID: 5,
                        ProductName: "Coat",
                        ProductPhotoURL:
                            "https://fastly.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM",
                        ProductStatus: "InActive",
                    },
                ],
                message: "",
            },
        },
        {
            url: PRODUCT_UPDATE_STATUS_URL,
            method: "POST",
            status: 200,
            response: {
                data: {
                    message: "Success",
                },
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: ALL_PRODUCTS_URL,
            method: "GET",
            status: 200,
            response: {
                data: [],
                message: "",
            },
        },
        {
            url: PRODUCT_UPDATE_STATUS_URL,
            method: "POST",
            status: 200,
            response: {
                data: {
                    message: "Success",
                },
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: ALL_PRODUCTS_URL,
            method: "GET",
            status: 500,
            response: {
                data: [],
                message: "Error",
            },
        },
        {
            url: PRODUCT_UPDATE_STATUS_URL,
            method: "POST",
            status: 200,
            response: {
                data: {
                    message: "Success",
                },
            },
        },
    ],
};
