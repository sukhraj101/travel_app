import React from "react";

const url = import.meta.env.VITE_PUBLIC_URL;

const TrackingReview = () => {
  return (
    <>
        <div className="tracking_review_container">
            <h2 className="fs-3 fw-bold mb-6 tracking_section_heading">Reviews</h2>
            <div className="row">
                <div className="col-md-5 px-10 px-md-10 mb-10 mb-md-0">
                    <div className="tracking_review_wrpr">
                        <div className="d-flex align-items-center gap-5 mb-6">
                            <h2 className="tracking_review_rating_txt text-black fw-bold m-0">5.0</h2>
                            <span className="text-black fs-xs">50,121 reviews</span>
                        </div>
                        <div className="tracking_review_star d-flex gap-3 align-items-center mb-2">
                            <div className="tracking_review_star_icon">
                                <div className="tracking_review_star_list d-flex gap-1 justify-content-end">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                            </div>
                            <div className="tracking_review_star_progress">
                                <div className="tracking_review_star_progress_bar position-relative w-100">
                                    <span className="position-absolute" style={{ '--progress': '100%' } as React.CSSProperties}></span>
                                </div>
                            </div>
                        </div>
                        <div className="tracking_review_star d-flex gap-3 align-items-center mb-2">
                            <div className="tracking_review_star_icon">
                                <div className="tracking_review_star_list d-flex gap-1 justify-content-end">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                            </div>
                            <div className="tracking_review_star_progress">
                                <div className="tracking_review_star_progress_bar position-relative w-100">
                                    <span className="position-absolute" style={{ '--progress': '80%' } as React.CSSProperties}></span>
                                </div>
                            </div>
                        </div>
                        <div className="tracking_review_star d-flex gap-3 align-items-center mb-2">
                            <div className="tracking_review_star_icon">
                                <div className="tracking_review_star_list d-flex gap-1 justify-content-end">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                            </div>
                            <div className="tracking_review_star_progress">
                                <div className="tracking_review_star_progress_bar position-relative w-100">
                                    <span className="position-absolute" style={{ '--progress': '50%' } as React.CSSProperties}></span>
                                </div>
                            </div>
                        </div>
                        <div className="tracking_review_star d-flex gap-3 align-items-center mb-2">
                            <div className="tracking_review_star_icon">
                                <div className="tracking_review_star_list d-flex gap-1 justify-content-end">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                            </div>
                            <div className="tracking_review_star_progress">
                                <div className="tracking_review_star_progress_bar position-relative w-100">
                                    <span className="position-absolute" style={{ '--progress': '90%' } as React.CSSProperties}></span>
                                </div>
                            </div>
                        </div>
                        <div className="tracking_review_star d-flex gap-3 align-items-center mb-2">
                            <div className="tracking_review_star_icon">
                                <div className="tracking_review_star_list d-flex gap-1 justify-content-end">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                            </div>
                            <div className="tracking_review_star_progress">
                                <div className="tracking_review_star_progress_bar position-relative w-100">
                                    <span className="position-absolute" style={{ '--progress': '5%' } as React.CSSProperties}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 px-0 px-md-10">
                    <div className="card border-0">
                        <div className="card-body p-8 rounded-4 tracking_review_card_box">
                            <div className="d-flex align-items-center justify-content-between mb-10">
                                <p className="fw-semibold m-0 tracking_rating_txt ">50,121 reviews</p>
                                <div className="tracking_rating_search_box rounded-4 position-relative">
                                    <input type="text" placeholder="Search for destination or activities..." className="tracking_rating_search_input fs-sm" />
                                    <img src={`${url}/images/common/search_icon.jpg`} alt="search_icon" className="search_icon" />
                                </div>
                            </div>
                            <div className="tracking_rating_user_content">
                                <div className="d-flex gap-4 mb-4">
                                    <div className="tracking_rating_user_profile">
                                        <img src={`${url}/images/tracking/user_profile.png`} alt="user_rating" className="avatar" />
                                    </div>
                                    <div className="tracking_rating_user_detail">
                                        <p className="fs-sm text-black fw-semibold m-0">Muhammad Husain</p>
                                        <span className="text-black fs-xs opacity-50">4 days ago</span>
                                    </div>
                                </div>
                                <div className="tracking_review_star_list d-flex gap-1 mb-4">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                                <div className="tracking_review_user_feedback pb-5">
                                    <h2 className="fw-semibold text-black fs-6 mb-2">Camel Riding</h2>
                                    <p className="fs-xs opacity-75 lh-base">
                                        We had an amazing time Sameer was very friendly and looking for us the whole time everything went smooth the food was good the sweets and shisha!
                                    </p>
                                </div>
                            </div>
                            <div className="tracking_rating_user_content">
                                <div className="d-flex gap-4 mb-4">
                                    <div className="tracking_rating_user_profile">
                                        <img src={`${url}/images/tracking/user_profile.png`} alt="user_rating" className="avatar" />
                                    </div>
                                    <div className="tracking_rating_user_detail">
                                        <p className="fs-sm text-black fw-semibold m-0">Muhammad Husain</p>
                                        <span className="text-black fs-xs opacity-50">4 days ago</span>
                                    </div>
                                </div>
                                <div className="tracking_review_star_list d-flex gap-1 mb-4">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                                <div className="tracking_review_user_feedback pb-5">
                                    <h2 className="fw-semibold text-black fs-6 mb-2">Camel Riding</h2>
                                    <p className="fs-xs opacity-75 lh-base">
                                        We had an amazing time Sameer was very friendly and looking for us the whole time everything went smooth the food was good the sweets and shisha!
                                    </p>
                                </div>
                            </div>
                            <div className="tracking_rating_user_content">
                                <div className="d-flex gap-4 mb-4">
                                    <div className="tracking_rating_user_profile">
                                        <img src={`${url}/images/tracking/user_profile.png`} alt="user_rating" className="avatar" />
                                    </div>
                                    <div className="tracking_rating_user_detail">
                                        <p className="fs-sm text-black fw-semibold m-0">Muhammad Husain</p>
                                        <span className="text-black fs-xs opacity-50">4 days ago</span>
                                    </div>
                                </div>
                                <div className="tracking_review_star_list d-flex gap-1 mb-4">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                                <div className="tracking_review_user_feedback pb-5">
                                    <h2 className="fw-semibold text-black fs-6 mb-2">Camel Riding</h2>
                                    <p className="fs-xs opacity-75 lh-base">
                                        We had an amazing time Sameer was very friendly and looking for us the whole time everything went smooth the food was good the sweets and shisha!
                                    </p>
                                </div>
                            </div>
                            <div className="tracking_rating_user_content">
                                <div className="d-flex gap-4 mb-4">
                                    <div className="tracking_rating_user_profile">
                                        <img src={`${url}/images/tracking/user_profile.png`} alt="user_rating" className="avatar" />
                                    </div>
                                    <div className="tracking_rating_user_detail">
                                        <p className="fs-sm text-black fw-semibold m-0">Muhammad Husain</p>
                                        <span className="text-black fs-xs opacity-50">4 days ago</span>
                                    </div>
                                </div>
                                <div className="tracking_review_star_list d-flex gap-1 mb-4">
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                    <img src={`${url}/images/tracking/start_rating.jpg`} alt="start_rating" />
                                </div>
                                <div className="tracking_review_user_feedback pb-5">
                                    <h2 className="fw-semibold text-black fs-6 mb-2">Camel Riding</h2>
                                    <p className="fs-xs opacity-75 lh-base">
                                        We had an amazing time Sameer was very friendly and looking for us the whole time everything went smooth the food was good the sweets and shisha!
                                    </p>
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

export default TrackingReview