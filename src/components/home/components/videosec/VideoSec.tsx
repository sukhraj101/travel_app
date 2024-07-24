import './videosec.css'
const url = import.meta.env.VITE_PUBLIC_URL;

const VideoSec = () => {
  return (
    <>
        <div className="container-fluid video-sec-bg my-20 py-20">
            <div className="container">
                <div className="row py-10">
                    <div className="col-md-7 text-center mx-auto">
                        <img src={`${url}/images/home/playbtn.svg`} className='w-100' alt="" />
                        <div className='videosec-subheading text-light mt-5'>Love where you're going</div>
                        <div className="videosec-heading text-light mt-5"><span>Voyage</span> is a World Leading Online <span>Tours Booking Platform</span></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default VideoSec