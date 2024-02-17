'use client';
import { useNavRoute } from '@/app/_store/navbar';
import { cn } from '@/app/_theme/utils';

const navbarRelativeIds = {
  live: 'live',
  analytics: 'analytics',
  recordingArea: 'recording-area',
  forecast: 'forecasts',
  about: 'about',
};
const RecAreaLabel = () => {
  return (
    <span className=" not-italic">
      <span className="uppercase text-brand-red not-italic">Rec</span> area
    </span>
  );
};

export const routes = [
  {
    label: 'Live',
    path: navbarRelativeIds.live,
  },
  {
    label: 'Analytics',
    path: navbarRelativeIds.analytics,
  },
  {
    label: <RecAreaLabel />,
    path: navbarRelativeIds.recordingArea,
  },
  {
    label: 'Forecasts',
    path: navbarRelativeIds.forecast,
  },
  {
    label: 'About',
    path: navbarRelativeIds.about,
  },
];

export const NavbarTabs = () => {
  const currentRoute = useNavRoute((state) => state.currentRoute);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop - 59,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="border-b z-30 sticky top-0 bg-brand-light border-brand-primary border-opacity-15 flex items-stretch justify-between">
      {routes.map((route, index) => (
        <div
          className="flex-1 text-center justify-between gap-5"
          key={route.path}
        >
          <button
            className={cn(
              'inline-block w-brand-fit not-italic -mb-[1px] text-[15px] md:text-lg font-semibold pt-2 pb-2 md:pb-3',
              {
                'border-b-2 mx-auto border-brand-primary ':
                  currentRoute === route.path,
              }
            )}
            onClick={() => handleClick(route.path)}
          >
            {route.label}
          </button>
        </div>
      ))}
    </div>
  );
};
