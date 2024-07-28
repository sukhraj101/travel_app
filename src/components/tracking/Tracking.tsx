import { NavLink } from "react-router-dom"
import TrackingReview from "./components/review/TrackingReview"
import TrackingSchedual from "./components/schedual/TrackingSchedual"
import './Tracking.css'
const Tracking = () => {
  return (
    <>
      <div className="container-fuild tracking_navlink">
        <div className="container mt-4">
          <div className="d-flex gap-8">
            <div>
              <NavLink to={'/tracking'} className='tracking_menu_link fs-sm fw-bold text-black pb-3 d-block text-decoration-none'>
                Overview
              </NavLink>
            </div>
            <div>
              <NavLink to={'/tracking/scheduling'} className='tracking_menu_link fs-sm fw-bold text-black pb-3 d-block text-decoration-none opacity-50'>
                Scheduling
              </NavLink>
            </div>
            <div>
              <NavLink to={'/tracking/review'} className='tracking_menu_link fs-sm fw-bold opacity-50 text-black pb-3 d-block text-decoration-none'>
                Reviews
              </NavLink>
            </div>  
          </div>
        </div>
      </div>
      <div className="container_fluid tracking_details">
        <div className="container pt-8 pb-14">
          <div className="mb-20">
            <TrackingSchedual/>
          </div>
          <div>
            <TrackingReview/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tracking