
const TourPackage = () => {
  return (
    <>
      <div className="card border-0 tour-package">
        <div className="card-body rounded-4">
          <div className="tour-package-card-headings mb-4">
            <h6 className="card-subtitle mb-1 fw-medium fs-6">from</h6>
            <h5 className="card-title mb-3 fs-3 fw-bold">SAR 200</h5>
            <h6 className="card-subtitle fs-sm fw-medium">per adult</h6>
          </div>
          <div className="tour-package-card-calendar mb-3">
            <input type="date" className="form-control" />
          </div>
          <div className="tour-package-card-calendar">
            <input type="time" className="form-control" />
          </div>
          <div className="adlt-quantity mt-8">
            <div className="d-flex justify-content-between">
              <div className="heading-adlt">
                <div className="heading-adlt-title fs-sm fw-medium">Adult (age13+)</div>
                <div className="heading-adlt-subtitle fw-bold fs-sm">200 SAR</div>
              </div>
              <div className="count-adlt">
                <div className="count-adlt-list d-flex align-items-center gap-3">
                  <i className="fa fa-minus-square-o fs-5" aria-hidden="true"></i>
                  <span className="count-adlt-number fw-semibold fs-sm">2</span>
                  <i className="fa fa-plus-square-o fs-5" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="adlt-quantity mt-4">
            <div className="d-flex justify-content-between">
              <div className="heading-adlt">
                <div className="heading-adlt-title fs-sm fw-medium">Child (age 4-12)</div>
                <div className="heading-adlt-subtitle fw-bold fs-sm">200 SAR</div>
              </div>
              <div className="count-adlt">
                <div className="count-adlt-list d-flex align-items-center gap-3">
                  <i className="fa fa-minus-square-o fs-5" aria-hidden="true"></i>
                  <span className="count-adlt-number fw-semibold fs-sm">2</span>
                  <i className="fa fa-plus-square-o fs-5" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="tour-package-cta mt-4 d-flex align-items-center justify-content-between gap-3">
            <button type="button" className="tour-package-btn">Add to Plan</button>
            <button type="button" className="tour-package-btn booknow">Book Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourPackage