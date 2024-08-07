import { useEffect, useState } from 'react';
import './bestactivities.css'
import { getRequest } from '../../../../service';
import { Link } from 'react-router-dom';
const url = import.meta.env.VITE_PUBLIC_URL;
interface Tours {
    id: number;
    name: string;
    vendor_id:number;
    address:string;
    price_type:string;
    category:string[];
}
const BestActivities = () => {

    const [loading,setLoading] = useState(false);
    const [records,setRecords] = useState<Tours>();
    useEffect(() => {
      getTours();
  },[]);
  
  const getTours = () => { 
      setLoading(true);
      getRequest(`v1/product/listing`)
        .then((res) => {
          if (res.status ==  "success") {
              setRecords(res?.data);
              console.log(res.data);
          }
        })
        .catch(() => alert("Error creating category"))
        .finally(() => {
          setLoading(false);
        });
  }
    return (
        <>
            <div className="container-fluid mt-16 mb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className='bestactivities-heading text-center mb-3'>Best Activities</div>
                            <div className='bestactivities-para text-center'>Now you can place your order to enjoy at home, at the office or wherever you like the most, a wide variety of our dishes,
                                in the same way as you can enjoy them in our restaurants.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="activitiesSlider" className="carousel slide carousel-dark" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className={`carousel-item active`}>
                                   <div className="row">
                                    {
                                      records &&  records.map((record,index)=>{
                                            return(
                                               
                                                            <div className="col-md-4">
                                                                <div className="card position-relative rounded-4 activity-cards">
                                                                    <button type="button" className="btn btn-light position-absolute end-0 mt-2 me-2 rounded-3">
                                                                        <i className="fa fa-star fs-6 text-warning"></i> 4.0 (15k)
                                                                    </button>
                                                                    <img src={record?.thumbnail} className="card-img-top rounded-top-4" alt="green iguana" />
                                                                    <div className="card-body p-3 rounded-4">
                                                                        <div className="d-flex align-items-start justify-content-between">
                                                                            <div className="activity-name">{record?.name}</div>
                                                                           
                                                                            <div className="activity-time d-flex align-items-center mt-1"><i className="fa fa-clock-o fs-6 text-warning me-1"></i> 8hrs</div>
                                                                        </div>
                                                                        <div className="tour-address">
                                                                                <div className="list-inline-item"><i className="mdi mdi-map-marker"></i> {record?.address}</div>
                                                                            </div>
                                                                        <div className="tour-company-wrap">
                                                                            <div className="tour-company">
                                                                                <div className="company-name mb-3">
                                                                                {
                                                                                    record?.category.map((cate,index)=> (
                                                                                        <span className="badge bg-soft-secondary fs-14 mt-1" key={index}>{cate}</span>
                                                                                    ))
                                                                                    }
                                                                                 
                                                                                </div>
                                                                                <div className="price-sec">
                                                                            <ul className="list-inline mb-0 text-muted">
                                                                                    
                                                                                    {
                                                                                        record?.price_type !== 'adult' && (
                                                                                        <li className="list-inline-item"><i className="mdi mdi-wallet"></i> <span>${record?.children_price}</span> / per children</li>
                                                                                        )
                                                                                    }
                                                                                    {
                                                                                        record?.price_type !== 'children' && (
                                                                                        <li className="list-inline-item"><i className="mdi mdi-wallet"></i> <span>${record?.adult_price}</span> / per adult</li>
                                                                                        )
                                                                                    }
                                                                                    </ul>
                                                                            </div>
                                                                                <div className="company-feature">Free cancellation available</div>
                                                                                <div className="tour-cta">
                                                                                    <Link className='btn btn-primary' to={`/tour/${record?.id}/detail`}>View</Link> 
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> 

                                                 
                                               
                                            )
                                        })
                                    }
                                    </div>
                                    </div>
                                </div>
                                <div className="sliders-controllers d-flex justify-content-between position-absolute pe-none top-50 start-50">
                                    <button className="carousel-control-prev position-static w-auto pe-auto" type="button" data-bs-target="#activitiesSlider" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    </button>
                                    <button className="carousel-control-next position-static w-auto pe-auto" type="button" data-bs-target="#activitiesSlider" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestActivities