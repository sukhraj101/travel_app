import './exploremenu.css'
const url = import.meta.env.VITE_PUBLIC_URL;

const ExploreMenu = () => {
  return (
    <>
        <div className="container-fluid mt-10 mb-10">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className='explore-heading text-center mb-3'>Explore Menu</div>
                        <div className='explore-para text-center'>Now you can place your order to enjoy at home, at the office or wherever you like the most, a wide variety of our dishes,
                        in the same way as you can enjoy them in our restaurants.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="exploreSlider" className="carousel slide carousel-dark" >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-3 ">
                                                <img src={`${url}/images/home/explore1.png`} className='w-100 h-100' alt="" />
                                            </div>
                                            <div className="col-md-9">
                                                <div className="row ">
                                                    <div className="col-md-6">
                                                        <img src={`${url}/images/home/explore2.png`} className='w-100' alt="" />
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <img src={`${url}/images/home/explore3.png`} className='w-100' alt="" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mt-5">
                                                        <img src={`${url}/images/home/explore4.png`} className='w-100' alt="" />
                                                    </div>
                                                    <div className="col-md-6 mt-5">
                                                        <img src={`${url}/images/home/explore5.png`} className='w-100' alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-3 ">
                                                <img src={`${url}/images/home/explore1.png`} className='w-100 h-100' alt="" />
                                            </div>
                                            <div className="col-md-9">
                                                <div className="row ">
                                                    <div className="col-md-6">
                                                        <img src={`${url}/images/home/explore2.png`} className='w-100' alt="" />
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <img src={`${url}/images/home/explore3.png`} className='w-100' alt="" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mt-5">
                                                        <img src={`${url}/images/home/explore4.png`} className='w-100' alt="" />
                                                    </div>
                                                    <div className="col-md-6 mt-5">
                                                        <img src={`${url}/images/home/explore5.png`} className='w-100' alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-3 ">
                                                <img src={`${url}/images/home/explore1.png`} className='w-100 h-100' alt="" />
                                            </div>
                                            <div className="col-md-9">
                                                <div className="row ">
                                                    <div className="col-md-6">
                                                        <img src={`${url}/images/home/explore2.png`} className='w-100' alt="" />
                                                    </div>
                                                    <div className="col-md-6  ">
                                                        <img src={`${url}/images/home/explore3.png`} className='w-100' alt="" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mt-5">
                                                        <img src={`${url}/images/home/explore4.png`} className='w-100' alt="" />
                                                    </div>
                                                    <div className="col-md-6 mt-5">
                                                        <img src={`${url}/images/home/explore5.png`} className='w-100' alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sliders-controllers d-flex justify-content-between position-absolute pe-none top-50 start-50">
                                    <button className="carousel-control-prev position-static w-auto pe-auto" type="button" data-bs-target="#exploreSlider" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    </button>
                                    <button className="carousel-control-next position-static w-auto pe-auto" type="button" data-bs-target="#exploreSlider" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ExploreMenu