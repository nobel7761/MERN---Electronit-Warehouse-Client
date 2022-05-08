import React, { useEffect, useState } from 'react';
import SignUpBanner from '../../Auth/SignUp/SignUpBanner/SignUpBanner';
import './MyItems.css';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/user/${user.email}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setMyItems(data))
    }, [])

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
                        const restProducts = myItems.filter(product => product._id !== id);
                        setMyItems(restProducts);
                    }
                })
        }
    }


    return (
        <div className='login-container py-5'>
            <SignUpBanner></SignUpBanner>
            <div className="container">
                <h1>My Items</h1>
                <div className='product-list'>
                    <Table striped bordered hover responsive>
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
                                myItems.map(item => {
                                    return (
                                        <>
                                            <tr key={item._id}>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.supplier}</td>
                                                <td>
                                                    <Button className='bg-transparent btn-outline-light' onClick={() => removeItem(item._id)}>
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
        </div>
    );
};

export default MyItems;