
const sidebarHeadings = [
    {
        id:1,
        heading:'Dashboard',
        icon:<i className="mdi mdi-view-dashboard"></i>,
        link:'/dashboard',
    },
    {
        id:2,
        heading:'Charts',
        icon:<i className="mdi mdi-chart-bar"></i>,
        link:'/chart'
    },
    {
        id:3,
        heading:'Widgets',
        icon:<i className="mdi mdi-chart-bubble"></i>,
        link:'/widgets'
    },
    {
        id:4,
        heading:'Tables',
        icon:<i className="mdi mdi-border-inside"></i>,
        link:'/tables'
    },
    {
        id:5,
        heading:'Full Width',
        icon:<i className="mdi mdi-blur-linear"></i>,
        link:'/full-width'
    },
    {
        id:6,
        heading:'Form',
        icon:<i className="mdi mdi-receipt"></i>,
        link:'',
        children:[
            {
                heading:'Form',
                icon:<i className="mdi mdi-receipt"></i>,
                link:'/Form',
            }
        ]
    },

]

export {sidebarHeadings}