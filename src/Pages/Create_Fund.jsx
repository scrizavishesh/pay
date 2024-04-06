import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createFund } from '../utils/Constants';

const Create_Fund = () => {
    const { order_id, receipt, agent } = useParams();
    console.log(order_id, "ord", receipt, "res", agent, "id")
    const [active, setActive] = useState(false);
    const [scannerData, setScannerData] = useState('');
    const [timeLeft, setTimeLeft] = useState(180);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [amount, setAmount] = useState('');

    const handleAmount = (value) => {
        setAmount(value);
    };

    const createPayment = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('payment_amount', amount);
        try {
            const response = await createFund(formData, order_id, receipt, agent);
            if (response?.status === 200) {
                setActive(true);
                setScannerData(response?.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        setMinutes(mins);
        setSeconds(secs);
    }, [timeLeft]);

    const handleGooglePay = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = `upi://pay?pa=yourupiaddress@bank&pn=RecipientName&tn=PaymentDescription&am=${amount}&cu=INR`;
        } else {
            window.location.href = `https://pay.google.com/gp/v/gpc?amount=${amount}`;
        }
    }

    const handlePhonePay = () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // If the user is on a mobile device, redirect to PhonePe app
            window.location.href = `phonepe://pay?amount=${amount}`;
        } else {
            // If the user is not on a mobile device, you can provide a fallback action like displaying a message
            alert("PhonePe app is required for UPI payments on mobile devices.");
        }
    }
    
    const handlePaytmPay = () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // If the user is on a mobile device, redirect to Paytm app
            window.location.href = `paytm://payment?amount=${amount}`;
        } else {
            // If the user is not on a mobile device, redirect to Paytm website or provide a fallback action
            window.location.href = `https://paytm.com/`;
        }
    }
    

    // const handlePhonePay = () => {
    //     window.location.href = `upi://pay?pa=phonepe@ybl&pn=PhonePe&am=${amount}&cu=INR`;
    // };

    // const handlePaytmPay = () => {
    //     window.location.href = `upi://pay?pa=paytm@icici&pn=Paytm&mc=123&tid=12345&tr=${Math.floor(Math.random() * 100000)}&tn=Payment&am=${amount}&cu=INR`;
    // };

    return (
        <>
            {!active ? (
                <main className="container d-flex flex-column">
                    <div className="row align-items-center justify-content-center g-0 min-vh-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                            <div className="card smooth-shadow-md">
                                <div className="card-body p-6">
                                    <div className="mb-4 d-flex justify-content-center">
                                        <h1>Transfer Your Fund</h1>
                                        <p className="mb-6"></p>
                                    </div>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                Enter Amount*
                                            </label>
                                            <input
                                                onChange={(e) => handleAmount(e.target.value)}
                                                maxLength="10"
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                placeholder="Amount"
                                                required=""
                                            />
                                        </div>
                                        <div>
                                            <div className="d-grid">
                                                <button onClick={createPayment} type="submit" className="btn btn-primary">
                                                    + ADD
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            ) : (
                <main className="container d-flex flex-column">
                    <div className="row align-items-center justify-content-center g-0 min-vh-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                            <div className="card smooth-shadow-md">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h4 className="mb-0">Payment Time Left</h4>
                                    <a href="#!" className="btn btn-primary btn-sm">
                                        {' '}
                                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
                                            <path
                                                fill="currentColor"
                                                d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="text text-center">
                                        <small>Transfer Amount</small>
                                        <h2>Rs.{scannerData?.amount}</h2>
                                        <h4 className="mt-2">Scan QR to pay, or choose an app below</h4>
                                        <p>Do not screenshot the QR</p>
                                        <img src={scannerData?.qr_code} alt="" width={250} />
                                        <div className="d-flex justify-content-center">
                                            <small>Receipt:</small>
                                            <small>
                                                <b>{scannerData?.receipt_id}</b>
                                            </small>
                                        </div>
                                        <h5 className="text-danger">Click UPI to pay using other apps and enter UTR</h5>
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-center align-item-center ">
                                    <button onClick={handlePhonePay} className="btn btn-outline-white btn-sm fs-5 me-2 ">
                                        <img src="/Paytm.svg" alt="" width={50} />
                                    </button>
                                    <button onClick={handleGooglePay} className="btn btn-outline-white btn-sm fs-5 me-2 ">
                                        <img src="/GooglePay.svg" alt="" width={50} />
                                    </button>
                                    <button onClick={handlePaytmPay} className="btn btn-outline-white btn-sm fs-5 me-2 ">
                                        <img src="/phonepe.svg" alt="" width={50} />
                                    </button>
                                    <button onClick={handleGooglePay} className="btn btn-outline-white btn-sm fs-5 me-2 ">
                                        <img src="/UPI.svg" alt="" width={50} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default Create_Fund;
