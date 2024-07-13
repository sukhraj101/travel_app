import Breadcrum from "./components/breadcrums/Breadcrum"
import Gallery from "./components/gallery/Gallery"

const Activities = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrum/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <Gallery/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Activities