import { AiOutlineAppstore , AiOutlineFileDone } from 'react-icons/ai'
import { RiAccountCircleLine } from 'react-icons/ri'
import { BiNotification } from 'react-icons/bi'
import { MdOutlineReviews } from 'react-icons/md'
import { CgAddR } from 'react-icons/cg'
import { HiOutlineViewColumns } from 'react-icons/hi2'

export const RestaurantAdminLinks = [
    {
      title: 'RestaurantPages',
      links: [
        {
          name: 'General',
          link: 'restaurant_home',
          icon: <AiOutlineAppstore />
        },
        {
          name: 'My Profile',
          link: 'update_restaurant',
          icon: <RiAccountCircleLine />
        },
        {
          name: 'New Reservations',
          link: 'new_reservations',
          icon: <BiNotification />
        },
        {
            name: 'Past Reservations',
            link: 'old_reservations',
            icon: <AiOutlineFileDone />
        },
        {
            name: 'Reviews',
            link: 'review',
            icon: <MdOutlineReviews />
        },
        {
          name: 'Report',
          link: 'restaurant_report',
          icon: <MdOutlineReviews />
        },

      ],
    },
  ];


export const WebsiteAdminLinks = [
    {
        title: 'AdminPages',
        links: [
            {
                name: 'General',
                link: 'admin_home',
                icon: <AiOutlineAppstore />
            },
            {
                name: 'Add Restaurant',
                link: 'admin_add_restaurant',
                icon: <CgAddR />
            },
            {
                name: 'View Restaurant',
                link: 'admin_view_restaurants',
                icon: <HiOutlineViewColumns />
            },
            {
              name: 'Reports',
              link: 'admin_select_reports',
              icon: <HiOutlineViewColumns />
            },
        ]
    }
]