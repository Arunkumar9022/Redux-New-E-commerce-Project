import React, { useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { add } from '../store/cartSlice';
import { GetProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
    // const [products, GetProducts] = React.useState([])
    const dispatch = useDispatch()

    const { data: products, status } = useSelector(state => state.products);


    useEffect(() => {
        //dispatch an Action for an fetchProducts
        dispatch(GetProducts())
        // calling an Api
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => GetProducts(result))

    }, [dispatch])

    if (status ===StatusCode.Loading) {
        return <p>Loading...</p>
    }

    if (status === StatusCode.ERROR) {
        return <Alert key="danger" variant="danger">
            Something Went Wrong ! Please try again Later
        </Alert>
    }
    const addToCart = (product) => {
        //dispatch an add action 
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: "10px" }}>
            <Card key={product.id} className="h-100" style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR:{product.price}
                    </Card.Text>

                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    {/* <Button variant="primary">Add To Cart</Button> */}
                </Card.Body>
                <Card.Footer style={{ background: "white" }}>
                    <Button variant="primary" onClick={(e) => addToCart(product)}>Add To Cart</Button>

                </Card.Footer>
            </Card>
        </div>
    ))
    return (
        <>
            <div>
                <h1>Product Dashboard</h1>
                <div className="row">
                    {cards}
                </div>
            </div>
        </>
    )
}
export default Product;
