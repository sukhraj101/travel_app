import './hero.css';

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
                                <div className="input-group">
                                    <input type="text" aria-label="First name" className="form-control" />
                                    <input type="text" aria-label="Last name" className="form-control" />
                                    <input type="text" aria-label="Last name" className="form-control" />
                                    <input type="text" aria-label="Last name" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero