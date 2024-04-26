import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDashboardStatistic } from '../utils/Constants';
import toast from 'react-hot-toast';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import { Icon } from '@iconify/react';

const DashboardMain = () => {

  const navigate = useNavigate();

  const [Statics, setStatics] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const token = localStorage.getItem("token");
  const [activeButton, setActiveButton] = useState("today");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleDateChange = (dates) => {
    setStartDate(formatDate(dates[0]));
    setEndDate(formatDate(dates[1]));
  };

  const formatDate = (date) => {
    if (!date) return null;

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const DashData = async () => {
      try {
        const dashResponse = await getDashboardStatistic(activeButton, startDate, endDate);
        if (dashResponse?.status === 200)
          setStatics(dashResponse?.data);

      } catch (err) {
        console.log(err);
      }
    };
    DashData();
  }, [activeButton, startDate, endDate]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div class=" d-flex justify-content-between align-items-center">
            <h4 class="mb-0">Pay In Statistics</h4>
            <div className="col-md-6 text-lg-end mb-3">
              <a
                href="#!"
                className={`btn btn-light me-1 ${activeButton === "today" ? "active" : ""
                  }`}
                style={
                  activeButton === "today"
                    ? {
                      background: "#1961A3",
                      border: "1px solid #DDDDEB",
                      color: "#fff",
                    }
                    : {}
                }
                onClick={() => handleButtonClick("today")}
              >
                Today
              </a>
              <a
                href="#!"
                className={`btn btn-light me-1 ${activeButton === "yesterday" ? "active" : ""
                  }`}
                style={
                  activeButton === "yesterday"
                    ? {
                      background: "#1961A3",
                      border: "1px solid #DDDDEB",
                      color: "#fff",
                    }
                    : {}
                }
                onClick={() => handleButtonClick("yesterday")}
              >
                Yesterday
              </a>
              <Flatpickr
                className={`btn btn-light me-1 ${activeButton === "custom" ? "active" : ""
                  }`}
                style={
                  activeButton === "custom"
                    ? {
                      background: "#1961A3",
                      border: "1px solid #DDDDEB",
                      color: "#fff",
                    }
                    : {}
                }
                placeholder="Select Date"
                value={[startDate, endDate]}
                options={{
                  mode: 'range',
                  dateFormat: 'Y-n-j', // Adjusted date format
                }}
                onClick={() => handleButtonClick("custom")}
                onChange={handleDateChange}

              />
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div class="row row-cols-1  row-cols-xl-4 row-cols-md-2 ">
          <div class="col mb-5">
            <div class=" card h-100 card-lift">
              <div class="boxEs card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h3 class="fw-bold  mb-0">{Statics?.total_orders}</h3>
                  <Icon icon="lets-icons:order" width="2rem" height="2rem"  style={{color: "#ff914d"}} />
                </div>
                <hr />
                <div class="mt-4 mb-3 d-flex align-items-center lh-1">
                  <span class="text-muted fw-semi-bold ">Total Orders</span>
                  {/* <span class="mt-1 ms-2 text-danger "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-xs"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>2.29%</span> */}
                </div>
                {/* <a href="#!" class="btn-link fw-semi-bold">View Orders</a> */}
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="boxEs card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h3 class="fw-bold  mb-0">{Statics?.total_payin_operations}</h3>
                  <Icon icon="icon-park-outline:reverse-operation-in" width="2rem" height="2rem"  style={{color: "#ff914d"}} />
                  {/* <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart text-info"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span> */}
                </div>
                <hr />
                <div class="mt-4 mb-3 d-flex align-items-center lh-1">
                  <span class="text-muted fw-semi-bold ">Total PayIn Operations</span>
                  {/* <span class="mt-1 ms-2 text-danger "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-xs"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>2.29%</span> */}
                </div>
                {/* <a href="#!" class="btn-link fw-semi-bold">View Pending Orders</a> */}
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="boxEs card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h3 class="fw-bold  mb-0">{Statics?.total_payin}</h3>
                  <Icon icon="tdesign:money" width="2rem" height="2rem"  style={{color: "#ff914d"}} />

                  {/* <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart text-info"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span> */}
                </div>
                <hr />
                <div class="mt-4 mb-3 d-flex align-items-center lh-1">
                  <span class="text-muted fw-semi-bold ">Total PayIn</span>
                  {/* <span class="mt-1 ms-2 text-danger "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-xs"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>2.29%</span> */}
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="boxEs card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h3 class="fw-bold  mb-0">{Statics?.total_orders}</h3>
                  <Icon icon="eos-icons:subscriptions-created-outlined" width="2rem" height="2rem"  style={{color: "#ff914d"}} />
                  {/* <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart text-info"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span> */}
                </div>
                <hr />
                <div class="mt-4 mb-3 d-flex align-items-center lh-1">
                  <span class="text-muted fw-semi-bold ">Created</span>
                  {/* <span class="mt-1 ms-2 text-danger "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-xs"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>2.29%</span> */}
                </div>
                {/* <a href="#!" class="btn-link fw-semi-bold">View Pending Amount</a> */}
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="boxEs card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h3 class="fw-bold  mb-0">{Statics?.pending}</h3>
                  <Icon icon="ic:outline-pending-actions" width="2rem" height="2rem"  style={{color: "#ff914d"}} />
                  {/* <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart text-info"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span> */}
                </div>
                <hr />
                <div class="mt-4 mb-3 d-flex align-items-center lh-1">
                  <span class="text-muted fw-semi-bold ">Pending</span>
                  {/* <span class="mt-1 ms-2 text-danger "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-xs"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>2.29%</span> */}
                </div>
                {/* <a href="#!" class="btn-link fw-semi-bold">View Approved Amount</a> */}
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="boxEs card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h3 class="fw-bold  mb-0">{Statics?.failed}</h3>
                  <Icon icon="icon-park-outline:file-failed" width="2rem" height="2rem"  style={{color: "#ff914d"}} />
                  {/* <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart text-info"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span> */}
                </div>
                <hr />
                <div class="mt-4 mb-3 d-flex align-items-center lh-1">
                  <span class="text-muted fw-semi-bold ">Failed</span>
                  {/* <span class="mt-1 ms-2 text-danger "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-xs"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>2.29%</span> */}
                </div>
                {/* <a href="#!" class="btn-link fw-semi-bold">View Approved Amount</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardMain
