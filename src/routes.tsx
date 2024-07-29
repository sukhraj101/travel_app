import { createBrowserRouter } from 'react-router-dom'
import React, { lazy } from 'react'

// Lazy load components
const Layout = lazy(() => import('./pages/Layout'))
const HomePage = lazy(() => import('./pages/home/HomePage'))
const ActivityPage = lazy(() => import('./pages/activities/ActivityPage'))
const TrackingPage = lazy(() => import('./pages/tracking/TrackingPage'))
const AdminLayout = lazy(() => import('./pages/cpanel/layout'))
const Dashboard = lazy(() => import('./pages/cpanel'))
const Login = lazy(() => import('./pages/home/login'))
const NotFound = lazy(() => import('./pages/notfound/notfound'))
const CreateTour = lazy(() => import('./pages/cpanel/tours'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/activities',
        element: <ActivityPage />
      },
      {
        path: '/tracking',
        element: <TrackingPage />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: "/cpanel",
    element: <AdminLayout />,
    children: [
      {
        path: '/cpanel',
        element: <Dashboard />
      },
      {
        path: '/cpanel/tours/listing',
        element: <CreateTour />
      },
      {
        path: '/cpanel/tours/create',
        element: <CreateTour />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export { router }
