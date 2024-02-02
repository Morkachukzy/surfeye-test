import Image from 'next/image';
import { CompanyAddress } from './address';
import { CompanyContacts } from './contact';
import { CompanySocials } from './socials';

export const CompanyInformation = () => {
  return (
    <div className="py-10 sm:py-16 flex flex-col sm:flex-row items-start gap-8 sm:gap-5 justify-between px-8 sm:px-10">
      <div className="flex flex-row-reverse sm:flex-row items-start gap-5 justify-between flex-1 w-full md:w-[unset]">
        <div className="flex justify-center md:justify-center items-start gap-5 flex-1">
          <div className="w-full max-w-[4.5rem] md:w-full md:max-w-[140px] xl:max-w-[170px] aspect-[170/77] relative ">
            <Image
              src="/images/logo-alt.png"
              alt="Secondary Logo"
              className="object-contain"
              fill
            />
          </div>
        </div>
        <CompanyContacts />
      </div>
      <div className="flex flex-row-reverse  sm:flex-row items-start gap-5 justify-between flex-1 w-full md:w-[unset]">
        <CompanySocials />
        <CompanyAddress />
      </div>
    </div>
  );
};
