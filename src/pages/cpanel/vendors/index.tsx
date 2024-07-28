import React, { useEffect, useState } from 'react'
import { getRequest } from '../../../service';
import { Link } from 'react-router-dom';
import "./index.css"
interface Vendor {
  id: number;
  logo: string;
  banner: string;
  name: string;
}
const VendorListing = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);


  useEffect(() => {
    getVendors();
}, []);
const getVendors = () => {
  getRequest('v1/vendor/listing?skip=0&limit=1000')
      .then((res: { data: Vendor[] }) => {
        setVendors(res.data);
      })
      .catch((err: unknown) => {
          console.log(err);
      });
};
  return (
     <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">

                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li>
                    <button className="btn btn-lg btn-outline-success active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Active</button>
                  </li>
                  <li>
                    <button className="btn btn-lg btn-outline-info" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pending</button>
                  </li>
                  <li>
                    <button className="btn btn-lg btn-outline-warning" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Blocked</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <div className="table-responsive">
                      <table id="zero_config" className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>Logo</th>
                            <th>Business ID</th> 
                            <th>Business Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vendors.map((vendor: Vendor) => (
                            <tr key={vendor.id}>
                              <td><img src={vendor.logo} width={100}/></td>
                              <td>{vendor.id}</td>
                              <td>{vendor.name}</td>
                              <td><Link to={`/cpanel/vendor/${vendor?.id}/detail`} className='badge rounded-pill bg-success'>Details</Link></td>                          
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <div className="table-responsive">
                      <table id="zero_config" className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>Logo</th>
                            <th>Business ID</th> 
                            <th>Business Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Pending</td>
                            <td>Pending</td> 
                            <td>Pending</td>
                            <td>Pending</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                    <div className="table-responsive">
                      <table id="zero_config" className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>Logo</th>
                            <th>Business ID</th> 
                            <th>Business Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Blocked</td>
                            <td>Blocked</td> 
                            <td>Blocked</td>
                            <td>Blocked</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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