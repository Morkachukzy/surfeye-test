import { nanoid } from 'nanoid';

const latestWaves = [
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/a-nearby-spot.png',
  },
] as const;

const topSurfedWaves = [
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: '/images/recording-area.png',
  },
] as const;

export const waves = {
  latestWaves,
  topSurfedWaves,
} as const;
