'use client';

import { ChevronDownIcon } from '@/app/_assets/icons';
import { NavbarRouteType } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { useDisclosure } from '@/app/hooks/use-disclosure';
import { cn } from '@/app/_theme/utils';

type MobileNavbarDrawerProps = {
  routes: NavbarRouteType[];
};
export const MobileNavbarDrawer = ({ routes }: MobileNavbarDrawerProps) => {
  return (
    <div className="space-y-10 px-8 pb-20">
      {routes.map((route) => (
        <MobileNavbarDrawerItem key={route.id} route={route} />
      ))}
    </div>
  );
};

type MobileNavbarDrawerItemProps = {
  route: NavbarRouteType;
};
export const MobileNavbarDrawerItem = ({
  route,
}: MobileNavbarDrawerItemProps) => {
  const { isOpen, open, close, toggle } = useDisclosure();

  return (
    <button
      key={route.id}
      className={cn(
        'flex items-start gap-3 leading-none transition-all duration-500 capitalize font-medium text-sm text-white '
      )}
      onClick={toggle}
      id={route.id}
    >
      {getRouteDetails(route, isOpen, {
        containerHeight: route.id === 'profile' ? 40 : 180,
      })}
    </button>
  );
};

type RouteOptions = { containerHeight: number };
const getRouteDetails = (
  route: NavbarRouteType,
  isOpen: boolean = false,
  options: RouteOptions = { containerHeight: 180 }
) => {
  return (
    <span className="">
      <span className="flex items-center justify-start gap-3 leading-none capitalize font-medium">
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
            className="flex flex-col items-start gap-5 font-medium text-brand-md"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{
              height: options.containerHeight,
              opacity: 1,
              marginTop: 20,
            }}
            transition={{
              duration: 0.3,
            }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
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
