import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addQuantity, delItem } from '../redux/action'


const Cart = () => {

    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const handleAdd = (item) => {
      dispatch(addQuantity(item));
    };

    const cartItems = (cartItem) => {
        return(
          <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
              <div className="row justify-content-center align-items-center">
                  <div className="col-md-4">
                      <img src={cartItem.image} alt={cartItem.title} className="img-fluid" />
                  </div>
                  <div className="col-md-4">
                      <h3>{cartItem.title}</h3>
                      <p className="lead fw-bold">
                          Total Price:{" "}
                          {" "}
                          {(cartItem.qty * cartItem.price).toLocaleString("id-ID", { style: "currency", currency: "USD" })}
                      </p>
                  </div>
                  <div className="col-md-4">
                      <div className="d-flex align-items-center">
                          <button onClick={() => handleAdd(cartItem)} className="btn btn-outline-primary me-2">+</button>
                          <span>{cartItem.qty}</span>
                          <button onClick={() => handleClose(cartItem)} className="btn btn-outline-danger ms-2">-</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="#" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart