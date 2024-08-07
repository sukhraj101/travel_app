const url = import.meta.env.VITE_PUBLIC_URL

const Gallery = ({
    product
}) => {
  return (
    <>
        <div className="col-md-6">
            <div className="gallery-img h-100 position-relative">
                <img src={product?.thumbnail} className="w-100 h-100 "/>
                <span className="position-absolute gallery-float-text text-white rounded-4 fw-bold">All Images · 223</span>
            </div>
        </div>
        <div className="col-md-6">
            <div className="row">
                {
                    product?.images.map((image, index) => (
                        <div className="col-md-6 mb-6" key={index}>
                        <img src={image} className="w-100 h-100 "/>
                    </div>
                    )
                  )
                } 
                 
            </div>
        </div>
    </>
  )
}

export default Gallery