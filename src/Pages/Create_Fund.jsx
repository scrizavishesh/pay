import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { createFund } from '../utils/Constants';

const Create_Fund = () => {
    const { order_id, receipt, agent } = useParams();
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
            // console.log(response, "create fund")
            if (response?.status === 200) {
                setActive(true);
                setScannerData(response?.data);
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.error)
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
            window.location.href = `intent://pay?pa=${scannerData?.upi_id}&amp;am=${amount}&amp;cu=INR&amp;tn=${receipt}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user`;
        } else {
            window.location.href = `https://pay.google.com/gp/v/gpc?amount=${amount}`;
        }
    }

    const handlePhonePay = () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // If the user is on a mobile device, redirect to PhonePe app
            window.location.href = `intent://pay?pa=${scannerData?.upi_id}&amp;am=${amount}&amp;cu=INR&amp;tn=${receipt}#Intent;scheme=upi;package=com.phonepe.app`;
        } else {
            // If the user is not on a mobile device, you can provide a fallback action like displaying a message
            alert("PhonePe app is required for UPI payments on mobile devices.");
        }
    }
    
    const handlePaytmPay = () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // If the user is on a mobile device, redirect to Paytm app
            window.location.href = `intent://pay?pa=${scannerData?.upi_id}&amp;am=${amount}&amp;cu=INR&amp;tn=${receipt}#Intent;scheme=upi;package=net.one97.paytm;end`;
        } else {
            // If the user is not on a mobile device, redirect to Paytm website or provide a fallback action
            window.location.href = `https://paytm.com/`;
        }
    }
    

    const handleUPI = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = `upi://pay?pa=${scannerData?.upi_id}&pn=demo2&tn=${receipt}&am=${amount}&cu=INR`;
        } else {
            window.location.href = `https://pay.google.com/gp/v/gpc?amount=${amount}`;
        }
    };

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
                                    <button onClick={handlePaytmPay} className="btn btn-outline-white btn-sm fs-5 me-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="1.2em" viewBox="0 0 24 24"><path fill="#182A75" d="m15.85 8.167l-.04.004c-.68.19-.543 1.148-1.781 1.23h-.12a.2.2 0 0 0-.052.005h-.001a.24.24 0 0 0-.184.235v1.09c0 .134.106.241.237.241h.645v4.623c0 .132.104.238.233.238h1.058a.236.236 0 0 0 .233-.238v-4.623h.6c.13 0 .236-.107.236-.241v-1.09a.24.24 0 0 0-.236-.24h-.612V8.386a.22.22 0 0 0-.216-.22zm4.225 1.17c-.398 0-.762.15-1.042.395v-.124a.24.24 0 0 0-.234-.224h-1.07a.24.24 0 0 0-.236.242v5.92a.24.24 0 0 0 .236.242h1.07c.12 0 .217-.091.233-.209v-4.25a.393.393 0 0 1 .371-.408h.196a.4.4 0 0 1 .226.09a.4.4 0 0 1 .145.319v4.074l.004.155a.24.24 0 0 0 .237.241h1.07a.24.24 0 0 0 .235-.23l-.001-4.246c0-.14.062-.266.174-.34a.4.4 0 0 1 .196-.068h.198c.23.02.37.2.37.408c.005 1.396.004 2.8.004 4.224a.24.24 0 0 0 .237.241h1.07c.13 0 .236-.108.236-.241v-4.543c0-.31-.034-.442-.08-.577a1.6 1.6 0 0 0-1.51-1.09h-.015a1.58 1.58 0 0 0-1.152.5c-.291-.308-.7-.5-1.153-.5zM.232 9.4A.234.234 0 0 0 0 9.636v5.924c0 .132.096.238.216.241h1.09c.13 0 .237-.107.237-.24l.004-1.658H2.57c.857 0 1.453-.605 1.453-1.481v-1.538c0-.877-.596-1.484-1.453-1.484zm9.032 0a.24.24 0 0 0-.237.241v2.47c0 .94.657 1.608 1.579 1.608h.675s.016 0 .037.004a.253.253 0 0 1 .222.253c0 .13-.096.235-.219.251l-.018.004l-.303.006H9.739a.24.24 0 0 0-.236.24v1.09a.24.24 0 0 0 .236.242h1.75c.92 0 1.577-.669 1.577-1.608v-4.56a.24.24 0 0 0-.236-.24h-1.07a.24.24 0 0 0-.236.24c-.005.787 0 1.525 0 2.255a.253.253 0 0 1-.25.25h-.449a.253.253 0 0 1-.25-.255c.005-.754-.005-1.5-.005-2.25a.24.24 0 0 0-.236-.24zm-4.004.006a.23.23 0 0 0-.238.226v1.023c0 .132.113.24.252.24h1.413c.112.017.2.1.213.23v.14c-.013.124-.1.214-.207.224h-.7c-.93 0-1.594.63-1.594 1.515v1.269c0 .88.57 1.506 1.495 1.506h1.94c.348 0 .63-.27.63-.6v-4.136c0-1.004-.508-1.637-1.72-1.637zm-3.713 1.572h.678c.139 0 .25.115.25.256v.836a.253.253 0 0 1-.25.256h-.1q-.289.002-.578 0zm4.67 1.977h.445c.139 0 .252.108.252.24v.932a.2.2 0 0 1-.014.076a.25.25 0 0 1-.238.164h-.445a.247.247 0 0 1-.252-.24v-.933c0-.132.113-.239.252-.239"/></svg>
                                    </button>
                                    <button onClick={handleGooglePay} className="btn btn-outline-white btn-sm fs-5 me-2 ">
                                        <img src="/GooglePay.svg" alt="" width={50} />
                                    </button>
                                    <button onClick={handlePhonePay} className="btn btn-outline-white btn-sm fs-5 me-2 ">
                                        <img src="/phonepe.svg" alt="" width={50} />
                                    </button>
                                    <button onClick={handleUPI} className="btn btn-outline-white btn-sm fs-5 me-2 ">
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
