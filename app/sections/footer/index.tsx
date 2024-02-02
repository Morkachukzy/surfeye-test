import { SectionLayout } from '@/app/layouts/section';
import { CompanyInformation } from './company-information';

export const FooterSection = () => {
  return (
    <SectionLayout className="max-w-none text-white bg-brand-primary rounded-none sm:rounded-t-brand-400">
      <CompanyInformation />
    </SectionLayout>
  );
};
