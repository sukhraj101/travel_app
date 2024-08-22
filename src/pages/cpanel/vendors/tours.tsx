import React, { useCallback, useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom';
import { getRequest, postRequest } from '../../../service';
interface Tours {
    id: number;
    name: string;
    vendor_id:number;
}
const TourList = () =>{
    const { slug } = useParams();
    const [loading,setLoading] = useState(false);
    const [records,setRecords] = useState<Tours>();

    const [total,setTotal] = useState<number>(0);
    const [page,setPage] = useState<number>(1);
    const [skip,setSkip] = useState<number>(0);
    const [limit,setlimit] = useState<number>(10);
    console.log(loading);
    const createNewTour = () => { 
        setLoading(true);
        postRequest(`v1/vendor/${slug}/product/store`, {
            "name": "test",
        })
          .then((res) => {
            if (res.success) {
              alert("Vendor created successfully"); 
              window.location.href = `/cpanel/vendor-detail/${slug}/tour/${res?.data?.id}/edit`;
            }
          })
          .catch(() => alert("Error creating category"))
          .finally(() => {
            setLoading(false);
          });
    }   

    const getTours = useCallback(() => {
      setLoading(true);
       
      getRequest(`v1/vendor/${slug}/product/listing?skip=${skip}&limit=${limit}`)
          .then((res) => {
            if (res.status ==  "success") {
                setRecords(res?.data);
                console.log(res.data);
                setTotal(res?.meta?.total);
            }
          })
          .catch(() => alert("Error creating category"))
          .finally(() => {
            setLoading(false);
          });
  }, [limit, skip, slug]);
  
  useEffect(() => {
    getTours();
  }, [getTours]); 

  return (
    <> 
      <div className="card">
        <div className="card-body">
          <div className='d-flex align-items-center justify-content-between mb-2'>
            <span>Citymax Hotel Bur Dubai's Tour list:</span>
            <button className='btn btn-primary' onClick={createNewTour}>Add New Tour</button>
          </div>
          <div className="row">
            <div className="col-lg-12">
            <div className="align-items-center row">
              <div className="col-lg-8">
                <div className="mb-3 mb-lg-0"><h6 className="fs-16 mb-0">Showing {skip + 1} – {skip + records?.length} of  {total} results</h6></div>
              </div>
              <div className="col-lg-4">
                <div className="candidate-list-widgets">
                  <div className="row">
                    <div className="col-lg-6">
                      <select className="form-select" data-trigger="true" name="choices-single-filter-orderby" id="choices-single-filter-orderby" aria-label="Default select example">
                        <option value="df">Default</option>
                        <option value="ne">Newest</option>
                        <option value="od">Oldest</option>
                        <option value="rd">Random</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <select className="form-select" data-trigger="true" name="choices-candidate-page" id="choices-candidate-page" aria-label="Default select example">
                        <option value="df">All</option>
                        <option value="ne">8 per Page</option>
                        <option value="ne">12 per Page</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="candidate-list">
              {loading && 'Loading...'}
                {records && records.map((record, index) => (
                  <>
                    <div className="candidate-list-box tour-card mt-4" key={index}>
                      <div className="p-4 card-body">
                        <div className="align-items-center row">
                          <div className="col-auto">
                            <div className="candidate-list-images">
                              <a href="#"><img src={record?.thumbnail} alt="" className="avatar-md img-thumbnail rounded-circle" /></a>
                            </div>
                          </div>
                          <div className="col-lg-8">
                              <div className="candidate-list-content mt-3 mt-lg-0">
                                  <h5 className="fs-19 mb-0">
                                      <a className="primary-link" href="#">{record?.name}</a>
                                      <span className="badge bg-success ms-1"><i className="mdi mdi-star align-middle"></i>4.8</span>
                                  </h5>
                                  <p className="text-muted mb-2">{ record?.description?.slice(0, 300) || 'Tour details missing'}</p>
                                  <ul className="list-inline mb-0 text-muted">
                                      <li className="list-inline-item"><i className="mdi mdi-map-marker"></i> {record?.address}</li>
                                      {
                                        record?.price_type !== 'adult' && (
                                          <li className="list-inline-item"><i className="mdi mdi-wallet"></i> ${record?.children_price} / per children</li>
                                        )
                                      }
                                      {
                                        record?.price_type !== 'children' && (
                                          <li className="list-inline-item"><i className="mdi mdi-wallet"></i> ${record?.adult_price} / per adult</li>
                                        )
                                      }
                                    
                                  </ul>
                              </div>
                          </div>                                            
                          <div className="col-lg-2">
                            <Link className='btn btn-primary pull-right px-4' to={`/cpanel/vendor-detail/${record?.vendor_id}/tour/${record?.id}/edit`}>Edit</Link> 
                          </div>
                        </div>
                        <div className="favorite-icon"></div>
                      </div>
                    </div>
                  </>
                  ))
                } 
              </div>
            </div>
          </div>
        </div>
      </div>
           
    </>
  )
}

export default TourList