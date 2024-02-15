'use client';

import { ChevronDownIcon } from '@/app/_assets/icons';
import { cn } from '@/app/_theme/utils';
import { useDisclosure } from '@/app/hooks/use-disclosure';
import { AnimatePresence, motion } from 'framer-motion';
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
  setOpenItems?: (isOpen: string[]) => void;
  openItems?: string[];
};

export const NavbarRoute = ({
  route,
  setOpenItems,
  openItems = [],
}: NavbarRouteProps) => {
  const { isOpen, open, close, toggle } = useDisclosure();

  const toggleIsOpen = () => {
    const value = !isOpen;
    toggle();
    if (value) {
      setOpenItems?.([...openItems, route.label]);
      return;
    }
    setOpenItems?.(openItems.filter((item) => item !== route.label));
  };
  return (
    <>
      {route.children ? (
        <button
          className={cn(
            'flex items-start gap-3 leading-none transition-all duration-500 uppercase font-semibold'
          )}
          onClick={toggleIsOpen}
        >
          {getRouteDetails(route, isOpen)}
        </button>
      ) : (
        <Link
          className={cn(
            'flex items-start gap-3 leading-none uppercase font-semibold'
          )}
          href={route.href}
        >
          {getRouteDetails(route)}
        </Link>
      )}
    </>
  );
};

const getRouteDetails = (route: NavbarRouteType, isOpen: boolean = false) => {
  return (
    <span className="">
      <span className="flex items-center justify-end gap-3 leading-none uppercase font-semibold">
        <span>{route.label}</span>
        <span>
          {route.children ? (
            <ChevronDownIcon
              className={cn('transition-all', { 'rotate-180': isOpen })}
            />
          ) : null}
        </span>
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            className="flex flex-col items-end gap-5 font-medium text-brand-md"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 130, opacity: 1, marginTop: 20 }}
            transition={{
              duration: 0.3,
            }}
            exit={{ height: 0, opacity: 0 }}
          >
            {route.children?.map((childRoute) => (
              <a key={childRoute.href}>{childRoute.label}</a>
            ))}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </span>
  );
};
