import { DownloadIcon, LocationsIcon, PreviewIcon } from '@/app/_assets/icons';

export const features = [
  {
    title: 'Unlimited downloads',
    description: 'To relive, share and improve your surfing with every wave',
    icon: DownloadIcon,
  },
  {
    title: 'All locations',
    description: 'Surf anywhere and get videos from all our cameras',
    icon: LocationsIcon,
  },
  {
    title: 'Full length previews',
    description: 'Watch the full length preview of each wave',
    icon: PreviewIcon,
  },
] as const;
