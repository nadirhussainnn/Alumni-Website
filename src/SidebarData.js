
// import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import * as RiIcons from 'react-icons/ri';

// export const SidebarData = [
//   {
//     title: 'Dashboard',
//     path: 'DashboardView',
//     icon: <AiIcons.AiFillDashboard />
//   }
//   ,
//   {
//     title: 'Alumni',
//     path:'#', //It's alumni page will be shown here
//     icon: <AiIcons.AiOutlineBook />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Add Member',
//         path: 'AddAlumni',
//         icon: <IoIcons.IoMdAddCircleOutline />
//       },
//       {
//         title: 'Search',
//         path: 'SearchAlumni',
//         icon: <IoIcons.IoIosSearch />
//       },
//       {
//         title: 'Display All',
//         path: 'DisplayAllAlumniMembers',
//         icon: <IoIcons.IoIosDoneAll />
//       },
//     ]
//   },
//   {
//     title: 'Events',
//     path: '#',
//     icon: <RiIcons.RiCalendarEventLine />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Create Event',
//         path: 'CreateEvent',
//         icon: <IoIcons.IoMdAddCircleOutline />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'View Upcoming',
//         path: 'ViewUpcomingEvents',
//         icon: <RiIcons.RiSearchEyeLine />
//       }
//     ]
//   },

// ];


import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: 'DashboardView',
    icon: <AiIcons.AiFillDashboard />
  }
  ,
  {
    title: 'Alumni',
    path:'#', //It's alumni page will be shown here
    icon: <AiIcons.AiOutlineBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Member',
        path: 'AddAlumni',
        icon: <IoIcons.IoMdAddCircleOutline />
      },
      {
        title: 'Edit Member',
        path: 'EditAlumni',
        icon: <IoIcons.IoIosAddCircle />
      },
      {
        title: 'Search',
        path: 'SearchAlumni',
        icon: <IoIcons.IoIosSearch />
      },
      {
        title: 'Display All',
        path: 'DisplayAllAlumniMembers',
        icon: <IoIcons.IoIosDoneAll />
      },
    ]
  },
  {
    title: 'Events',
    path: '#',
    icon: <RiIcons.RiCalendarEventLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Create Event',
        path: 'CreateEvent',
        icon: <IoIcons.IoMdAddCircleOutline />,
        cName: 'sub-nav'
      },
      {
        title: 'View Upcoming',
        path: 'ViewUpcomingEvents',
        icon: <RiIcons.RiSearchEyeLine />
      }
    ]
  },

];