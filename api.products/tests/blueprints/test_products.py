import json
from pytest import fixture
from app import PRODUCTS_URL
from api.blueprints.products import products_blueprint
from api.models import Product

@fixture()
def test_client(test_app):
    test_app.register_blueprint(products_blueprint, url_prefix=PRODUCTS_URL)
    return test_app.test_client()

@fixture()
def init_db():

    products = [
        Product(**{
            "ProductName": "Test1",
            "ProductPhotoURL":"/test1",
            "ProductStatus":"Active",
            }),
        Product(**{
            "ProductName": "Test2",
            "ProductPhotoURL":"/test2",
            "ProductStatus":"Active",
            }),
        Product(**{
            "ProductName": "Test3",
            "ProductPhotoURL":"/test3",
            "ProductStatus":"Active",
            }),
        Product(**{
            "ProductName": "Test4",
            "ProductPhotoURL":"/test4",
            "ProductStatus":"InActive",
            }),
        Product(**{
            "ProductName": "Test5",
            "ProductPhotoURL":"/test4",
            "ProductStatus":"InActive",
            }),
    ]
    for product in products:
        product.save()
    return products

def test_get_all_products(test_client, init_db):
    response = test_client.get(f"{PRODUCTS_URL}/all")
    assert response.status_code == 200
    deserialized_response = json.loads(response.data)
    data = deserialized_response.get('data')
    assert data is not None
    assert len(data) == 5
    product_statuses = {}
    for product in data:
        status = product.get("ProductStatus")
        if status in product_statuses.keys():
            product_statuses[status] += 1
        else: product_statuses[status] = 1
    assert len(product_statuses.keys()) == 2
    assert product_statuses.get("Active") == 3
    assert product_statuses.get("InActive") == 2

def test_post_update_product_status_empty_json(test_client, init_db):
    response = test_client.post(f"{PRODUCTS_URL}/update_status", json={})
    assert response.status_code == 400
    deserialized_response = json.loads(response.data)
    message = deserialized_response.get('message')
    assert message == 'No product data provided!'

def test_post_update_product_status_validation_error(test_client, init_db):
    response = test_client.post(f"{PRODUCTS_URL}/update_status",
                                json={"err": "err"})
    assert response.status_code == 422
