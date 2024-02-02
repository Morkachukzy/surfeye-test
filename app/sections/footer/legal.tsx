import Link from 'next/link';
import { Fragment } from 'react';

const companyLegalLinks = [
  {
    label: 'Terms and conditions',
    href: '/terms-and-conditions',
  },
  {
    label: 'Privacy policy',
    href: '/privacy-policy',
  },
  {
    label: 'Cookie policy',
    href: '/cookie-policy',
  },
  {
    label: 'ⓒ 2023 Surf Eye',
  },
];

export const CompanyLegal = () => {
  return (
    <div className="hidden sm:flex shadow-brand-1000 py-5 px-16 lg:px-[5.5rem] items-center justify-between">
      {companyLegalLinks.map((link) => (
        <Fragment key={link.label}>
          {link.href ? (
            <Link
              className="uppercase font-normal  text-xs md:text-brand-md xl:text-2xl"
              href={link.href}
            >
              {link.label}
            </Link>
          ) : (
            <span className="uppercase font-normal text-xs md:text-brand-md xl:text-2xl">
              {link.label}
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};
