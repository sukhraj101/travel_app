const url = import.meta.env.VITE_PUBLIC_URL;

const TrackingSchedual = () => {
    return (
        <>
            <h2 className="fs-3 fw-bold mb-6 tracking_section_heading">Scheduling</h2>
            <div className="row schedule-wrpr">
                <div className="col-md-6 tracking_schedule_left_content">
                    <div className="card border-0">
                        <div className="card-body rounded-4 shechdule_vetical_line position-relative tracking_schedule_left_card">
                            <div className="vertical_line_dots">
                                <div className="d-flex mb-6 gap-3 tracking_schedual_circle_box">
                                    <div className="col-md-1 tracking_schedual_circle">
                                        <img className="avatar avatar-lg" src={`${url}/images/tracking/location_icon.png`} alt="location_icon" />
                                    </div>
                                    <div className="col-md-11 tracking_schedule_accor_right">
                                        <div className="accordion" id="scheduleAcc1">
                                            <div className="accordion-item border-0">
                                                <p className="fw-semibold m-0 tracking_schedual_track_heading">You'll get picked up</p>
                                                <h2 className="accordion-header tracking_schedule_acco_heading" id="panelsStayOpen-headingOne">
                                                    <button className="accordion-button collapsed p-0 tracking_schedual_accor_btn " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                                        See departure details
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                                    <div className="accordion-body accodion_collapsing_desc">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-6 gap-3 tracking_schedual_circle_box">
                                    <div className="col-md-1 tracking_schedual_circle">
                                        <span className="schedule_halting_count fw-bold d-flex justify-content-center align-items-center">1</span>
                                        {/* <img className="avatar avatar-lg" src={`${url}/images/tracking/location_icon.png`} alt="location_icon" /> */}
                                    </div>
                                    <div className="col-md-11 tracking_schedule_accor_right">
                                        <div className="accordion" id="scheduleAcc2">
                                            <div className="accordion-item border-0">
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <p className="fw-semibold m-0 tracking_schedual_track_heading col-md-8">Al Khayma (OceanAir Travels Desert Camp)</p>
                                                    <span className="fs-sm opacity-75 fw-medium tracking_schedule_accor_hour">Stop 2 hrs.</span>
                                                </div>
                                                <h2 className="accordion-header tracking_schedule_acco_heading" id="panelsStayOpen-headingThree">
                                                    <button className="accordion-button collapsed p-0 tracking_schedual_accor_btn " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-headingThree">
                                                        See departure details
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                    <div className="accordion-body accodion_collapsing_desc">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-6 gap-3 tracking_schedual_circle_box">
                                    <div className="col-md-1 tracking_schedual_circle">
                                        <span className="schedule_halting_count fw-bold d-flex justify-content-center align-items-center">2</span>
                                        {/* <img className="avatar avatar-lg" src={`${url}/images/tracking/location_icon.png`} alt="location_icon" /> */}
                                    </div>
                                    <div className="col-md-11 tracking_schedule_accor_right">
                                        <div className="accordion" id="scheduleAcc2">
                                            <div className="accordion-item border-0">
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <p className="fw-semibold m-0 tracking_schedual_track_heading">Al Khayma (OceanAir Travels Desert Camp)</p>
                                                    <span className="fs-sm opacity-75 fw-medium tracking_schedule_accor_hour">Stop 2 hrs.</span>
                                                </div>
                                                <h2 className="accordion-header tracking_schedule_acco_heading" id="panelsStayOpen-headingThree">
                                                    <button className="accordion-button collapsed p-0 tracking_schedual_accor_btn " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-headingThree">
                                                        See departure details
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                    <div className="accordion-body accodion_collapsing_desc">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 tracking_schedual_circle_box">
                                    <div className="col-md-1 tracking_schedual_circle">
                                        <img className="avatar avatar-lg" src={`${url}/images/tracking/location_icon.png`} alt="location_icon" />
                                    </div>
                                    <div className="col-md-11 tracking_schedule_accor_right">
                                        <div className="accordion" id="scheduleAcc2">
                                            <div className="accordion-item border-0">
                                                <p className="fw-semibold m-0 tracking_schedual_track_heading">You'll get picked up</p>
                                                <h2 className="accordion-header tracking_schedule_acco_heading" id="panelsStayOpen-headingFour">
                                                    <button className="accordion-button collapsed p-0 tracking_schedual_accor_btn " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-headingFour">
                                                        See departure details
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                                    <div className="accordion-body accodion_collapsing_desc">
                                                        You'll return to the starting point
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <img src={`${url}/images/tracking/tracking_line.jpg`} alt="tracking_line" /> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 tracking_schedule_right_map">
                    <div className="schedule_tracking_map card border-0">
                        <div className="card-body rounded-4 p-0 ">
                            <iframe
                                className="rounded-4"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                // allowFullScreen
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571337597!2d72.71637411447857!3d19.082177513371683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1721235544054!5m2!1sen!2sin">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingSchedual