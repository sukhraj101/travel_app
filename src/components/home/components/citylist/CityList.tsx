import './citylist.css'
const url = import.meta.env.VITE_PUBLIC_URL;

const CityList = () => {
    return (
        <>
            <div className="container-fluid mt-16 mb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className='citylist-heading text-center mb-3'>Cities in Saudi Arabia</div>
                            <div className='citylist-para text-center'>Now you can place your order to enjoy at home, at the office or wherever you like the most, a wide variety of our dishes,
                            in the same way as you can enjoy them in our restaurants.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="citylistslider" className="carousel slide carousel-dark">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 p-5">
                                                <div className="position-relative">
                                                    <img src={`${url}/images/home/city1.png`} className='w-100' alt="" />
                                                    <div className="city-name position-absolute top-50 start-50 translate-middle">Riyadh</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#citylistslider" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#citylistslider" data-bs-slide="next">
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

export default CityList