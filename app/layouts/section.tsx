'use client';

import { cn } from '@/app/_theme/utils';
import { InfoIcon } from '@/app/_assets/icons';
import Link from 'next/link';
import { ReactNode, useRef } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useRouter } from 'next/navigation';
import { genericDateFormat } from '../_utils/date';

type SectionLayoutProps = Readonly<{
  children?: React.ReactNode;
  className?: string;
  relativeId?: string;
}>;
export const SectionLayout = ({
  children,
  className,
  relativeId,
}: SectionLayoutProps) => {
  // const router = useRouter();
  const [ref, entry] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.8,
    root: null,
    rootMargin: '0px',
  });
  // const first = useRef(0);
  // if (entry?.isIntersecting && relativeId) {
  //   router.push(`#${relativeId}`, { scroll: false });
  //   first.current = entry.intersectionRatio;
  // }

  return (
    <section
      ref={ref}
      className={cn('max-w-brand-section mx-auto ', className)}
      id={relativeId}
    >
      {children}
    </section>
  );
};

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};
export const SectionTitle = ({ className, children }: SectionTitleProps) => {
  return <div className={cn(className)}>{children}</div>;
};

type SectionAltRowProps = {
  className?: string;
  children?: ReactNode;
};
export const SectionAltRow = ({ className, children }: SectionAltRowProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between text-xs italic mt-2 px-6 md:mt-4 md:px-10',
        className
      )}
    >
      {children}
    </div>
  );
};

type SectionInfoLinkProps = {
  name: string;
  className?: string;
  url: string;
};
export const SectionInfoLink = ({
  className,
  name,
  url,
}: SectionInfoLinkProps) => {
  return (
    <div className={cn('flex items-center gap-2 md:gap-3', className)}>
      <InfoIcon />
      <Link href={url} className="font-normal underline">
        {name} explained
      </Link>
    </div>
  );
};

type SectionUpdateInfoProps = {
  className?: string;
  updatedAt: string;
};

export const SectionUpdateInfo = ({
  className,
  updatedAt,
}: SectionUpdateInfoProps) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <span className="font-normal">Last update</span>
      <span className="font-bold">{genericDateFormat(updatedAt)}</span>
    </div>
  );
};
