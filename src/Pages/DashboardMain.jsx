import React from 'react'

const DashboardMain = () => {
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
