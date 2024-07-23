
const url = import.meta.env.VITE_PUBLIC_URL;

const TourCalendar = () => {
   
    return (
        <>
            <div className="tour-packge-calendar mb-8">
                <div className="tour-package-card-calendar py-3 px-4 mb-3 d-flex aling-items-center justify-content-between w-100 rounded-3">
                    <div className="selected-day fs-sm fw-medium text-black">Sunday · 8 Nov, 2022</div>
                    <div className="date-controllers">
                        <div className="date-controllers-icon d-flex mb-1">
                            <img src={`${url}/images/details/up_arrow.png`} alt="controllers" />
                        </div>
                        <div className="date-controllers-icon d-flex rotate-180">
                            <img src={`${url}/images/details/up_arrow.png`} alt="controllers" />
                        </div>
                    </div>
                </div>
                <div className="tour-package-card-calendar py-3 px-4 d-flex aling-items-center justify-content-between w-100 rounded-3">
                    <div className="selected-day fs-sm fw-medium text-black">10:30 AM</div>
                    <div className="date-controllers">
                        <div className="date-controllers-icon d-flex mb-1">
                            <img src={`${url}/images/details/up_arrow.png`} alt="controllers" />
                        </div>
                        <div className="date-controllers-icon d-flex rotate-180">
                            <img src={`${url}/images/details/up_arrow.png`} alt="controllers" />
                        </div>
                    </div>
                </div>
          </div>
        </>
    )
}

export default TourCalendar;