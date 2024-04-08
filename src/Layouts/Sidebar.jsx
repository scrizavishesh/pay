import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("data"));
        setRole(profile[0].is_superadmin);
        setUpdateRole(profile[0].is_agent);
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



    const handleNavLinkClick = (link) => {
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
                                        <div className='mb-5'>
                                            <img src="/logo.png" alt="" width={250} />
                                        </div>
                                        {/* <!-- Navbar nav --> */}
                                        <ul class="navbar-nav flex-column" id="sideNavbar">
                                            <li class="nav-item">
                                                <Link to="/" class="nav-link has-arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/manual_order" class="nav-link has-arrow">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><title>Pay Out</title><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path  d="m17.371 19.827l2.84-2.796l-.626-.627l-2.214 2.183l-.956-.975l-.627.632zM6.77 8.73h10.462v-1H6.769zM18 22.115q-1.671 0-2.836-1.164T14 18.115t1.164-2.835T18 14.115t2.836 1.165T22 18.115t-1.164 2.836T18 22.115M4 20.77V4h16v7.56q-.892-.293-1.828-.301t-1.845.241H6.769v1h7.312q-.752.521-1.326 1.223t-.945 1.546H6.77v1h4.709q-.108.404-.168.815t-.061.858q0 .685.143 1.359q.144.674.43 1.299l-.035.035l-1.134-.827l-1.346.961l-1.346-.961l-1.347.961l-1.346-.961z"/></svg>
                                                    Manual Order
                                                </Link>
                                            </li>
                                            {
                                                role && (
                                                    <li class="nav-item">
                                                        <Link to="/createuser" class="nav-link has-arrow">
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><title>Pay Out</title><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg> */}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#0a0a0a" d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m4 10.54c0 1.06-.28 3.53-2.19 6.29L13 15l.94-1.88c-.62-.07-1.27-.12-1.94-.12s-1.32.05-1.94.12L11 15l-.81 4.83C8.28 17.07 8 14.6 8 13.54c-2.39.7-4 1.96-4 3.46v4h16v-4c0-1.5-1.6-2.76-4-3.46"/></svg>
                                                            Create User
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                            {
                                                updateRole && (
                                                    <li class="nav-item">
                                                        <Link to="/updateuser" class="nav-link has-arrow">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><path fill="#0a0a0a" d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m4 10.54c0 1.06-.28 3.53-2.19 6.29L13 15l.94-1.88c-.62-.07-1.27-.12-1.94-.12s-1.32.05-1.94.12L11 15l-.81 4.83C8.28 17.07 8 14.6 8 13.54c-2.39.7-4 1.96-4 3.46v4h16v-4c0-1.5-1.6-2.76-4-3.46"/></svg>
                                                            Update User
                                                        </Link>
                                                    </li>
                                                )
                                            }
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
