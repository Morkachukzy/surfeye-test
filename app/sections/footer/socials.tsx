import Link from 'next/link';
import { InstagramIcon, TiktokIcon, YoutubeIcon } from '@/app/_assets/icons';

const socialProfiles = [
  {
    href: 'https://instagram.com/surfeye',
    icon: InstagramIcon,
  },
  {
    href: 'https://youtube.com/surfeye',
    icon: YoutubeIcon,
  },
  {
    href: 'https://tiktok.com/surfeye',
    icon: TiktokIcon,
  },
] as const;

export const CompanySocials = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-0 md:gap-3 xl:gap-5 flex-1">
      <p className="text-xs md:text-xl xl:text-3xl font-bold uppercase">
        Follow Us
      </p>
      <div className="flex items-center justify-center gap-3">
        {socialProfiles.map(({ href, icon: Icon }) => (
          <Link href={href} key={href}>
            <Icon className="w-5 md:w-7 xl:w-10" />
          </Link>
        ))}
      </div>
    </div>
  );
};
