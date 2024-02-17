'use client';

import { ChevronDownIcon } from '@/app/_assets/icons';
import { cn } from '@/app/_theme/utils';
import { GenericButton } from '@/app/components/button';
import { useDisclosure } from '@/app/hooks/use-disclosure';
import { SectionLayout } from '@/app/layouts/section';

export const AboutSection = () => {
  const { isOpen: isReadingMore, toggle } = useDisclosure();

  return (
    <SectionLayout
      className="pb-14 space-y-2 md:space-y-3.5 lg:space-y-3.5 px-7 md:px-7"
      relativeId="about"
    >
      <div className="">
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          About Nova Praia
        </h2>
      </div>
      <div className="">
        <p
          className={cn(
            'text-brand-md font-normal mb-3 line-clamp-4 md:line-clamp-3',
            {
              'line-clamp-none md:line-clamp-none': isReadingMore,
            }
          )}
        >
          {isReadingMore
            ? ` Nova Praia, located in Costa da Caparica just south of Lisbon, offers
          a diverse surfing experience suitable for all levels, from beginners
          to pros. The area features Portugal's best beachbreak, heavy,
          sand-bottom barrels, especially in wintertime when it's really
          cranking. And though the waves may look unmakeable when you take off,
          if you hold a high line and hang tight, you're looking at an 85
          percent success rate. The beach is about a half-mile long, flanked on
          the western end by flat rock reef and on the east by Forte São Julião
          da Barra. The area just next to the fort is called The Zone and has
          always been ground zero for Portugal's urban surf culture -- the peaks
          at this end of the beach are more localized and contested than the
          ones farther west. But the waves themselves are highly dependent on
          shifting sandbanks, which need at least one solid swell to break up
          the flat bottom that accumulates over the summertime flatness.The
          waves in July and August are fairly inconsistent, as it's tucked
          pretty far in to get the short-period windswell that lights up the
          beachbreaks around Ericeira and Peniche. But come fall, and straight
          through into spring, the waves march in around the corner, peaking up
          and down the hard-packed sandbars.`
            : `Nova Praia, located in Costa da Caparica just south of Lisbon, offers a diverse surfing experience suitable for all levels, from beginners to pros. The area features a sandy bottom with both left and right wave directions, accommodating up to 2.5-meter swells. The best wind direction for surfing here is from the east, with west being the optimal direction for swells.`}
        </p>
        <div className="max-w-xl">
          <GenericButton
            onClick={toggle}
            variant="secondary"
            className={cn('justify-between gap-8 shadow-brand-300')}
            wide
            small
            rightIcon={
              <ChevronDownIcon
                className={cn('w-4 h-2 stroke-brand-primary transition-all', {
                  'rotate-180': isReadingMore,
                })}
              />
            }
          >
            Read more
          </GenericButton>
        </div>
      </div>
    </SectionLayout>
  );
};
