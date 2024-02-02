import { SectionLayout } from '@/app/layouts/section';
import { CompanyInformation } from './company-information';
import { CompanyLegal } from './legal';

export const FooterSection = () => {
  return (
    <SectionLayout className="max-w-none text-brand-light bg-brand-primary rounded-none sm:rounded-t-brand-400">
      <CompanyInformation />
      <CompanyLegal />
    </SectionLayout>
  );
};
