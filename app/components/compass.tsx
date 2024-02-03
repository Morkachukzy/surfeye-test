import { CompassIcon } from '@/app/_assets/icons';
import { cn } from '../_theme/utils';

const compassDirections = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
] as const;

type CompassDirection = (typeof compassDirections)[number];

type CompassProps = {
  direction?: CompassDirection;
  hideLabel?: boolean;
  className?: string;
};

export const Compass = ({
  direction = 'N',
  hideLabel,
  className,
}: CompassProps) => {
  const angle = getDirectionAngle(direction, compassDirections);
  return (
    <span className={cn('flex flex-col gap-0.5', className)}>
      <CompassIcon
        className="transition-all "
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      />
      {!hideLabel ? (
        <span className="text-xs font-bold leading-none ">{direction}</span>
      ) : null}
    </span>
  );
};

const getDirectionAngle = (
  direction: CompassDirection,
  directions: Readonly<CompassDirection[]>
) => {
  const directionIndex = directions.findIndex((d) => d === direction);

  const directionAngleSegment = directions.length;

  const circularAngle = 360;

  return directionIndex
    ? (directionIndex / directionAngleSegment) * circularAngle
    : 0;
};
