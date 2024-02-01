import { SwellIcon, TidesIcon, WindIcon } from '@/app/_assets/icons';

export const spotConditions = [
  {
    label: 'Swell',
    description: 'W to WSW or SW',
    icon: SwellIcon,
  },
  {
    label: 'Wind',
    description: 'East to North',
    icon: WindIcon,
  },
  {
    label: 'Tide',
    description: 'Medium-low',
    icon: TidesIcon,
  },
] as const;
