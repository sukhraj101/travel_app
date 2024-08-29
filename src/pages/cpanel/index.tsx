export default function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="rightContentWrapper">
              <div className="row mb-4">
                <div className="col">
                  <div className="bg-dark p-10 text-white text-center custom-card">
                    <div className="myIcon">
                      <i className="mdi mdi-account fs-3 mb-1 font-16" />
                    </div>
                    <div className="boardCont">
                      <h5 className="mb-0 mt-1">2540</h5>
                      <small className="font-light">Total Users</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="bg-dark p-10 text-white text-center custom-card">
                  <div className="myIcon">
                    <i className="mdi mdi-plus fs-3 font-16" />
                    </div>
                    <div className="boardCont">
                      <h5 className="mb-0 mt-1">120</h5>
                      <small className="font-light">New Users</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="bg-dark p-10 text-white text-center custom-card">
                  <div className="myIcon">
                    <i className="mdi mdi-tag fs-3 mb-1 font-16" />
                    </div>
                    <div className="boardCont">
                        <h5 className="mb-0 mt-1">9540</h5>
                        <small className="font-light">Total Orders</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="bg-dark p-10 text-white text-center custom-card">
                  <div className="myIcon">
                    <i className="mdi mdi-table fs-3 mb-1 font-16" />
                    </div>
                    <div className="boardCont">
                      <h5 className="mb-0 mt-1">100</h5>
                      <small className="font-light">Pending Orders</small>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="bg-dark p-10 text-white text-center custom-card">
                  <div className="myIcon">
                    <i className="mdi mdi-web fs-3 mb-1 font-16" />
                    </div>
                    <div className="boardCont">
                        <h5 className="mb-0 mt-1">8540</h5>
                        <small className="font-light">Online Orders</small>
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
