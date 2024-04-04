import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { createFund } from '../utils/Constants';

const Create_Fund = () => {

    const { urlParam } = useParams();
    const decodedUrl = decodeURIComponent(urlParam);
    const [Active, setActive] = useState(false);
    const [ScannerData, setScannerData] = useState('');
    const [timeLeft, setTimeLeft] = useState(180);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [amount, setAmount] = useState("");

    const handleAmount = (value) => {
        setAmount(value);
    };



    const createPayment = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("payment_amount", amount);
        try {
            const response = await createFund(formData, decodedUrl);
            // console.log(response, "Amount Response");
            if (response?.status === 200) {
                setActive(true);
                setScannerData(response?.data);

            }
        } catch (err) {
            console.log(err)
        }

    };




    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
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
        window.location.href = `https://pay.google.com/gp/v/gpc?amount=${amount}`;
    }

    const handlePhonePay = () => {
        window.location.href = `phonepe://pay?amount=${amount}`;
    }

    const handlePaytmPay = () => {
        window.location.href = `paytm://payment?amount=${amount}`;
    }

    return (
        <>
            {
                !Active ?
                    <main class="container d-flex flex-column">
                        <div class="row align-items-center justify-content-center g-0 min-vh-100">
                            <div class="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                                <a href="#" class="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle d-none ">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </a>
                                {/* <!-- Card --> */}
                                <div class="card smooth-shadow-md">
                                    {/* <!-- Card body --> */}
                                    <div class="card-body p-6">
                                        <div class="mb-4 d-flex justify-content-center">
                                            <h1>Transfer Your Fund</h1>
                                            <p class="mb-6"></p>
                                        </div>
                                        {/* <!-- Form --> */}
                                        <form>
                                            {/* <!-- Username --> */}
                                            <div class="mb-3">
                                                <label for="email" class="form-label">Enter Amount*</label>
                                                <input onChange={(e) => handleAmount(e.target.value)} maxLength="10" type="text" class="form-control" name="email" placeholder="Amount" required="" />

                                            </div>
                                            <div>
                                                {/* <!-- Button --> */}
                                                <div class="d-grid">
                                                    <button onClick={createPayment} type="submit" class="btn btn-primary">+ ADD</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    :
                    <main class="container d-flex flex-column">
                        <div class="row align-items-center justify-content-center g-0 min-vh-100">
                            <div class="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
                                <a href="#" class="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle d-none ">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>

                                </a>
                                <div class="card smooth-shadow-md">
                                    <div class="card-header d-flex justify-content-between align-items-center">
                                        <h4 class="mb-0">Payment Time Left</h4>
                                        <a href="#!" class="btn btn-primary btn-sm"> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8" /></svg>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <div className='text text-center'>
                                            <small>Transfer Amount</small>
                                            <h2>Rs.{ScannerData?.amount}</h2>
                                            <h4 className='mt-2'>Scan QR to pay, or choose an app below</h4>
                                            <p >Do not screenshot the QR</p>
                                            <img src={ScannerData?.qr_code} alt="" width={250} />
                                            <div className='d-flex justify-content-center'>
                                                <small>Receipt:</small>
                                                <small><b>{ScannerData?.receipt_id}</b></small>
                                            </div>
                                            <h5 className='text-danger'>Click UPI to pay using other apps and enter UTR</h5>
                                        </div>
                                    </div>
                                    <div class="card-footer ">
                                        <button onClick={handlePhonePay} class="btn btn-outline-white btn-sm fs-5 me-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="1.2rem"  viewBox="0 0 24 24"><path fill="#000000" d="M15.85 8.167a.204.204 0 0 0-.04.004c-.68.19-.543 1.148-1.781 1.23h-.12a.23.23 0 0 0-.052.005h-.001a.24.24 0 0 0-.184.235v1.09c0 .134.106.241.237.241h.645v4.623c0 .132.104.238.233.238h1.058a.236.236 0 0 0 .233-.238v-4.623h.6c.13 0 .236-.107.236-.241v-1.09a.239.239 0 0 0-.236-.24h-.612V8.386a.218.218 0 0 0-.216-.22zm4.225 1.17c-.398 0-.762.15-1.042.395v-.124a.238.238 0 0 0-.234-.224h-1.07a.24.24 0 0 0-.236.242v5.92a.24.24 0 0 0 .236.242h1.07c.12 0 .217-.091.233-.209v-4.25a.393.393 0 0 1 .371-.408h.196a.41.41 0 0 1 .226.09a.405.405 0 0 1 .145.319v4.074l.004.155a.24.24 0 0 0 .237.241h1.07a.239.239 0 0 0 .235-.23l-.001-4.246c0-.14.062-.266.174-.34a.419.419 0 0 1 .196-.068h.198c.23.02.37.2.37.408c.005 1.396.004 2.8.004 4.224a.24.24 0 0 0 .237.241h1.07c.13 0 .236-.108.236-.241v-4.543c0-.31-.034-.442-.08-.577a1.601 1.601 0 0 0-1.51-1.09h-.015a1.58 1.58 0 0 0-1.152.5c-.291-.308-.7-.5-1.153-.5zM.232 9.4A.234.234 0 0 0 0 9.636v5.924c0 .132.096.238.216.241h1.09c.13 0 .237-.107.237-.24l.004-1.658H2.57c.857 0 1.453-.605 1.453-1.481v-1.538c0-.877-.596-1.484-1.453-1.484zm9.032 0a.239.239 0 0 0-.237.241v2.47c0 .94.657 1.608 1.579 1.608h.675s.016 0 .037.004a.253.253 0 0 1 .222.253c0 .13-.096.235-.219.251l-.018.004l-.303.006H9.739a.239.239 0 0 0-.236.24v1.09a.24.24 0 0 0 .236.242h1.75c.92 0 1.577-.669 1.577-1.608v-4.56a.239.239 0 0 0-.236-.24h-1.07a.239.239 0 0 0-.236.24c-.005.787 0 1.525 0 2.255a.253.253 0 0 1-.25.25h-.449a.253.253 0 0 1-.25-.255c.005-.754-.005-1.5-.005-2.25a.239.239 0 0 0-.236-.24zm-4.004.006a.232.232 0 0 0-.238.226v1.023c0 .132.113.24.252.24h1.413c.112.017.2.1.213.23v.14c-.013.124-.1.214-.207.224h-.7c-.93 0-1.594.63-1.594 1.515v1.269c0 .88.57 1.506 1.495 1.506h1.94c.348 0 .63-.27.63-.6v-4.136c0-1.004-.508-1.637-1.72-1.637zm-3.713 1.572h.678c.139 0 .25.115.25.256v.836a.253.253 0 0 1-.25.256h-.1c-.192.002-.386 0-.578 0zm4.67 1.977h.445c.139 0 .252.108.252.24v.932a.23.23 0 0 1-.014.076a.25.25 0 0 1-.238.164h-.445a.247.247 0 0 1-.252-.24v-.933c0-.132.113-.239.252-.239" /></svg>
                                        </button>
                                        <button onClick={handleGooglePay} class="btn btn-outline-white btn-sm fs-5 me-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="3.02em" height="1.2em" viewBox="0 0 512 204"><path fill="#5f6368" d="M362.927 55.057c14.075 0 24.952 3.839 33.27 11.517c8.317 7.677 12.155 17.914 12.155 30.71v61.42h-17.914V144.63h-.64c-7.677 11.517-18.554 17.275-31.35 17.275c-10.877 0-20.474-3.2-28.151-9.597c-7.038-6.398-11.517-15.355-11.517-24.952c0-10.237 3.84-18.555 11.517-24.953s18.554-8.957 31.35-8.957c11.516 0 20.474 1.92 27.511 6.398v-4.478c0-5.972-2.229-11.943-6.688-15.834l-.99-.801c-5.118-4.479-11.516-7.038-18.553-7.038c-10.877 0-19.194 4.479-24.953 13.436L321.34 74.89c10.236-13.436 23.672-19.834 41.587-19.834M272.715 11.55c11.48 0 22.39 3.995 31.113 11.445l1.517 1.35c8.957 7.678 13.435 19.195 13.435 31.351c0 12.156-4.478 23.033-13.435 31.35c-8.958 8.318-19.834 12.796-32.63 12.796l-30.71-.64v59.502H222.81V11.55zm92.77 97.25c-7.677 0-14.075 1.919-19.193 5.758c-5.119 3.199-7.678 7.677-7.678 13.435c0 5.119 2.56 9.597 6.398 12.157c4.479 3.199 9.597 5.118 14.716 5.118c7.165 0 14.331-2.787 19.936-7.84l1.177-1.117c6.398-5.758 9.597-12.796 9.597-20.474c-5.758-4.478-14.076-7.038-24.952-7.038m-91.49-79.336h-31.99V80.65h31.99c7.037 0 14.075-2.559 18.554-7.677c10.236-9.597 10.236-25.592.64-35.19l-.64-.64c-5.119-5.118-11.517-8.317-18.555-7.677M512 58.256l-63.34 145.235h-19.194l23.672-50.544l-41.587-94.051h20.474l30.07 72.297h.64l29.431-72.297H512z"/><path fill="#4285f4" d="M165.868 86.407c0-5.758-.64-11.516-1.28-17.274H84.615v32.63h45.425c-1.919 10.236-7.677 19.833-16.634 25.592v21.113h27.511c15.995-14.715 24.952-36.469 24.952-62.06"/><path fill="#34a853" d="M84.614 168.942c23.032 0 42.226-7.678 56.302-20.474l-27.511-21.113c-7.678 5.118-17.275 8.317-28.791 8.317c-21.754 0-40.948-14.715-47.346-35.189H9.118v21.753c14.715 28.791 43.506 46.706 75.496 46.706"/><path fill="#fbbc04" d="M37.268 100.483c-3.838-10.237-3.838-21.753 0-32.63V46.1H9.118c-12.157 23.673-12.157 51.824 0 76.136z"/><path fill="#ea4335" d="M84.614 33.304c12.156 0 23.672 4.479 32.63 12.796l24.312-24.312C126.2 7.712 105.727-.605 85.253.034c-31.99 0-61.42 17.915-75.496 46.706l28.151 21.753c5.758-20.474 24.952-35.189 46.706-35.189"/></svg>
                                        </button>
                                        <button onClick={handlePaytmPay} class="btn btn-outline-white btn-sm fs-5 me-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#562692" d="M10.206 9.941h2.949v4.692c-.402.201-.938.268-1.34.268c-1.072 0-1.609-.536-1.609-1.743zm13.47 4.816c-1.523 6.449-7.985 10.442-14.433 8.919C2.794 22.154-1.199 15.691.324 9.243C1.847 2.794 8.309-1.199 14.757.324c6.449 1.523 10.442 7.985 8.919 14.433m-6.231-5.888a.887.887 0 0 0-.871-.871h-1.609l-3.686-4.222c-.335-.402-.871-.536-1.407-.402l-1.274.401c-.201.067-.268.335-.134.469l4.021 3.82H6.386c-.201 0-.335.134-.335.335v.67c0 .469.402.871.871.871h.938v3.217c0 2.413 1.273 3.82 3.418 3.82c.67 0 1.206-.067 1.877-.335v2.145c0 .603.469 1.072 1.072 1.072h.938a.432.432 0 0 0 .402-.402V9.874h1.542c.201 0 .335-.134.335-.335z"/></svg>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
            }


        </>
    )
}

export default Create_Fund