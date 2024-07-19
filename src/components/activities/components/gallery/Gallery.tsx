const url = import.meta.env.VITE_PUBLIC_URL

const Gallery = () => {
  return (
    <>
        <div className="col-md-6">
            <div className="gallery-img h-100 position-relative">
                <img src={`${url}/images/gallery/gallery_1.png`} className="w-100 h-100 "/>
                <span className="position-absolute gallery-float-text text-white rounded-4 fw-bold">All Images · 223</span>
            </div>
        </div>
        <div className="col-md-6">
            <div className="row">
                <div className="col-md-6 mb-6">
                    <img src={`${url}/images/gallery/gallery_1.png`} className="w-100 h-100 "/>
                </div>
                <div className="col-md-6 mb-6">
                    <img src={`${url}/images/gallery/gallery_1.png`} className="w-100 h-100 "/>
                </div>
                <div className="col-md-6">
                    <img src={`${url}/images/gallery/gallery_1.png`} className="w-100 h-100 "/>
                </div>
                <div className="col-md-6">
                    <img src={`${url}/images/gallery/gallery_1.png`} className="w-100 h-100 "/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery