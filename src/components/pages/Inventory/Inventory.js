import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLoadSingleProduct from '../../../Hooks/useLoadSingleProduct';
import SignUpBanner from '../../Auth/SignUp/SignUpBanner/SignUpBanner';
import './Inventory.css';

const Inventory = () => {

    const { id } = useParams();
    const [product, setProduct] = useLoadSingleProduct(id);

    const handleUpdateQuantity = () => {
        const productQuantity = product.quantity;
        const productSold = product.sold;


        const updateInfo = { quantity: (productQuantity - 1), sold: (productSold + 1) };

        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log('success', data);
                toast("Product Delivered!!!")
            })
    }
    /* useEffect(() => {

   }, [product])  */

    const handleUpdateStock = (event) => {
        event.preventDefault();
        const previousQuantity = product.quantity;
        const userProvideQuantity = event.target.typedQuantity.value;
        const productSold = product.sold;
        event.target.reset();

        const updatedStock = { quantity: (previousQuantity + parseFloat(userProvideQuantity)), sold: productSold };
        console.log(updatedStock)

        const url = `http://localhost:5000/updateStock/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(response => response.json())
            .then(data => {
                console.log('success', data);
                toast("Stock Updated!!!")
            })
    }

    return (
        <div className="login-container inventory-page pt-5">
            <SignUpBanner></SignUpBanner>
            <h1>{product.name}</h1>
            <div className='container d-flex inventory-page-container'>

                <div className='d-flex justify-content-center'>
                    <img src={product.picture} alt="" srcset="" />
                </div>
                <div className='d-flex flex-column justify-content-center product-details'>
                    <p><strong>Product ID: </strong> {product._id} </p>
                    <p><strong>Description: </strong> {product.description} </p>
                    <p><strong>Supplier Name: </strong> {product.supplier} </p>
                    <p><strong>Price: </strong> {product.price} </p>
                    <p><strong>Stock Quantity: </strong> {product.quantity} </p>
                    <p><strong>Sold: </strong>{product.sold}</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <Button className='btn btn-primary w-25 inventory-page-btn' size="lg" onClick={handleUpdateQuantity}>Delivered</Button>
            </div>

            <div className='reStock-section mt-5'>
                <div className='d-flex flex-row justify-content-center pt-5'>
                    <Link to='/manage-inventories'>
                        <Button variant="outline-dark" className='manage-btn py-2'>Manage Inventories<FontAwesomeIcon icon={faArrowRightLong} className='ps-2' /></Button>

                    </Link>
                </div>
                <div className="stock-update-section container d-flex py-4 justify-content-between align-items-center">
                    <h1>Change Stock Quantity: </h1>
                    <Form className='reStock-form w-50 mx-auto d-flex' onSubmit={handleUpdateStock}>

                        <Form.Group controlId="formBasicEmail">

                            <Form.Control
                                type="number"
                                name="typedQuantity"
                                placeholder="Enter Quantity"
                                required
                            />
                        </Form.Group>



                        <Button

                            className="stock-update-btn"
                            variant="primary"
                            type="submit"
                        >
                            Update Stock
                        </Button>


                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Inventory;