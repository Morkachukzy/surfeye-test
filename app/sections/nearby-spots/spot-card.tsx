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
      <div className="relative w-[10.44rem] md:w-[18.56rem]  aspect-[167/109] md:aspect-[298/177] rounded-xl md:rounded-3xl mb-1.5 overflow-hidden">
        <Image
          src={spot.imageUrl}
          alt={spot.name}
          className="object-cover"
          fill
        />
        <StarRating
          size="small"
          level={spot.rating}
          className="absolute z-10 top-2.5 md:top-5 right-4 md:right-6"
        />
        {spot.isTopSpot ? (
          <Badge className="absolute bottom-2 md:bottom-[1.375rem] left-2.5 md:left-5 bg-brand-primary leading-none text-xs md:text-[.625rem] font-semibold text-white py-1.5 md:py-2 px-3 md:px-5 border md:border-2 border-white">
            Top spot today
          </Badge>
        ) : null}
      </div>
      <div className="">
        <p className="text-brand-md md:text-xl font-bold flex items-center gap-1">
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
