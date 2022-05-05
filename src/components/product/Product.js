
import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { picture, name, description, price, quantity, supplier } = props.product;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description?.length > 100 ? description.slice(0, 100) + '...' : description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Price:</strong> <small>$ {price}</small></ListGroupItem>
                    <ListGroupItem><strong>Quantity:</strong> <small>{quantity}</small></ListGroupItem>
                    <ListGroupItem><strong>Supplier:</strong> <small>{supplier}</small> </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Update Product</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;