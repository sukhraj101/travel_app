import './bestactivities.css'
const url = import.meta.env.VITE_PUBLIC_URL;

const BestActivities = () => {
    return (
        <>
            <div className="container-fluid mt-16 mb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className='bestactivities-heading text-center mb-3'>Best Activities</div>
                            <div className='bestactivities-para text-center'>Now you can place your order to enjoy at home, at the office or wherever you like the most, a wide variety of our dishes,
                                in the same way as you can enjoy them in our restaurants.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="activitiesSlider" className="carousel slide carousel-dark" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 p-5">
                                                <div className="card position-relative rounded-4 activity-cards">
                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                    </button>
                                                    <img src={`${url}/images/home/activities.png`} className="card-img-top rounded-top-4" alt="green iguana" />
                                                    <div className="card-body p-3">
                                                        <div className="d-flex align-items-start">
                                                            <div className="activity-name">9 Days Riyadh, Edge of the World & Jeddah Tour</div>
                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="tour-company">
                                                                <div className="company-name mb-3">Voyage Tours</div>
                                                                <div className="company-feature">Free cancellation available</div>
                                                            </div>
                                                            <div className="price-sec">
                                                                <div className="price-n-btn mb-1"><span className='striked-price me-3'>$88</span><span className='final-price me-3'>$88</span><button className="btn-book">Book</button></div>
                                                                <div className="per-head">per adult</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#activitiesSlider" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#activitiesSlider" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestActivities