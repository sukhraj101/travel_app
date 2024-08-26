import { useCallback, useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getRequest } from '../../../service';
import VendorContext from './VendorContext';
import "./vendorLayout.css";

// Define the interface for the Vendor object
interface Vendor {
    banner: string;
    logo: string;
    name: string;
    slug: string;
    phone_number: string;
    pincode: string;
    address: string;
    city?: { name: string };
    state?: { name: string };
    country?: { name: string };
}

function VendorLayout() {
    const { slug } = useParams<{ slug: string }>();
    const [loading, setLoading] = useState(false);
    const [vendor, setVendor] = useState<Vendor | null>(null); // Define Vendor type or null
    const [error, setError] = useState('');

    console.log(vendor, loading);

    const fetchVendorDetails = useCallback(() => {
        setLoading(true);
        getRequest(`v1/vendor/${slug}/details`)
            .then((res) => {
                const data = res.data;
                setVendor(data);
            })
            .catch((e) => {
                console.log(e);
                setError("Error fetching vendor details");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [slug]);

    useEffect(() => {
        fetchVendorDetails();
    }, [fetchVendorDetails]);

    const isoDateString = '2024-08-06T17:44:38.000000Z';
    const date = parseISO(isoDateString);
    const formattedDate = format(date, "d MMMM yyyy, HH:mm");

    return (
        <VendorContext.Provider value={vendor}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="container-fluid">
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
                                <img src={vendor?.banner || ''} className='w-100 rounded shadow' alt="Vendor Banner" />
                                <div className="comment-footer mt-3 text-center row">
                                    <div className="col-md-4">
                                        <div className='vendor-logo'>
                                            <img src={vendor?.logo || ''} className='img-circle w-100 rounded-pill border shadow-sm' alt="Vendor Logo" />
                                        </div>
                                    </div>
                                    <div className="col-md-8 align-self-center">
                                        <Link to={`/cpanel/vendor-detail/${slug}/edit`} className="btn btn-cyan text-white mx-1">Edit</Link> 
                                        <button type="button" className="btn btn-secondary text-white mx-1">
                                            Publish
                                        </button>
                                        <button type="button" className="btn btn-danger text-white mx-1">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h4>{vendor?.name || 'Vendor Name - not-available'}</h4>
                                    <div className='mb-1 font-12'>Vendor slug: {vendor?.slug || 'Vendor slug'}</div>
                                    <div>Created on: {formattedDate}</div>
                                    <div>Phone: {vendor?.phone_number || 'not-available'}</div>
                                    <div>Pincode: {vendor?.pincode || 'not-available'}</div>
                                </div>
                            </div>
                            <ul className="list-style-none">
                                <li className="d-flex no-block card-body">
                                    <i className="mdi mdi-check-circle fs-4 w-30px mt-1"></i>
                                    <div>
                                        <div className="mb-0 font-medium p-0">{vendor?.address || 'Address not available'}</div>
                                        <span className="text-muted">
                                            {vendor?.city?.name || 'City not available'}, {vendor?.state?.name || 'State not available'}, {vendor?.country?.name || 'Country not available'}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row mb-3">
                            <div className="col-md-3">
                                <Link to={`/cpanel/vendor-detail/${slug}/info`} className='btn btn-tertiary w-100 align-items-stretch d-flex'>
                                    <div className="icon icon-left d-flex align-items-center justify-content-center">
                                        <i className="mdi mdi-view-list"></i>
                                    </div>
                                    <div className="text w-100 text-end p-2 pe-3">
                                        <h4>Details</h4>
                                        <span>General info</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`/cpanel/vendor-detail/${slug}/tours`} className='btn btn-tertiary w-100 align-items-stretch d-flex'>
                                    <div className="icon icon-left d-flex align-items-center justify-content-center">
                                        <i className="mdi mdi-airplane"></i>
                                    </div>
                                    <div className="text w-100 text-end p-2 pe-3">
                                        <h4>Tours</h4>
                                        <span>800+ tours</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to={`/cpanel/vendor-detail/${slug}/orders`} className='btn btn-tertiary w-100 align-items-stretch d-flex'>
                                    <div className="icon icon-left d-flex align-items-center justify-content-center">
                                        <i className="mdi mdi-checkbox-marked-outline"></i>
                                    </div>
                                    <div className="text w-100 text-end p-2 pe-3">
                                        <h4>Orders</h4>
                                        <span>800+ orders</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </VendorContext.Provider>
    );
} 
export default VendorLayout; 