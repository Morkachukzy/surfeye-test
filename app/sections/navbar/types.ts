export type BaseNavbarRoute = {
  id: string;
  href: string;
  label: string | JSX.Element;
  children?: undefined | null;
};
export type ExtendedNavbarRoute = {
  id: string;
  label: string | JSX.Element;
  href?: undefined | null;
  children: BaseNavbarRoute[];
};

export type NavbarRouteType = BaseNavbarRoute | ExtendedNavbarRoute;
