import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useLoadProducts from '../../../Hooks/useLoadProducts';
import SignUpBanner from '../../Auth/SignUp/SignUpBanner/SignUpBanner';
import './ManageInventories.css';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useLoadProducts();

    const removeItem = (id) => {
        const decision = window.confirm("Do You Really Want To Remove?");
        if (decision) {
            console.log("Hello", id)
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restProducts = products.filter(product => product._id !== id);
                        setProducts(restProducts);
                    }
                })
        }
    }

    return (
        <div className="login-container py-5">
            <SignUpBanner></SignUpBanner>
            <div className='container'>
                <h1>Products Inventory</h1>
                <div className='d-grid mb-5'>
                    <Button variant="outline-dark" size="lg" onClick={() => navigate('/add-items')}>Add New Item</Button>
                </div>
                <div className='product-list'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Supplier</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map(product => {
                                    return (
                                        <>
                                            <tr key={product._id}>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.quantity}</td>
                                                <td>{product.supplier}</td>
                                                <td>
                                                    <Button className='bg-transparent btn-outline-light' onClick={() => removeItem(product._id)}>
                                                        <FontAwesomeIcon icon={faTrashCan} className='delete-icon' />
                                                    </Button>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })
                            }


                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    );
};

export default ManageInventories;