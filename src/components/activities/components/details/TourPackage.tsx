import { useState } from "react";
import TourCalendar from "./TourCalendar";
const url = import.meta.env.VITE_PUBLIC_URL;


interface CounterState {
  adults: number;
  child: number;
}

const TourPackage = () => {

  
  const [counter,setCounter] = useState<CounterState>({
    adults:1,
    child:1
  });

  const updateCounter = (type: keyof CounterState, action: 'increment' | 'decrement') => {
    setCounter(prev => {
      const newValue = { ...prev };
      if (action === 'increment') {
        newValue[type] += 1;
      } else if (action === 'decrement' && newValue[type] > 1) {
        newValue[type] -= 1;
      }
      return newValue;
    });
  };


  return (
    <>
      <div className="card border-0 tour-package">
        <div className="card-body rounded-4 overflow-hidden">
          <div className="tour-package-card-headings mb-4">
            <h6 className="card-subtitle mb-1 fw-medium fs-6">from</h6>
            <h5 className="card-title mb-3 fs-3 fw-bold">SAR 200</h5>
            <h6 className="card-subtitle fs-sm fw-medium">per adult</h6>
          </div>
          <TourCalendar/>
          <div className="adlt-quantity mt-8">
            <div className="d-flex justify-content-between">
              <div className="heading-adlt">
                <div className="heading-adlt-title fs-sm fw-medium">Adult (age13+)</div>
                <div className="heading-adlt-subtitle fw-bold fs-sm">200 SAR</div>
              </div>
              <div className="count-adlt">
                <div className="count-adlt-list d-flex align-items-center gap-2">
                  <div className="package-counter" onClick={()=>updateCounter('adults','decrement')}>
                    <img src={`/images/details/decresing_icon.png`} alt="decreasing_icon" />
                  </div>
                  <span className="count-adlt-number fw-semibold fs-sm">{counter.adults}</span>
                  <div className="package-counter" onClick={()=>updateCounter('adults','increment')}>
                    <img src={`/images/details/incresing_icon.png`} alt="incresing_icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="adlt-quantity mt-4 mb-4">
            <div className="d-flex justify-content-between">
              <div className="heading-adlt">
                <div className="heading-adlt-title fs-sm fw-medium">Child (age 4-12)</div>
                <div className="heading-adlt-subtitle fw-bold fs-sm">200 SAR</div>
              </div>
              <div className="count-adlt">
                <div className="count-adlt-list d-flex align-items-center gap-2">
                  <div className="package-counter" onClick={()=>updateCounter('child','decrement')}>
                    <img src={`/images/details/decresing_icon.png`} alt="decreasing_icon" />
                  </div>
                  <span className="count-adlt-number fw-semibold fs-sm">{counter.child}</span>
                  <div className="package-counter" onClick={()=>updateCounter('child','increment')}>
                    <img src={`/images/details/incresing_icon.png`} alt="incresing_icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tour-package-cta position-relative pt-6 d-flex align-items-center justify-content-between gap-3">
            <button type="button" className="tour-package-btn">Add to Plan</button>
            <button type="button" className="tour-package-btn booknow">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card border-0 tour-package-location mt-6">
        <div className="card-body rounded-4 pb-8">
          <h2 className="fs-5 fw-semibold mb-2">Location</h2>
          <div className="d-flex align-items-center mb-2">
            <div className="tour-package-location-icon me-2">
              <img src={`/images/details/location_icon.png`} alt="location" />
            </div>
            <p className="tour-package-location-name m-0 fs-xs fw-medium">P4C4+JF6, Obhur Al-Shamaliyah, Jeddah</p>
          </div>
          <div className="google_map_embed">
            <iframe
              className="rounded-4"
              width="100%"
              height="184"
              style={{border:0}}
              loading="lazy"
              // allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571337597!2d72.71637411447857!3d19.082177513371683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1721235544054!5m2!1sen!2sin">
            </iframe>
          </div>
          <div className="tour-package-pickup-point mt-4">
            <h2 className="fs-5 fw-semibold mb-3">Pickup Point</h2>
            <div className="d-flex mb-4">
              <div className="tour-package-location-icon me-2">
                <img src={`/images/details/location_icon.png`} alt="location" />
              </div>
              <div>
                <p className="tour-package-location-name mb-1 fs-xs fw-medium">Hyaat Hotel, Jeddah</p>
                <p className="tour-package-location-name text-clamp m-0 fs-xs fw-medium text-black">
                  Pickup and drop-off services are available from hotels in the Jeddah...
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="tour-package-location-icon me-2">
                <img src={`/images/details/location_icon.png`} alt="location" />
              </div>
              <div>
                <p className="tour-package-location-name mb-1 fs-xs fw-medium">Railway Station, Jeddah</p>
                <p className="tour-package-location-name text-clamp m-0 fs-xs fw-medium text-black">
                  Pickup and drop-off services are available from hotels in the Jeddah...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourPackage