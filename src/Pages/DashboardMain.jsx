import React, {useState, useEffect} from 'react'
import { getDashboardStatistic } from '../utils/Constants';

const DashboardMain = () => {

  const [Statics, setStatics] = useState([]);
  console.log(Statics)

  useEffect(() => {
    const DashData = async () => {
      try {
        const dashResponse = await getDashboardStatistic();
        console.log(dashResponse)
        if (dashResponse?.status === 200)
          setStatics(dashResponse?.data);

      } catch (err) {
        console.log(err);
      }
    };
    DashData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div>
          <div class="card h-100">
            <div class="card-header d-flex justify-content-between align-items-center ">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h3 class="mb-0 ">Pay In Statistics</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row row-cols-xl-4 row-cols-1 row-cols-md-2 g-0">
                <div class="col">
                  <div class="card-body card-lift">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Total Orders</span>
                        <h2 class="mb-0 mt-2 fw-bold">{Statics?.total_orders}</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-warning-soft text-warning rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users icon-sm"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col border-start-md">
                  <div class="card-body border-top border-top-md-0 card-lift">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Total PayIn Operations</span>
                        <h2 class="mb-0 mt-2 fw-bold">{Statics?.total_payin_operations}</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-info-soft text-info rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text icon-sm"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>

                      </div>
                    </div>
                  </div>

                </div>
                <div class="col border-start-xl px-xl-0">
                  <div class="card-body border-top border-top-xl-0 card-lift">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Total PayIn</span>
                        <h2 class="mb-0 mt-2 fw-bold">{Statics?.total_payin}</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-danger-soft text-danger rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icon-sm"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>

                      </div>
                    </div>
                  </div>

                </div>
                <div class="col border-start-md">
                  <div class="card-body border-top border-top-xl-0 card-lift ">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Created</span>
                        <h2 class="mb-0 mt-2 fw-bold">{Statics?.total_orders}</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-success-soft text-success rounded-3">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon-sm"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon-sm"><path d="M4.01 6.01h16v2h-16zm2-4h12v2h-12zM20 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-9.7 10L7 16.76l1.4-1.4l1.9 1.9l5.3-5.3l1.4 1.4Z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card-body border-top border-top-xl-0 card-lift ">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Pending</span>
                        <h2 class="mb-0 mt-2 fw-bold">{Statics?.pending}</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-warning text-success rounded-3">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon-sm"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon-sm"><path d="M7 13.5q.625 0 1.063-.437T8.5 12q0-.625-.437-1.062T7 10.5q-.625 0-1.062.438T5.5 12q0 .625.438 1.063T7 13.5m5 0q.625 0 1.063-.437T13.5 12q0-.625-.437-1.062T12 10.5q-.625 0-1.062.438T10.5 12q0 .625.438 1.063T12 13.5m5 0q.625 0 1.063-.437T18.5 12q0-.625-.437-1.062T17 10.5q-.625 0-1.062.438T15.5 12q0 .625.438 1.063T17 13.5M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col border-start-md ">
                  <div class="card-body border-top border-top-xl-0 card-lift ">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Failed

                        </span>
                        <h2 class="mb-0 mt-2 fw-bold">{Statics?.failed}</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-danger-soft text-success rounded-3">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon-sm"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 48 48"><path fill="#d50000" d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18s18-8.1 18-18S33.9 6 24 6m0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14m0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='mt-5'>
          <div class="card h-100">
            <div class="card-header d-flex justify-content-between align-items-center ">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h3 class="mb-0 ">Pay Out Statistics</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row row-cols-xl-4 row-cols-1 row-cols-md-2 g-0">
                <div class="col">
                  <div class="card-body card-lift">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Total Orders</span>
                        <h2 class="mb-0 mt-2 fw-bold">0</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-warning-soft text-warning rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users icon-sm"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>

                      </div>
                    </div>
                  </div>

                </div>
                <div class="col border-start-md">
                  <div class="card-body border-top border-top-md-0 card-lift">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Total PayIn Operations</span>
                        <h2 class="mb-0 mt-2 fw-bold">0</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-info-soft text-info rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text icon-sm"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>

                      </div>
                    </div>
                  </div>

                </div>
                <div class="col border-start-xl px-xl-0">
                  <div class="card-body border-top border-top-xl-0 card-lift">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Total PayIn</span>
                        <h2 class="mb-0 mt-2 fw-bold">0</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-danger-soft text-danger rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icon-sm"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>

                      </div>
                    </div>
                  </div>

                </div>
                <div class="col border-start-md">
                  <div class="card-body border-top border-top-xl-0 card-lift ">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Created</span>
                        <h2 class="mb-0 mt-2 fw-bold">0</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-success-soft text-success rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon-sm"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card-body border-top border-top-xl-0 card-lift ">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Pending</span>
                        <h2 class="mb-0 mt-2 fw-bold">0</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-success-soft text-success rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon-sm"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col border-start-md ">
                  <div class="card-body border-top border-top-xl-0 card-lift ">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <span class="fw-semi-bold">Failed

                        </span>
                        <h2 class="mb-0 mt-2 fw-bold">0</h2>

                      </div>
                      <div class="icon-shape icon-lg bg-success-soft text-success rounded-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity icon-sm"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardMain
