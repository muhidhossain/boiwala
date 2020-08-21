import React, { useEffect, useContext, useState } from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import Auth from '../Login/use-auth';
import { Button, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import OrderSummary from '../OrderSummary/OrderSummary';
import { getDatabaseCart } from '../LocalStorageManager/LocalStorageManager';
import { AllBooksContext } from '../../App';
import bKashLogo from '../../images/logo/bKash_logo.png'
import BAStep1 from '../../images/bKash_App/step-1.png';
import BAStep2 from '../../images/bKash_App/step-2.png';
import BAStep3 from '../../images/bKash_App/step-3.png';
import BAStep4 from '../../images/bKash_App/step-4.png';
import BAStep5 from '../../images/bKash_App/step-5.png';

const Shipment = () => {
    const [cart, setCart] = useState([]);
    const [shipInfo, setShipInfo] = useState(null);
    const [value, setValue] = useState("bKashApp")
    const auth = Auth();

    console.log(value);

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
    }, [allBooks]);

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    }

    let method;
    if (value === "bKashApp") {
        method = (
            <div className="method">
                <div>
                    <p>Step 1</p>
                    <p>Click on Scan QR Code inside the red circle</p>
                    <img src={BAStep1} alt="" />
                </div>
                <div>
                    <p>Step 2</p>
                    <p>Scan the QR code to continue the payment process</p>
                    <img src={BAStep2} alt="" />
                </div>
                <div>
                    <p>Step 3</p>
                    <p>Enter Payable Total price on Amount section</p>
                    <img src={BAStep3} alt="" />
                </div>
                <div>
                    <p>Step 4</p>
                    <p>{shipInfo && shipInfo.phoneNumber} Enter the Number as Reference</p>
                    <img src={BAStep4} alt="" />
                </div>
                <div>
                    <p>Step 5</p>
                    <p>Tap and hold to Send Money to complete the process</p>
                    <img src={BAStep5} alt="" />
                </div>
            </div>
        )
    }

    return (
        <div className="shipment">
            {
                !shipInfo ?
                    <div className="shipmentDetails">
                        <h3>Shipping Address</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" name="name" placeholder="Your Name*" defaultValue={auth.user && auth.user.name} ref={register({ required: true })} />
                            <br />
                            {errors.name && <small>Your Name is required</small>}
                            <br />
                            <input type="email" name="email" placeholder="Your Email*" defaultValue={auth.user && auth.user.email} ref={register({ required: true, pattern: /(.+)@(.+){2,}\.(.+){2,}/ })} />
                            <br />
                            {errors.email && <small>Enter a valid email</small>}
                            <br />
                            <input type="text" name="phoneNumber" placeholder="Your Phone Number*" ref={register({ required: true, minLength: 11, maxLength: 14, pattern: /[0-9]/ })} />
                            <br />
                            {errors.phoneNumber && <small>Enter a valid phone number</small>}
                            <br />
                            <input type="text" name="address1" placeholder="Address Line-1*" ref={register({ required: true })} />
                            <br />
                            {errors.address1 && <small>Address Line-1 is required</small>}
                            <br />
                            <input type="text" name="address2" placeholder="Address Line-2" ref={register} />
                            <br />
                            <br />
                            <input type="text" name="city" placeholder="City/District*" ref={register({ required: true })} />
                            <br />
                            {errors.city && <small>City/District is required</small>}
                            <br />
                            <input type="text" name="country" placeholder="Country*" defaultValue="Bangladesh" ref={register({ required: true })} />
                            <br />
                            {errors.country && <small>Country is required</small>}
                            <br />
                            <Button type="submit" className="shipmentBtn">Continue To Payment</Button>
                        </form>
                    </div> :
                    <div className="paymentInfo">
                        <h3>Payment Method</h3>
                        <div className="paymentMethods">
                            <div className="methods">
                                <FormControl>
                                    <RadioGroup value={value} onChange={handleRadioChange} style={{ display: "inline" }}>
                                        <FormControlLabel
                                            value="bKashApp"
                                            control={<Radio color="primary" style={{ color: "#498EC5" }} />}
                                            label={
                                                <div>
                                                    <img src={bKashLogo} alt="bKashLogo" />
                                                    <span style={{ marginLeft: "-5px" }}>bKash App</span>
                                                </div>
                                            }
                                        />
                                        <FormControlLabel
                                            value="bKash"
                                            control={<Radio color="primary" style={{ color: "#498EC5" }} />}
                                            label={
                                                <div>
                                                    <img src={bKashLogo} alt="bKashLogo" />
                                                    <span style={{ marginLeft: "-5px" }}>bKash</span>
                                                </div>
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className="details">
                                {method}
                            </div>
                        </div>
                    </div>
            }
            <OrderSummary isItCart={false} cart={cart}></OrderSummary>
        </div>
    );
};

export default Shipment;