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
    const [isEmployeesCollapsed, setIsEmployeesCollapsed] = useState(true);
    const [isAttendancesCollapsed, setIsAttendancesCollapsed] = useState(true);
    const [isLeaveManagementCollapsed, setIsLeaveManagementCollapsed] = useState(true);
    const [isAppraisalsCollapsed, setIsAppraisalsCollapsed] = useState(true);
    const [isReimbursementCollapsed, setIsReimbursementCollapsed] = useState(true);
    const [isPayrollManagementCollapsed, setIsPayrollManagementCollapsed] = useState(true);
    const [isMyDocumentsCollapsed, setIsMyDocumentsCollapsed] = useState(true);
    const [isAnnouncementCollapsed, setIsAnnouncementCollapsed] = useState(true);

    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
    const handleToggleMenu = () => setIsMenuCollapsed(!isMenuCollapsed);


    useEffect(() => {
        const storedActiveLink = localStorage.getItem('activeLink');
        if (storedActiveLink) {
            setActiveLink(storedActiveLink);
        }

        const storedIsMenuCollapsed = localStorage.getItem('isMenuCollapsed');
        if (storedIsMenuCollapsed) {
            setIsMenuCollapsed(storedIsMenuCollapsed === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
        localStorage.setItem('isMenuCollapsed', isMenuCollapsed);
    }, [activeLink, isEmployeesCollapsed, isAttendancesCollapsed, isLeaveManagementCollapsed, isAppraisalsCollapsed, isReimbursementCollapsed, isPayrollManagementCollapsed, isMyDocumentsCollapsed, isAnnouncementCollapsed]);

    const handleToggleEmployeesMenu = () => {
        setIsEmployeesCollapsed(!isEmployeesCollapsed);
    };

    const handleToggleAttendancesMenu = () => {
        setIsAttendancesCollapsed(!isAttendancesCollapsed);
    };

    const handleToggleLeaveManagement = () => {
        setIsLeaveManagementCollapsed(!isLeaveManagementCollapsed);
    };

    const handleToggleAppraisals = () => {
        setIsAppraisalsCollapsed(!isAppraisalsCollapsed);
    };

    const handleToggleReimbursement = () => {
        setIsReimbursementCollapsed(!isReimbursementCollapsed);
    };

    const handleTogglePayrollManagement = () => {
        setIsPayrollManagementCollapsed(!isPayrollManagementCollapsed);
    };

    const handleToggleMyDocuments = () => {
        setIsMyDocumentsCollapsed(!isMyDocumentsCollapsed);
    };

    const handleToggleAnnouncement = () => {
        setIsAnnouncementCollapsed(!isAnnouncementCollapsed);
    };

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
                                        <img src="/logo.png" alt="" width={250}/>
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home nav-icon me-2 icon-xxs"><title>Pay Out</title><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
                                                    Manual Order
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
