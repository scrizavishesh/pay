import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import Header from '../Layouts/Header'
import Sidebar from '../Layouts/Sidebar'
import PageRouter from '../MainRoute/PageRouter';
import { CheckInAgent, CheckOutAgent } from '../utils/Constants';

const Index = () => {
    const navigate = useNavigate();

    const [agent, setRole] = useState();

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("data"));
        setRole(profile[0].is_agent);
    }, []);

    const profile = JSON.parse(localStorage.getItem("data"));

    const [isChecked, setIsChecked] = useState(false); // Initialize to 'Out of Stock'

    const CheckIn = async () => {
        try {
            const response = await CheckInAgent();
            console.log(response, "Check In");
            if (response?.status === 200) {
                toast.success("Checked In Successfully");
                setIsChecked(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const CheckOut = async () => {
        try {
            const response = await CheckOutAgent();
            if (response?.status === 200) {
                toast.success("Checked Out Successfully");
                setIsChecked(false);
            }
        } catch (err) {
            console.log(err);
        }
    };


    // Function to toggle the checked status
    const toggleChecked = () => {
        setIsChecked(prevChecked => !prevChecked);
    };
    const Logout = async () => {
        localStorage.removeItem("token")
        navigate("/")
        window.location.reload();

    }



    // console.log(profile[0].username)


    const [isSidebarOpen, setSidebarOpen] = useState(true);
    // const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <main id="main-wrapper" class={`${isSidebarOpen ? "main-wrapper" : "main-wrapper toggled"}`}>
                <div class="header">
                    {/* <!-- navbar --> */}
                    <div class="navbar-custom navbar navbar-expand-lg">
                        <div class="container-fluid px-0">
                            <a class="navbar-brand d-block d-md-none" href="/">
                                <img src="/logo.png" alt="" width={150} />
                            </a>
                            <a onClick={toggleSidebar} style={{borderRadius: "5px", border: "1px solid #FFFFFF33",padding: "4px", background: "#1961A3"}} class="ms-auto ms-md-0 me-0 me-lg-3 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" class="bi bi-text-indent-left text-muted" viewBox="0 0 16 16">
                                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                                </svg>
                            </a>


                            <div class="d-none d-md-none d-lg-block">
                                {
                                    agent && (
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchStock"
                                                checked={isChecked}
                                                onChange={isChecked ? CheckOut : CheckIn} // Toggle function based on isChecked state
                                            />
                                            <label className="form-check-label" htmlFor="flexSwitchStock" style={{color: "#fff"}}>
                                                {isChecked ? 'Check In' : 'Chec Out'}
                                            </label>
                                        </div>
                                    )
                                }

                            </div>
                            {/* <!--Navbar nav --> */}
                            <ul class="navbar-nav navbar-right-wrap ms-lg-auto d-flex nav-top-wrap align-items-center ms-4 ms-lg-0">
                                <li class="dropdown stopevent ms-2">
                                </li>
                                {/* <!-- List --> */}
                                <li class="dropdown ms-2">
                                    <a class="rounded-circle d-flex gap-3" href="#!" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div class="avatar avatar-md avatar-indicators avatar-online">
                                            <img alt="avatar" src="./ProfileImage.png" class="rounded-circle" />
                                        </div>
                                        <div>
                                            <h6 style={{ marginTop: "0.7rem", color: "#fff" }}>{profile[0].username}</h6>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a type='button' onClick={Logout} class="dropdown-item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power me-2 icon-xxs dropdown-item-icon"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>Sign Out
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Sidebar />
                <div id="app-content" style={{backgroundColor: "#fff"}}>
                    <div class="app-content-area" >
                        <PageRouter />
                    </div>
                </div>
            </main >
        </div >
    )
}

export default Index
