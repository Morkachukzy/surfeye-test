'use client';

import { ChevronLeftIcon, MenuIcon, XIcon } from '@/app/_assets/icons';
import { AppLogo } from '@/app/_assets/vectors/logo';
import { NavbarRoute } from './navbar-route';
import { navbarRoutes } from './routes';
import { NavbarTabs } from './tabs';

import { cn } from '@/app/_theme/utils';
import { useState } from 'react';
import { useDisclosure } from '@/app/hooks/use-disclosure';
import { MobileNavbarDrawer } from './mobile-drawer';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const { isOpen, open, close, toggle } = useDisclosure();

  return (
    <>
      <div className="relative z-50 bg-brand-primary rounded-bl-brand-200 md:rounded-b-brand-200 ">
        <div className="bg-brand-light rounded-b-brand-200 py-6 lg:py-2 px-6 lg:px-24 flex items-center gap-6 lg:gap-10">
          <span className="w-6 md:w-7 h-6 md:h-7">
            <ChevronLeftIcon />
          </span>
          <span className="text-2xl lg:text-3xl font-semibold">Nova praia</span>
        </div>
        <div className="relative flex bg-brand-primary pb-3 md:pb-[.875rem] pt-3 md:pt-2 px-8 md:px-20 xl:px-24 items-center justify-center md:justify-between gap-8">
          <span className="flex-1 lg:flex-none flex items-center justify-center">
            <AppLogo className="w-20 md:w-[5rem] lg:w-[6.6875rem]" />
          </span>
          <div
            className={cn(
              'hidden lg:flex flex-row items-start transition-all duration-500 md:gap-6 lg:gap-10 xl:gap-[4.5rem] text-brand-light',
              { 'pt-16': openItems.length > 0 }
            )}
          >
            {navbarRoutes.map((route, index) => (
              <NavbarRoute
                key={index}
                route={route}
                setOpenItems={setOpenItems}
                openItems={openItems}
              />
            ))}
          </div>
          <div className="lg:hidden ml-auto absolute right-[8.4%] flex flex-col">
            <button onClick={toggle}>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              initial={{ y: '-30px', opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.2,
              }}
              exit={{ y: '-30px', opacity: 0 }}
              className="absolute top-full  w-full bg-brand-primary rounded-b-2xl shadow-brand-1200"
            >
              <MobileNavbarDrawer routes={navbarRoutes} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <NavbarTabs />
    </>
  );
};
