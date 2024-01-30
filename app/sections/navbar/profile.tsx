import { ChevronDownIcon, UserIcon } from '@/app/_assets/icons';

export const NavbarProfile = () => {
  return (
    <button className="flex items-center gap-4">
      <UserIcon />
      <ChevronDownIcon />
    </button>
  );
};
