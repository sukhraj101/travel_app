import "./cpanel.css"

export default function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row mb-4">
              <div className="col">
                <div className="bg-dark p-10 text-white text-center">
                  <i className="mdi mdi-account fs-3 mb-1 font-16" />
                  <h5 className="mb-0 mt-1">2540</h5>
                  <small className="font-light">Total Users</small>
                </div>
              </div>
              <div className="col">
                <div className="bg-dark p-10 text-white text-center">
                  <i className="mdi mdi-plus fs-3 font-16" />
                  <h5 className="mb-0 mt-1">120</h5>
                  <small className="font-light">New Users</small>
                </div>
              </div>
              <div className="col">
                <div className="bg-dark p-10 text-white text-center">
                  <i className="mdi mdi-tag fs-3 mb-1 font-16" />
                  <h5 className="mb-0 mt-1">9540</h5>
                  <small className="font-light">Total Orders</small>
                </div>
              </div>
              <div className="col">
                <div className="bg-dark p-10 text-white text-center">
                  <i className="mdi mdi-table fs-3 mb-1 font-16" />
                  <h5 className="mb-0 mt-1">100</h5>
                  <small className="font-light">Pending Orders</small>
                </div>
              </div>
              <div className="col">
                <div className="bg-dark p-10 text-white text-center">
                  <i className="mdi mdi-web fs-3 mb-1 font-16" />
                  <h5 className="mb-0 mt-1">8540</h5>
                  <small className="font-light">Online Orders</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-cyan text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-view-dashboard" />
                </h1>
                <h6 className="text-white">Dashboard</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-warning text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-collage" />
                </h1>
                <h6 className="text-white">Widgets</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-danger text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-border-outside" />
                </h1>
                <h6 className="text-white">Tables</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-info text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-relative-scale" />
                </h1>
                <h6 className="text-white">Buttons</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-cyan text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-pencil" />
                </h1>
                <h6 className="text-white">Elements</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-success text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-calendar-check" />
                </h1>
                <h6 className="text-white">Calnedar</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Latest Reviews</h4>
              </div>
              <div className="comment-widgets scrollable">
                <div className="d-flex flex-row comment-row mt-0">
                  <div className="p-2">
                    <img
                      src="./../../../public/admin/assets/images/users/1.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">James Anderson</h6>
                    <span className="mb-3 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-end">April 14, 2021</span>
                      <button
                        type="button"
                        className="btn btn-cyan btn-sm text-white"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm text-white"
                      >
                        Publish
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="./../../../public/admin/assets/images/users/4.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text active w-100">
                    <h6 className="font-medium">Michael Jorden</h6>
                    <span className="mb-3 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-end">May 10, 2021</span>
                      <button
                        type="button"
                        className="btn btn-cyan btn-sm text-white"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm text-white"
                      >
                        Publish
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row comment-row">
                  <div className="p-2">
                    <img
                      src="./../../../public/admin/assets/images/users/5.jpg"
                      alt="user"
                      width={50}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="comment-text w-100">
                    <h6 className="font-medium">Johnathan Doeting</h6>
                    <span className="mb-3 d-block">
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry.
                    </span>
                    <div className="comment-footer">
                      <span className="text-muted float-end">August 1, 2021</span>
                      <button
                        type="button"
                        className="btn btn-cyan btn-sm text-white"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm text-white"
                      >
                        Publish
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">Reservation Stats</h4>
                <div className="mt-3">
                  <div className="d-flex no-block align-items-center">
                    <span>81% Clicks</span>
                    <div className="ms-auto">
                      <span>125</span>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: "81%" }}
                      aria-valuenow={10}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div>
                  <div className="d-flex no-block align-items-center mt-4">
                    <span>72% Uniquie Clicks</span>
                    <div className="ms-auto">
                      <span>120</span>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-success"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div>
                  <div className="d-flex no-block align-items-center mt-4">
                    <span>53% Impressions</span>
                    <div className="ms-auto">
                      <span>785</span>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{ width: "53%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div>
                  <div className="d-flex no-block align-items-center mt-4">
                    <span>3% Online Users</span>
                    <div className="ms-auto">
                      <span>8</span>
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped bg-danger"
                      role="progressbar"
                      style={{ width: "3%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">News Updates</h4>
              </div>
              <ul className="list-style-none">
                <li className="d-flex no-block card-body">
                  <i className="mdi mdi-check-circle fs-4 w-30px mt-1" />
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </a>
                    <span className="text-muted">
                      dolor sit amet, consectetur adipiscing
                    </span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">20</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex no-block card-body border-top">
                  <i className="mdi mdi-gift fs-4 w-30px mt-1" />
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">
                      Congratulation Maruti, Happy Birthday
                    </a>
                    <span className="text-muted">
                      many many happy returns of the day
                    </span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">11</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex no-block card-body border-top">
                  <i className="mdi mdi-plus fs-4 w-30px mt-1" />
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">
                      Maruti is a Responsive Admin theme
                    </a>
                    <span className="text-muted">
                      But already everything was solved. It will ...
                    </span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">19</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex no-block card-body border-top">
                  <i className="mdi mdi-leaf fs-4 w-30px mt-1" />
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">
                      Envato approved Maruti Admin template
                    </a>
                    <span className="text-muted">
                      i am very happy to approved by TF
                    </span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">20</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex no-block card-body border-top">
                  <i className="mdi mdi-comment-question-outline fs-4 w-30px mt-1" />
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">
                      I am alwayse here if you have any question
                    </a>
                    <span className="text-muted">
                      we glad that you choose our template
                    </span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">15</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
