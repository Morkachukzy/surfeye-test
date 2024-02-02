import Image from 'next/image';

import { cn } from '@/app/_theme/utils';
import type { NearbySpot } from './spots';
import { StarRating } from '@/app/components/star-rating';
import { LocationPinIcon, WaveHeightIcon } from '@/app/_assets/icons';
import { Badge } from '@/app/components/badge';

type NearbySpotCardProps = {
  children?: React.ReactNode;
  className?: string;
  spot: NearbySpot;
};

export const NearbySpotCard = ({
  children,
  className,
  spot,
}: NearbySpotCardProps) => {
  return (
    <div className={cn('', className)}>
      <div className="relative w-[297px]  aspect-[298/177] rounded-3xl mb-1.5 overflow-hidden">
        <Image
          src={spot.imageUrl}
          alt={spot.name}
          className="object-cover"
          fill
        />
        <StarRating
          size="small"
          level={spot.rating}
          className="absolute z-10 top-5 right-6"
        />
        {spot.isTopSpot ? (
          <Badge className="absolute bottom-[1.375rem] left-5 bg-brand-primary leading-none text-[.625rem] text-white md:py-2 md:px-5 border-2 border-white">
            Top spot today
          </Badge>
        ) : null}
      </div>
      <div className="">
        <p className="text-xl font-bold flex items-center gap-1">
          <LocationPinIcon />
          {spot.name}
        </p>
        <div className="flex items-start gap-4">
          <SpotMetrics
            value={spot.waveHeight}
            unit="m"
            icon={<WaveHeightIcon />}
          />
          <SpotMetrics
            value={spot.windSpeed}
            unit="mph"
            icon={<WaveHeightIcon />}
          />
        </div>
      </div>
    </div>
  );
};

type SpotMetricsProps = {
  icon: JSX.Element;
  value: string;
  unit: string;
};
const SpotMetrics = ({ icon: Icon, value, unit }: SpotMetricsProps) => {
  return (
    <div className="flex items-center opacity-45 gap-1">
      {Icon}
      <span className="space-x-1">
        <span className="text-md font-bold">{value}</span>
        <span className="lowercase text-xs font-normal">{unit}</span>
      </span>
    </div>
  );
};
