import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SignUpBanner from '../../Auth/SignUp/SignUpBanner/SignUpBanner';
import './AddItems.css';

const AddItems = () => {
    const [user] = useAuthState(auth);


    const handleSubmit = event => {
        event.preventDefault();
        const productName = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const picture = event.target.photo.value;
        const sold = 0;
        event.target.reset();

        console.log(productName, price, quantity, supplierName, picture);

        const product = { picture: picture, name: productName, quantity: parseInt(quantity), supplier: supplierName, price: parseInt(price), sold: sold, email: user.email }


        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Product Added Successfully!")
            })
    }
    return (
        <div className="login-container py-5">
            <SignUpBanner></SignUpBanner>
            <div className='container'>
                <h1>Add New Item</h1>
                <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            placeholder="Enter Price"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantity"
                            placeholder="Enter Quantity"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="supplierName"
                            placeholder="Enter Supplier Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Photo</Form.Label>
                        <Form.Control
                            type="text"
                            name="photo"
                            placeholder="Enter Photo URL"
                            required
                        />
                    </Form.Group>


                    <Button

                        className="w-50 mx-auto d-block"
                        variant="primary"
                        type="submit"
                    >
                        Add Item To The Database
                    </Button>


                </Form>
            </div>
        </div>
    );
};

export default AddItems;