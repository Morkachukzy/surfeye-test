import { ChevronDownIcon } from '@/app/_assets/icons';
import Link from 'next/link';

type BaseNavbarRoute = {
  href: string;
  label: string;
  children?: undefined | null;
};
type ExtendedNavbarRoute = {
  label: string;
  href?: undefined | null;
  children: BaseNavbarRoute[];
};

type NavbarRouteType = BaseNavbarRoute | ExtendedNavbarRoute;

type NavbarRouteProps = {
  route: NavbarRouteType;
};

export const NavbarRoute = ({ route }: NavbarRouteProps) => {
  return (
    <>
      {route.children ? (
        <button className="flex items-center gap-3 leading-none uppercase italic font-semibold">
          {getRouteDetails(route)}
        </button>
      ) : (
        <Link
          className="flex items-center gap-3 leading-none uppercase italic font-semibold"
          href={route.href}
        >
          {getRouteDetails(route)}
        </Link>
      )}
    </>
  );
};

const getRouteDetails = (route: NavbarRouteType) => {
  return (
    <>
      <span>{route.label}</span>
      <span>{route.children ? <ChevronDownIcon /> : null}</span>
    </>
  );
};
