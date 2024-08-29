import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Lazy load your components
const Layout = React.lazy(() => import('./pages/Layout'));
const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const ActivityPage = React.lazy(() => import('./pages/activities/ActivityPage'));
const TrackingPage = React.lazy(() => import('./pages/tracking/TrackingPage'));
const AdminLayout = React.lazy(() => import('./pages/cpanel/layout'));
const Dashboard = React.lazy(() => import('./pages/cpanel'));
const Login = React.lazy(() => import('./pages/home/login'));
const NotFound = React.lazy(() => import('./pages/notfound/notfound'));
const CreateTour = React.lazy(() => import('./pages/cpanel/tours'));
const VendorListing = React.lazy(() => import('./pages/cpanel/vendors'));
const CreateVendor = React.lazy(() => import('./pages/cpanel/vendors/create'));
const VendorDetail = React.lazy(() => import('./pages/cpanel/vendors/details'));
const VendorLayout = React.lazy(() => import('./pages/cpanel/vendors/vendorLayout'));
const TourList = React.lazy(() => import('./pages/cpanel/vendors/tours'));
const AdminSettings = React.lazy(() => import('./pages/cpanel/settings/AdminSettings'));
const TourListing = React.lazy(() => import('./pages/cpanel/tours/listing'));
const Subscription = React.lazy(() => import('./pages/cpanel/subscriptions'));
const VendorEdit = React.lazy(() => import('./pages/cpanel/vendors/edit'));

const Fallback = () => <div>Loading...</div>;

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<Fallback />}><Layout /></Suspense>,
        children: [
            {
                path: '',
                element: <Suspense fallback={<Fallback />}><HomePage /></Suspense>
            },
            {
                path: '/tour/:id/detail',
                element: <Suspense fallback={<Fallback />}><ActivityPage /></Suspense>
            },
            {
                path: '/tracking',
                element: <Suspense fallback={<Fallback />}><TrackingPage /></Suspense>
            }
        ]
    },
    {
        path: '/cpanel/login',
        element: <Suspense fallback={<Fallback />}><Login /></Suspense>
    },
    {
        path: "/cpanel",
        element: <Suspense fallback={<Fallback />}><AdminLayout /></Suspense>,
        children: [
            {
                path: '/cpanel',
                element: <Suspense fallback={<Fallback />}><Dashboard /></Suspense>
            },
            {
                path: 'admin-setting',
                element: <Suspense fallback={<Fallback />}><AdminSettings /></Suspense>
            },
            {
                path: 'subscription',
                element: <Suspense fallback={<Fallback />}><Subscription /></Suspense>
            },
            {
                path: '/cpanel/tours/listing',
                element: <Suspense fallback={<Fallback />}><TourListing /></Suspense>
            },
            {
                path: '/cpanel/vendor/listing',
                element: <Suspense fallback={<Fallback />}><VendorListing /></Suspense>
            },
            {
                path: '/cpanel/vendor/create',
                element: <Suspense fallback={<Fallback />}><CreateVendor /></Suspense>
            },
            {
                path: '/cpanel/vendor-detail/:slug/tour/:id/edit',
                element: <Suspense fallback={<Fallback />}><CreateTour /></Suspense>
            },
            {
                path: "/cpanel/vendor-detail",
                element: <Suspense fallback={<Fallback />}><VendorLayout /></Suspense>,
                children: [
                    {
                        path: '/cpanel/vendor-detail/:slug/info',
                        element: <Suspense fallback={<Fallback />}><VendorDetail /></Suspense>
                    },
                    {
                        path: '/cpanel/vendor-detail/:slug/edit',
                        element: <Suspense fallback={<Fallback />}><VendorEdit /></Suspense>
                    },
                    {
                        path: '/cpanel/vendor-detail/:slug/tours',
                        element: <Suspense fallback={<Fallback />}><TourList /></Suspense>
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <Suspense fallback={<Fallback />}><NotFound /></Suspense>,
    }
]);

export { router };
