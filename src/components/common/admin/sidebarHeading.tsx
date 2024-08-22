import React from 'react'

interface SidebarHeading {
  id: number;
  heading: string;
  icon: React.ReactNode;
  link: string;
  children?: SidebarHeading[];
}

const sidebarHeadings: SidebarHeading[] = [
  {
    id: 1,
    heading: 'Dashboard',
    icon: <i className="mdi mdi-view-dashboard"></i>,
    link: '/',
  },
  {
    id: 2,
    heading: 'Vendors',
    icon: <i className="mdi mdi-chart-bar"></i>,
    link: 'vendor/listing',
  },
 
  {
    id: 3,
    heading: 'Subscription',
    icon: <i className="mdi mdi-border-inside"></i>,
    link: 'subscription',
  },

  
  {
    id: 3,
    heading: 'All Tour List',
    icon: <i className="mdi mdi-border-inside"></i>,
    link: 'tours/listing',
  },
  {
    id: 6,
    heading: 'Admin Settings',
    icon: <i className="mdi mdi-settings"></i>,
    link: 'admin-setting',
  },
  {
    id: 7,
    heading: 'Logout',
    icon: <i className="mdi mdi-logout"></i>,
    link: '/logout',
  },

  {
    id: 4,
    heading: 'Full Width',
    icon: <i className="mdi mdi-blur-linear"></i>,
    link: 'full-width',
  },
  // {
  //   id: 5,
  //   heading: 'Form',
  //   icon: <i className="mdi mdi-receipt"></i>,
  //   link: 'sss',
  //   children: [
  //     {
  //       id: 7,
  //       heading: 'Form',
  //       icon: <i className="mdi mdi-receipt"></i>,
  //       link: '/Form',
  //     },
  //   ],
  // },
]

export { sidebarHeadings, SidebarHeading }
