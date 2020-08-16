import React, { useEffect, useContext, useState } from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import Auth from '../Login/use-auth';
import { Button } from '@material-ui/core';
import OrderSummary from '../OrderSummary/OrderSummary';
import { getDatabaseCart } from '../LocalStorageManager/LocalStorageManager';
import { AllBooksContext } from '../../App';

const Shipment = () => {
    const [cart, setCart] = useState([])
    const [shipInfo, setShipInfo] = useState(null)
    const auth = Auth();

    const allBooks = useContext(AllBooksContext);
    
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (shipInfo) => {
        setShipInfo(shipInfo);
        reset();
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        if (allBooks.length) {
            const previousCart = productKeys.map(existingKey => {
                const book = allBooks.find(book => book._id === existingKey);
                book.quantity = savedCart[existingKey];
                return book;
            })
            setCart(previousCart);
        }
    }, [allBooks])

    return (
        <div className="shipment">
            <div className="shipmentDetails">
                <h3>Shipping Address</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="name" placeholder="Your Name*" defaultValue={auth.user && auth.user.name} ref={register({required: true})} />
                    <br/>
                    {errors.name && <small>Your Name is required</small>}
                    <br/>
                    <input type="text" name="email" placeholder="Your Email*" defaultValue={auth.user && auth.user.email} ref={register({required: true, pattern: /(.+)@(.+){2,}\.(.+){2,}/ })} />
                    <br/>
                    {errors.email && <small>Enter a valid email</small>}
                    <br/>
                    <input type="text" name="address1" placeholder="Address Line-1*" ref={register({required: true})} />
                    <br/>
                    {errors.address1 && <small>Address Line-1 is required</small>}
                    <br/>
                    <input type="text" name="address2" placeholder="Address Line-2" ref={register} />
                    <br/>
                    <br/>
                    <input type="text" name="city" placeholder="City/District*" ref={register({required: true})} />
                    <br/>
                    {errors.city && <small>City/District is required</small>}
                    <br/>
                    <input type="text" name="country" placeholder="Country*" defaultValue="Bangladesh" ref={register({required: true})} />
                    <br/>
                    {errors.country && <small>Country is required</small>}
                    <br/>
                    <Button type="submit" className="shipmentBtn">Continue To Payment</Button>
                </form>
            </div>
            <OrderSummary isItCart={false} cart={cart}></OrderSummary>
        </div>
    );
};

export default Shipment;