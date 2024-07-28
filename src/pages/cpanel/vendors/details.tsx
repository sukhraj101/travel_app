import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getRequest } from '../../../service';

const VendorDetail = () => {
    const { slug } = useParams();
    const [loading,setLoading] = useState(false);
    const [vendor,setVendor] = useState(false);
    const [error,setError] = useState([]);
      

    const fetchCategoryDetails = useCallback(() => {
        setLoading(true);
        getRequest(`v1/vendor/${slug}/details`)
          .then(async (res) => {
            const category = await res.data;
            setVendor(category);
           
           
          })
          .catch((e) => {
            console.log(e);
            setError("Error fetching category details");
          })
          .finally(() => {
            setLoading(false);
          });
      }, [slug]);

      useEffect(() => {
        fetchCategoryDetails();
      },[fetchCategoryDetails]);
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-info text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-relative-scale"></i>
                </h1>
                <h6 className="text-white">Buttons</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-cyan text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-pencil"></i>
                </h1>
                <h6 className="text-white">Tours</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xlg-3">
            <div className="card card-hover">
              <div className="box bg-success text-center">
                <h1 className="font-light text-white">
                  <i className="mdi mdi-calendar-check"></i>
                </h1>
                <h6 className="text-white">Orders</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mt-1 mb-1">
            <div className="alert alert-primary" role="alert">
              A simple primary alert—check it out!
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src="https://cdn.thecollector.com/wp-content/uploads/2021/12/colosseum-world-wonder-national-geographic.jpg" className='w-100' alt="img" />
              </div>
              <div className="comment-footer ps-4 pe-4 text-center">
                <button type="button" className="btn btn-cyan text-white mx-1">
                  Edit
                </button>
                <button type="button" className="btn btn-success text-white mx-1">
                  Publish
                </button>
                <button type="button" className="btn btn-danger text-white mx-1">
                  Delete
                </button>
              </div>
              <ul className="list-style-none">
                <li className="d-flex no-block card-body">
                  <i className="mdi mdi-check-circle fs-4 w-30px mt-1"></i>
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</a>
                    <span className="text-muted">dolor sit amet, consectetur adipiscing</span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">20</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex no-block card-body border-top">
                  <i className="mdi mdi-gift fs-4 w-30px mt-1"></i>
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">Congratulation Maruti, Happy Birthday</a>
                    <span className="text-muted">many many happy returns of the day</span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">11</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex no-block card-body border-top">
                  <i className="mdi mdi-plus fs-4 w-30px mt-1"></i>
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">Maruti is a Responsive Admin theme</a>
                    <span className="text-muted">But already everything was solved. It will ...</span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">19</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex no-block card-body border-top">
                  <i className="mdi mdi-leaf fs-4 w-30px mt-1"></i>
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">Envato approved Maruti Admin template</a>
                    <span className="text-muted">i am very happy to approved by TF</span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">20</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
                <li className="d-flex no-block card-body border-top">
                  <i className="mdi mdi-comment-question-outline fs-4 w-30px mt-1"></i>
                  <div>
                    <a href="#" className="mb-0 font-medium p-0">
                      I am alwayse here if you have any question</a>
                    <span className="text-muted">we glad that you choose our template</span>
                  </div>
                  <div className="ms-auto">
                    <div className="tetx-right">
                      <h5 className="text-muted mb-0">15</h5>
                      <span className="text-muted font-16">Jan</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">            
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-0">Static Table</h5>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-0">Included / Excluded</h5>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Making The New Suit</td>
                    <td className="text-success">Progress</td>
                    <td>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Update">
                        <i className="mdi mdi-check"></i>
                      </a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete">
                        <i className="mdi mdi-close"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Luanch My New Site</td>
                    <td className="text-warning">Pending</td>
                    <td>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Update">
                        <i className="mdi mdi-check"></i>
                      </a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete">
                        <i className="mdi mdi-close"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Maruti Excellant Theme</td>
                    <td className="text-danger">Cancled</td>
                    <td>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Update">
                        <i className="mdi mdi-check"></i>
                      </a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete">
                        <i className="mdi mdi-close"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VendorDetail
 
