import { ChevronLeftIcon } from '@/app/_assets/icons';
import { AppLogo } from '@/app/_assets/vectors/logo';
import { NavbarRoute } from './navbar-route';
import { navbarRoutes } from './routes';

export const Navbar = () => {
  return (
    <div className="bg-brand-primary rounded-b-brand-200 overflow-hidden">
      <div className="bg-brand-light rounded-b-brand-200 p-2 px-20 flex items-center gap-10">
        <ChevronLeftIcon />
        <span className="text-3xl italic font-semibold">Nova praia</span>
      </div>
      <div className="bg-brand-primary pb-[.875rem] pt-2 px-20 flex items-center justify-between">
        <AppLogo />
        <div className="flex flex-row gap-[4.5rem] text-brand-light ">
          {navbarRoutes.map((route, index) => (
            <NavbarRoute key={index} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
};
