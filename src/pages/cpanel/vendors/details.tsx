import { useCallback, useContext, useEffect, useState } from "react";
import { getRequest } from "../../../service";
import { useParams } from "react-router-dom";
import VendorContext from './VendorContext';
interface Vendor {
  id: number;
  logo: string;
  banner: string;
  name: string;
  description: string;
  products_count:number;
  
}
const Details = () => {

  // const { slug } = useParams();
  const vendor = useContext(VendorContext);
  console.log(vendor)
 
  return (
    <>
      <div className="card">
          <div className="card-body">
              <div className="row">
                  <h5 className="card-title">Vendor Detail</h5>
                  <br />
                  <div className="card-body-vendor-banner">
                    {vendor?.banner && <img src={vendor?.banner} /> }
                  </div>
                  <div className="col-md-8">
                      <h3>{vendor?.name || 'Vendor Name'}</h3>
                      <strong>Description:</strong>
                      <p>{vendor?.description || 'Description not available'}</p>
                      <div className="row mb-1">
                          <div className="col-md-3">Address</div>
                          <div className="col-md-9">{vendor?.address || 'Address not available'}</div>
                      </div>
                      <div className="row mb-1">
                          <div className="col-md-3">Categories</div>
                          <div className="col-md-9">{vendor?.categories ? vendor?.categories.join(', ') : 'coming soon'}</div>
                      </div>
                      <div className="row mb-1">
                          <div className="col-md-3">Country</div>
                          <div className="col-md-9">{vendor?.country ? vendor?.country.nicename : 'coming soon'}</div>
                      </div>
                      <div className="row mb-1">
                          <div className="col-md-3">Longitude</div>
                          <div className="col-md-9">{vendor?.longitude ? vendor?.longitude : 'coming soon'}</div>
                      </div>
                      <div className="row mb-1">
                          <div className="col-md-3">Latitude</div>
                          <div className="col-md-9">{vendor?.latitude ? vendor?.latitude : 'coming soon'}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Details;