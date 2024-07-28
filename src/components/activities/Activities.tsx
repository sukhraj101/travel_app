import Breadcrum from "./components/breadcrums/Breadcrum";
import TourDetails from "./components/details/TourDetails";
import TourPackage from "./components/details/TourPackage";
import Gallery from "./components/gallery/Gallery";
import './activities.css'

const Activities = () => {
  return (
    <>
        <div className="container-fluid activity_tour_details">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrum/>
                    </div>
                </div>
                <div className="row mb-6">
                    <Gallery/>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <TourDetails/>
                    </div>
                    <div className="col-md-4">
                        <TourPackage/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Activities