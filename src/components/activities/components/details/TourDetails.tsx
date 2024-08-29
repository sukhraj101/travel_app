// const url = import.meta.env.VITE_PUBLIC_URL

const TourDetails = ({
    product
}) => {
  return (
    <>
        <div className="card border-0 mb-6">
            <div className="card-body rounded-4 overflow-hidden position-relative">
                <h5 className="card-title fw-bold text-black lh-sm max-w-xs">
                    {product?.name}
                </h5>
                <div className="mb-3">
                    <img src={`/images/details/sm_logo.png`} alt="Voyage Tours" />
                </div>
                <p className="card-text fs-sm lh-md fw-medium max-w-xl mb-6">
                    {product?.description}
                </p>
                <div className="tour_details_icons row">
                    <div className="col-4">
                        <div className="d-flex align-items-center tour_details_icons_list">
                            <img src={`/images/details/icon_1.png`} alt="icon_1" className="me"/>
                            <span className="fw-medium">Instant Confirmation</span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex align-items-center tour_details_icons_list">
                            <img src={`/images/details/icon_1.png`} alt="icon_1" className="me"/>
                            <span className="fw-medium">Refund Guarantee</span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex align-items-center tour_details_icons_list">
                            <img src={`/images/details/icon_1.png`} alt="icon_1" className="me"/>
                            <span className="fw-medium">Instant Cashback</span>
                        </div>
                    </div>
                </div>
                <div className="tour_details_trip_logo position-absolute top-50">
                    <img src={`/images/details/trip_logo.svg`} alt="trip logo" />
                </div>
                <div className="tour_details_bg position-absolute">
                    <img src={`/images/details/tour_bg.svg`} alt="details_bg" className=""/>
                </div>
            </div>
        </div>
        <div className="card border-0 mb-6">
            <div className="card-body rounded-4">
                <div className="d-flex align-items-center mb-4">
                    <div className="tour_details_user_icons">
                        <img src={`/images/details/user_age_icon.png`} alt="user_age_icon" />
                        <span className="fw-medium ms-4">Ages: 14-65, max of 10 per group</span>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="tour_details_user_icons">
                        <img src={`/images/details/user_time_icon.png`} alt="user_time_icon" />
                        <span className="fw-medium ms-4">Sun-Sat 09:00 to 12:00</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="card border-0 mb-6">
            <div className="card-body rounded-4">
                <h2 className="fs-5 m-2 fw-semibold">Highlights</h2>
                <ul className="list-group border-0">
                    <li className="list-group-item fw-medium">View Dubai’s landmarks from the water on a Jet Ski ride</li>
                    <li className="list-group-item fw-medium">Combine the fun of a Jet Ski with unobstructed views of the city</li>
                    <li className="list-group-item fw-medium">Zip over the water to see and take photos of the Burj Al Arab, JBR, and more</li>
                    <li className="list-group-item fw-medium">Price per 2-seater Jet Ski for value; choice of departures for flexibility</li>
                </ul>
            </div>
        </div>
        <div className="card border-0 mb-6">
            <div className="card-body rounded-4">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="fs-5 m-2 fw-semibold">What's Included</h2>
                        <ul className="list-group border-0">
                            <li className="list-group-item fw-medium">Certified Jetski Instructor</li>
                            <li className="list-group-item fw-medium">Safety Equipment</li>
                            <li className="list-group-item fw-medium">Gloves available</li>
                            <li className="list-group-item fw-medium">Bottle of water</li>
                            <li className="list-group-item fw-medium">Free pictures and videos of the tour</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h2 className="fs-5 m-2 fw-semibold">What's not included</h2>
                        <ul className="list-group border-0">
                            <li className="list-group-item fw-medium">Swimwear</li>
                            <li className="list-group-item fw-medium">Towel</li>
                            <li className="list-group-item fw-medium">Sun Glasses</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion" id="accordionExample">
            <div className="card-body p-6 mb-6 rounded-4">
                <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button fs-5 fw-semibold p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-expanded="false" aria-controls="collapseOne">
                            What to expect
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" 
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body pb-0 fw-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus.
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body p-6 mb-6 rounded-4">
                <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button fs-5 fw-semibold collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body pb-0 fw-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus..
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body p-6 mb-6 rounded-4">
                <div className="accordion-item border-0">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button fs-5 fw-semibold collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body pb-0 fw-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus..
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TourDetails