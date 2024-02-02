import { GenericDropdown } from '@/app/components/dropdown';
import { SectionLayout } from '@/app/layouts/section';

export const AboutSection = () => {
  return (
    <SectionLayout className="pb-14 space-y-2 md:space-y-3.5 lg:space-y-3.5 px-7 md:px-7">
      <div className="">
        <h2 className="uppercase text-brand-md md:text-2xl font-bold">
          About Nova Praia
        </h2>
      </div>
      <div className="">
        <p className="text-brand-md font-normal mb-3 line-clamp-4 md:line-clamp-none">
          Nova Praia, located in Costa da Caparica just south of Lisbon, offers
          a diverse surfing experience suitable for all levels, from beginners
          to pros. The area features a sandy bottom with both left and right
          wave directions, accommodating up to 2.5-meter swells. The best wind
          direction for surfing here is from the east, with west being the
          optimal direction for swells.
        </p>
        <div className="max-w-xl">
          <GenericDropdown value="Read more" />
        </div>
      </div>
    </SectionLayout>
  );
};
