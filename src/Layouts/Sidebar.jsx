import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { decryptData } from '../utils/Encrypt_data';

const Container = styled.div`
[data-simplebar] {
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start
}

.simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit
}

.simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto!important;
    height: auto!important;
    z-index: 0
}

.simplebar-offset {
    direction: inherit!important;
    box-sizing: inherit!important;
    resize: none!important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch
}

.simplebar-content-wrapper {
    direction: inherit;
    box-sizing: border-box!important;
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none
}

.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar {
    width: 0;
    height: 0
}

.simplebar-content:after,.simplebar-content:before {
    content: ' ';
    display: table
}

.simplebar-placeholder {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    pointer-events: none
}

.simplebar-height-auto-observer-wrapper {
    box-sizing: inherit!important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0
}

.simplebar-height-auto-observer {
    box-sizing: inherit;
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 1000%;
    width: 1000%;
    min-height: 1px;
    min-width: 1px;
    overflow: hidden;
    pointer-events: none;
    z-index: -1
}

.simplebar-track {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden
}

[data-simplebar].simplebar-dragging .simplebar-content {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none
}

[data-simplebar].simplebar-dragging .simplebar-track {
    pointer-events: all
}

.simplebar-scrollbar {
    position: absolute;
    left: 0;
    right: 0;
    min-height: 10px
}

.simplebar-scrollbar:before {
    position: absolute;
    content: '';
    background: #000;
    border-radius: 7px;
    left: 2px;
    right: 2px;
    opacity: 0;
    transition: opacity .2s linear
}

.simplebar-scrollbar.simplebar-visible:before {
    opacity: .5;
    transition: opacity 0s linear
}

.simplebar-track.simplebar-vertical {
    top: 0;
    width: 11px
}

.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
    top: 2px;
    bottom: 2px
}

.simplebar-track.simplebar-horizontal {
    left: 0;
    height: 11px
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {
    height: 100%;
    left: 2px;
    right: 2px
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
    right: auto;
    left: 0;
    top: 2px;
    height: 7px;
    min-height: 0;
    min-width: 10px;
    width: auto
}

[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical {
    right: auto;
    left: 0
}

.hs-dummy-scrollbar-size {
    direction: rtl;
    position: fixed;
    opacity: 0;
    visibility: hidden;
    height: 500px;
    width: 500px;
    overflow-y: hidden;
    overflow-x: scroll
}

.simplebar-hide-scrollbar {
    position: fixed;
    left: 0;
    visibility: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none
}

`;
const Sidebar = () => {



    const [activeLink, setActiveLink] = useState('');

    const [role, setRole] = useState();
    const [updateRole, setUpdateRole] = useState();
    const [superAdmin, setSuperAdmin] = useState();

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem('data'));
        // const profile = decryptData(encryptedUserData);
        // console.log(profile, "Profile");
        setRole(profile[0].is_admin);
        setUpdateRole(profile[0].is_agent);
        setSuperAdmin(profile[0].is_superadmin);
    }, []);


    useEffect(() => {
        const storedActiveLink = localStorage.getItem('activeLink');
        if (storedActiveLink) {
            setActiveLink(storedActiveLink);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink]);



    const handleDasLinkClick = (link) => {
        setActiveLink(link);
    };

    const handlereportLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleSubCreatorLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleSubCreatorListLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleUpdateLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleCreUserLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleUseListLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleDownReportsLinkClick = (link) => {
        setActiveLink(link);
    };








    return (
        <Container>
            <div class="app-menu">
                {/* <!-- Sidebar --> */}

                <div class="navbar-vertical navbar nav-dashboard">
                    <div class="h-100" data-simplebar="init"><div class="simplebar-wrapper" style={{ margin: "0px" }}>
                        <div class="simplebar-height-auto-observer-wrapper">
                            <div class="simplebar-height-auto-observer">
                            </div>
                        </div>
                        <div class="simplebar-mask">
                            <div class="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "100%", overflow: "hidden scroll" }}>
                                    <div class="simplebar-content" style={{ padding: "0px" }}>
                                        {/* <!-- Brand logo --> */}
                                        <div className='mb-5' style={{ backgroundColor: "#fff" }}>
                                            <img src="/logo.png" alt="" width={195} />
                                        </div>
                                        {/* <!-- Navbar nav --> */}
                                        <ul class="navbar-nav flex-column" id="sideNavbar">
                                            <li class="nav-item ">
                                                <Link to="/"
                                                    className={`nav-link has-arrow ${activeLink === '/' ? 'active' : ''}`}
                                                    onClick={() => handleDasLinkClick('/')}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#ff914d" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m3.833 3.337a.596.596 0 0 1 .763.067a.59.59 0 0 1 .063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.5 1.5 0 0 1-2.122-2.122c.374-.373 2.005-1.574 4.894-3.602M17.5 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-11 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m2.318-3.596a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414M12 5.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2" /></svg>
                                                    Dashboard
                                                </Link>
                                            </li>

                                            {
                                                role && (
                                                    <>
                                                        <li class="nav-item">
                                                            <Link to="/create_sub_creator"
                                                                className={`nav-link has-arrow ${activeLink === '/create_sub_creator' ? 'active' : ''}`}
                                                                onClick={() => handleSubCreatorLinkClick('/create_sub_creator')}
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#ff914d" d="M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4c89.1 0 161.3 72.2 161.3 161.3c0 17-13.8 30.7-30.7 30.7M432 256c-31 0-59-12.6-79.3-32.9c19.7-26.6 31.3-59.5 31.3-95.1c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112" /></svg>
                                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><title>Pay Out</title><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg> */}
                                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ff914d" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="none" d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m4 10.54c0 1.06-.28 3.53-2.19 6.29L13 15l.94-1.88c-.62-.07-1.27-.12-1.94-.12s-1.32.05-1.94.12L11 15l-.81 4.83C8.28 17.07 8 14.6 8 13.54c-2.39.7-4 1.96-4 3.46v4h16v-4c0-1.5-1.6-2.76-4-3.46" /></svg> */}
                                                                Create Sub Creator
                                                            </Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/sub_creator_list"
                                                                className={`nav-link has-arrow ${activeLink === '/sub_creator_list' ? 'active' : ''}`}
                                                                onClick={() => handleSubCreatorListLinkClick('/sub_creator_list')}
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#ff914d" d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3m-1-5v2a1 1 0 1 0 2 0v-2zM6 7v2h8V7zm0 4v2h8v-2zm0 4v2h5v-2z" /></svg>
                                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><title>Pay Out</title><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg> */}
                                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#ff914d" d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m4 10.54c0 1.06-.28 3.53-2.19 6.29L13 15l.94-1.88c-.62-.07-1.27-.12-1.94-.12s-1.32.05-1.94.12L11 15l-.81 4.83C8.28 17.07 8 14.6 8 13.54c-2.39.7-4 1.96-4 3.46v4h16v-4c0-1.5-1.6-2.76-4-3.46" /></svg> */}
                                                                Sub Creator List
                                                            </Link>
                                                        </li>
                                                    </>

                                                )
                                            }
                                            {
                                                updateRole && (
                                                    <li class="nav-item">
                                                        <Link to="/updateuser"
                                                            className={`nav-link has-arrow ${activeLink === '/updateuser' ? 'active' : ''}`}
                                                            onClick={() => handleUpdateLinkClick('/updateuser')}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff914d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#ff914d" d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m4 10.54c0 1.06-.28 3.53-2.19 6.29L13 15l.94-1.88c-.62-.07-1.27-.12-1.94-.12s-1.32.05-1.94.12L11 15l-.81 4.83C8.28 17.07 8 14.6 8 13.54c-2.39.7-4 1.96-4 3.46v4h16v-4c0-1.5-1.6-2.76-4-3.46" /></svg>
                                                            Update User
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                            {superAdmin && (
                                                <>
                                                    <li class="nav-item">
                                                        <Link to="/create_creator"
                                                            className={`nav-link has-arrow ${activeLink === '/create_creator' ? 'active' : ''}`}
                                                            onClick={() => handleCreUserLinkClick('/create_creator')}
                                                        >
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><title>Pay Out</title><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path stroke="#ff914d" d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m4 10.54c0 1.06-.28 3.53-2.19 6.29L13 15l.94-1.88c-.62-.07-1.27-.12-1.94-.12s-1.32.05-1.94.12L11 15l-.81 4.83C8.28 17.07 8 14.6 8 13.54c-2.39.7-4 1.96-4 3.46v4h16v-4c0-1.5-1.6-2.76-4-3.46" /></svg>
                                                            Create User
                                                        </Link>
                                                    </li>

                                                    <li class="nav-item">
                                                        <Link to="/userlist"
                                                            className={`nav-link has-arrow ${activeLink === '/userlist' ? 'active' : ''}`}
                                                            onClick={() => handleUseListLinkClick('/userlist')}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#ff914d" d="M152 80a8 8 0 0 1 8-8h88a8 8 0 0 1 0 16h-88a8 8 0 0 1-8-8m96 40h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m0 48h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-96.25 22a8 8 0 0 1-5.76 9.74a7.55 7.55 0 0 1-2 .26a8 8 0 0 1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09 18.05-56.25 42a8 8 0 0 1-15.5-4c5.59-21.71 21.84-39.29 42.46-48a48 48 0 1 1 58.58 0c20.63 8.71 36.88 26.29 42.47 48M80 136a32 32 0 1 0-32-32a32 32 0 0 0 32 32" /></svg>
                                                            User List
                                                        </Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link to="/download"
                                                            className={`nav-link has-arrow ${activeLink === '/download' ? 'active' : ''}`}
                                                            onClick={() => handleDownReportsLinkClick('/download')}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><g fill="none" stroke="#ff914d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697M18 14v4h4m-4-7V7a2 2 0 0 0-2-2h-2" /><path d="M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2m6 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-6-7h4m-4 4h3" /></g></svg>
                                                            Download Reports
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                            <li class="nav-item">
                                                <Link to="/manual_order"
                                                    className={`nav-link has-arrow ${activeLink === '/manual_order' ? 'active' : ''}`}
                                                    onClick={() => handlereportLinkClick('/manual_order')}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#ff914d" d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z" /></svg>
                                                    Report
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simplebar-placeholder" style={{ width: "auto", height: "1431px" }}>
                        </div>
                    </div>
                        <div class="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                            <div class="simplebar-scrollbar" style={{ width: "0px", display: "none", transform: "translate3d(0px, 0px, 0px)" }}>
                            </div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}>
                            <div class="simplebar-scrollbar" style={{ height: "101px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Sidebar
