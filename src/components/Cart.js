import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Card } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart)

  const dispatch = useDispatch();

  const removecart = (id) => {
    dispatch(remove(id))
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
          <Button variant="danger" onClick={() => removecart(product.id)}>Remove Item</Button>

        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <div className='row'>
     {cards}

      {/* {JSON.stringify(productCart)} */}
    </div>
  )
}

export default Cart