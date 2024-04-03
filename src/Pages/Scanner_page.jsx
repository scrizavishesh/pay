import React, { useState, useEffect } from 'react';

const Scanner_page = () => {


    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft <= 0) {
            clearInterval(timer);
            // navigate("/")
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


    return (
        <>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"/></svg>
                                </a>
                            </div>
                            <div class="card-body">
                                <div className='text text-center'>
                                    <small>Transfer Amount</small>
                                    <br />
                                    <h2>Rs.10.00/-</h2>
                                    <h4 className='mt-2'>Scan QR to pay, or choose an app below</h4>
                                    <br />
                                    <p >Do not screenshot the QR</p>
                                    <img src="https://auth.upicollect.com/static/.svg" alt="" />
                                    <div className='d-flex justify-content-center'>
                                        <small>Receipt:</small>
                                        <small><b>S5AULUJLCB</b></small>
                                    </div>
                                    <br />
                                    <h5 className='text-danger'>Click UPI to pay using other apps and enter UTR</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Scanner_page