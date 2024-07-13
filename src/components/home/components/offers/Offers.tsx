import './offers.css'
const url = import.meta.env.VITE_PUBLIC_URL;

const Offers = () => {
  return (
    <>
        <div className="container-fluid offers-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 offers-content">
                        <div className='offers-subhead text-center mb-3'>BEST OFFERS FOR YOU</div>
                        <div className="offers-heading text-center mx-auto text-light">Get Exclusive <span>Offers</span> & Book your <span>Activities Now!</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid offers-cards">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-5">
                        <img src={`${url}/images/home/offers-card-1.png`} className='w-100 offer-card' alt="" />
                    </div>
                    <div className="col-md-4 p-5">
                        <img src={`${url}/images/home/offers-card-2.png`} className='w-100 offer-card' alt="" />
                    </div>
                    <div className="col-md-4 p-5">
                        <img src={`${url}/images/home/offers-card-3.png`} className='w-100 offer-card' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Offers