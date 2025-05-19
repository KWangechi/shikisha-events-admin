import type { NavMenu } from '~/types/nav'

export const navMenu: NavMenu[] = [
  {
    heading: 'General',
    items: [
      {
        title: 'Home',
        icon: 'i-lucide-home',
        link: '/',
      },
      {
        title: 'Organizations',
        icon: 'i-lucide-calendar-check-2',
        link: '/organizations',
      },
      {
        title: 'Events',
        icon: 'i-lucide-calendar-check-2',
        link: '/events',
      },
      {
        title: 'Attendees',
        icon: 'i-lucide-calendar-check-2',
        link: '/attendees',
      },
    ],
  },
]
