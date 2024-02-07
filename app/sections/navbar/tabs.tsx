'use client';
import { cn } from '@/app/_theme/utils';
import { useHash } from '@/app/hooks/use-hash';
import { SectionLayout } from '@/app/layouts/section';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const navbarRelativeIds = {
  live: 'live',
  analytics: 'analytics',
  recordingArea: 'recording-area',
  forecast: 'forecast',
  about: 'about',
};

const createRelativeUrl = (id: string) => `#${id}`;

const RecAreaLabel = () => {
  return (
    <span className=" not-italic">
      <span className="uppercase text-brand-red not-italic">Rec</span> area
    </span>
  );
};

const routes = [
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
    label: 'Forecast',
    path: navbarRelativeIds.forecast,
  },
  {
    label: 'About',
    path: navbarRelativeIds.about,
  },
];

export const NavbarTabs = () => {
  const urlHash = useHash();
  return (
    <div className="border-b z-50 sticky top-0 bg-brand-light border-brand-primary border-opacity-15 flex items-stretch justify-between">
      {routes.map((route) => (
        <div className="flex-1 text-center" key={route.path}>
          <Link
            className={cn('block text-lg font-semibold pt-2 pb-3', {
              'border-b-2 w-brand-fit mx-auto border-brand-primary ':
                urlHash === route.path,
            })}
            href={createRelativeUrl(route.path)}
          >
            {route.label}
          </Link>
        </div>
      ))}
    </div>
  );
};
