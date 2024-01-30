import { ChevronLeftIcon, MenuIcon } from '@/app/_assets/icons';
import { AppLogo } from '@/app/_assets/vectors/logo';
import { NavbarRoute } from './navbar-route';
import { navbarRoutes } from './routes';
import { NavbarProfile } from './profile';

export const Navbar = () => {
  return (
    <div className="bg-brand-primary rounded-bl-brand-200 md:rounded-b-brand-200 overflow-hidden">
      <div className="bg-brand-light rounded-b-brand-200 py-6 lg:py-2 px-6 lg:px-24 flex items-center gap-6 lg:gap-10">
        <span className="w-6 md:w-7 h-6 md:h-7">
          <ChevronLeftIcon />
        </span>
        <span className="text-2xl lg:text-3xl italic font-semibold">
          Nova praia
        </span>
      </div>
      <div className="relative flex bg-brand-primary pb-3 md:pb-[.875rem] pt-3 md:pt-2 px-8 md:px-20 xl:px-24 items-center justify-center md:justify-between gap-8">
        <span className="flex-1 lg:flex-none flex items-center justify-center">
          <AppLogo className="w-20 md:w-[5rem] lg:w-[6.6875rem]" />
        </span>
        <div className="hidden lg:flex flex-row md:gap-6 lg:gap-10 xl:gap-[4.5rem] text-brand-light ">
          {navbarRoutes.map((route, index) => (
            <NavbarRoute key={index} route={route} />
          ))}
          <NavbarProfile />
        </div>
        <div className="lg:hidden ml-auto absolute right-[8.4%]">
          <button>
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
