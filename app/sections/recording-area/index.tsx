'use client';

import Image from 'next/image';
import { SectionLayout } from '@/app/layouts/section';
import { GenericDropdown } from '@/app/components/dropdown';
import { useState } from 'react';
import { GenericButton } from '@/app/components/button';
import { GoogleMapIcon } from '@/app/_assets/icons';

const dropdownOptions = [
  { label: 'Read more', value: '10' },
  { label: '15 min', value: '15' },
  { label: '30 min', value: '30' },
  { label: '45 min', value: '45' },
  { label: '1 hr', value: '60' },
  { label: '2 hr', value: '120' },
];

export const RecordingAreaSection = () => {
  const [value, setValue] = useState('');
  return (
    <SectionLayout
      className="pb-5 lg:pb-12 space-y-3 px-5"
      relativeId="recording-area"
    >
      <div className="flex items-center justify-between brand-big-tablet:pb-4">
        <h2 className="uppercase text-xl md:text-2xl font-bold">
          Recording area
        </h2>
      </div>
      <div className="flex flex-col brand-big-tablet:flex-row items-stretch gap-5 brand-big-tablet:gap-7 pb-2 md:pb-4">
        <div className="relative flex-1 rounded-3xl overflow-hidden w-full md:w-unset aspect-[357/221]">
          <Image
            src="/images/recording-area.png"
            alt="Recording Area"
            className="object-cover"
            fill
          />
        </div>
        <div className="w-full brand-big-tablet:max-w-sm xl:max-w-brand-md">
          <p className="mb-2 md:mb-4 uppercase font-bold text-brand-md md:text-xl text-left lg:text-center">
            About the recording area
          </p>
          <p className="mb-3 font-normal md:font-medium text-brand-md md:text-lg leading-tight">
            To be recorded by our camera, simply surf within the designated
            Recording area, stretching from Jardim na Praia to the pier. The
            prime time to surf and ensure high-quality footage at this spot is
            during mid to high tide, especially in the mornings or afternoons,
            with ideal wave conditions ranging from 1.5 to 2 meters.
          </p>
          <GenericDropdown
            placeholder="Select recording area"
            value={value}
            options={dropdownOptions}
            onChange={(value) => setValue(value)}
          />

          <div className="shadow-brand-600 rounded-3xl px-6 py-6 lg:px-9 lg:py-10 flex items-center gap-8">
            <div className="flex-1 space-y-4 md:space-y-7">
              <p className="uppercase text-xs md:text-brand-md font-semibold md:font-medium">
                Find our beach partners
              </p>
              <p className="uppercase font-bold text-lg ">Jardim na praia</p>
            </div>
            <div className="relative max-w-[5rem] w-full aspect-[1/1] rounded-2xl overflow-hidden mr-2 md:mr-0">
              <Image
                src="/images/recording-area.png"
                alt="Recording Area"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <GenericButton
          variant="primary"
          rightIcon={<GoogleMapIcon className="w-5 h-5 lg:w-8 lg:h-8" />}
        >
          Get directions
        </GenericButton>
      </div>
    </SectionLayout>
  );
};
