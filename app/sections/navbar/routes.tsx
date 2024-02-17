import { UserIcon } from '@/app/_assets/icons';

export const navbarRoutes = [
  {
    id: 'how-it-works',
    href: '/#how-it-works',
    label: 'How it works',
  },
  {
    id: 'highlights',
    href: '/#highlights',
    label: 'Highlights',
  },
  {
    id: 'locations',
    label: 'Locations',
    children: [
      {
        id: 'porto',
        href: '/#sao-paulo',
        label: 'Porto',
      },
      {
        id: 'cascais',
        href: '/#sao-paulo',
        label: 'Cascais',
      },
      {
        id: 'costa-da-caprica',
        href: '/#sao-paulo',
        label: 'Costa DA caprica',
      },
      {
        id: 'peniche',
        href: '/#sao-paulo',
        label: 'Peniche',
      },
      {
        id: 'aljezur',
        href: '/#sao-paulo',
        label: 'Aljezur',
      },
    ],
  },
  {
    id: 'pricing',
    href: '/pricing',
    label: 'Pricing',
  },
  {
    id: 'profile',
    label: <UserIcon />,
    children: [
      {
        id: 'login',
        href: '/login',
        label: 'Login',
      },
      {
        id: 'register',
        href: '/register',
        label: 'Register',
      },
    ],
  },
];
