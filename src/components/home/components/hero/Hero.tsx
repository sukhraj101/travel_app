import './hero.css'; // Assuming you have custom styles in hero.css
const url = import.meta.env.VITE_PUBLIC_URL
const Hero = () => {
    return (
        <>
            <div className="container-fluid hero-bg">
                <div className="container">
                    <div className="row align-items-center vh-100 vh-mob">
                        <div className="col-md-12 col-sm-12 text-center">
                            <div className="hero-text text-light inter-font">Explore Saudi Arabia</div>
                            <div className="hero-subtext text-light mb-10">Discover the country's hidden gems and breathtaking landscapes</div>
                            <div>
                                <div className='search-heading text-light'>What do you want to do? </div>
                                <div className="home-search-wrpr">
                                    <div className="home-filters-items d-flex position-relative">
                                        <div className="home-filters-items-list text-start filter-country-name">
                                            <label htmlFor="cityName" className='home-filters-items-lable fw-bold'>
                                                Saudi Arabia
                                            </label>
                                            <div>
                                                <input type="text" placeholder='Riyadh, Saudi Arabia' className='home-filter-cityName'/>
                                            </div>
                                        </div>
                                        <div className="home-filters-items-list ps-7 text-start position-relative filter-dates d-flex align-items-center">
                                            <div className="home-filter-search-icon me-3">
                                                <img src={`${url}/images/home/filter-icon.png`} alt="filter-icon" />
                                            </div>
                                            <div>
                                                <label htmlFor="cityName" className='home-filters-items-lable fw-bold'>
                                                    From
                                                </label>
                                                <div>
                                                    <input type="date" className='home-filter-cityName'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-filters-items-list ps-7 text-start position-relative filter-dates d-flex align-items-center">
                                            <div className="home-filter-search-icon me-3">
                                                <img src={`${url}/images/home/filter-icon2.png`} alt="filter-icon" />
                                            </div>
                                            <div>
                                                <label htmlFor="cityName" className='home-filters-items-lable fw-bold'>
                                                    To
                                                </label>
                                                <div>
                                                    <input type="date" placeholder='Riyadh, Saudi Arabia' className='home-filter-cityName'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-filters-items-list ps-7 text-start position-relative filter-adults d-flex align-items-center">
                                            <div className="home-filter-search-icon me-3">
                                                <img src={`${url}/images/home/filter-guest-icon.png`} alt="filter-icon" />
                                            </div>
                                            <div>
                                                <label htmlFor="cityName" className='home-filters-items-lable fw-bold'>
                                                    Guest
                                                </label>
                                                <div className='lh-1'>
                                                    <span className='home-filter-cityName'>2 Adults & 1 Child</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-filter-main-search position-absolute end-0 bottom-0 d-flex align-items-center justify-content-center text-white">
                                            <i className="fa fa-search" aria-hidden="true"></i>
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

export default Hero;
