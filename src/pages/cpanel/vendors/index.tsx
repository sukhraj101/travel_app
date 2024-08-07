import React, { useEffect, useState } from 'react'
import { getRequest } from '../../../service';
import { Link } from 'react-router-dom';
import "./index.css"
interface Vendor {
  id: number;
  logo: string;
  banner: string;
  name: string;
  description: string;
  products_count:number;
  
}
const VendorListing = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [status, setStatus] = useState<number>(0);


  useEffect(() => {
    getVendors();
}, []);
const getVendors = () => {
  getRequest(`v1/vendor/listing?status=${status}skip=0&limit=1000`)
      .then((res: { data: Vendor[] }) => {
        setVendors(res.data);
      })
      .catch((err: unknown) => {
          console.log(err);
      });
};
const filteredVendor =status !== 10 ? vendors.filter((v) => v?.status == status) : vendors;
  return (
     <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav className='vendor-tabs'>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link active" onClick={()=>setStatus(10)} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                  <button className="nav-link  " onClick={()=>setStatus(1)} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Active</button>
                  <button className="nav-link  " onClick={()=>setStatus(0)} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Pending</button>
                  <a href="/cpanel/vendor/create" type="button" className="btn btn-primary ms-auto align-self-start">Add Vendor</a>
                </div>
              </nav>
              <div className="card">
                <div className="card-body">
                
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div className="table-responsive">
                        <table id="zero_config" className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>Banner</th>
                             
                              <th>Business Name</th>
                              <th>Tours Total</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredVendor.map((vendor: Vendor) => (
                              <tr key={vendor.id}>
                                <td width={120}><img src={vendor.logo} /></td>
                                
                                <td>
                                  <h6>{vendor.name}</h6>
                                  <p>{vendor.description}</p>
                                </td>
                                <td width={130}>{vendor?.products_count}</td>
                                <td width={130}><Link to={`/cpanel/vendor-detail/${vendor?.id}/info`} className='vendor-link'>Details</Link></td>                          
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">2</div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">3</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
     </>
  )
}

export default VendorListing