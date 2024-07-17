import React from 'react';
import './hero.css'; // Assuming you have custom styles in hero.css

const Hero = () => {
    return (
        <>
            <div className="container-fluid hero-bg">
                <div className="container">
                    <div className="row align-items-center vh-100">
                        <div className="col-md-12 text-center">
                            <div className="hero-text text-light inter-font">Explore Saudi Arabia</div>
                            <div className="hero-subtext text-light mb-20">Discover the country's hidden gems and breathtaking landscapes</div>
                            <div>
                                <div className='search-heading text-light'>What do you want to do? </div>
                                <div className='search-area'>
                                    <form>
                                        <div className="row g-3 align-items-center">
                                            <div className="col-md-3 border-end">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control border-0" id="location" placeholder=" " required />
                                                    <label htmlFor="location" className="form-label">Saudi Arabia</label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 border-end">
                                                <div className="form-floating">
                                                    <input type="date" className="form-control border-0" id="startDate" placeholder=" " required />
                                                    <label htmlFor="startDate" className="form-label">Start Date</label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 border-end">
                                                <div className="form-floating">
                                                    <input type="date" className="form-control border-0" id="endDate" placeholder=" " required />
                                                    <label htmlFor="endDate" className="form-label">End Date</label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 border-end">
                                                <div className="form-floating">
                                                    <input type="number" className="form-control border-0" id="adults" min="1" max="10" defaultValue="1" required />
                                                    <label htmlFor="adults" className="form-label">Adults</label>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-floating">
                                                    <input type="number" className="form-control border-0" id="children" min="0" max="10" defaultValue="0" required />
                                                    <label htmlFor="children" className="form-label">Children</label>
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <button type="submit" className="btn-search-area text-light"><i className='fa fa-search'></i></button>
                                            </div>
                                        </div>
                                    </form>
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
