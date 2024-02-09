import { nanoid } from 'nanoid';

const latestWaves = [
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-2.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-3.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-4.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-5.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-6.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
] as const;

const topSurfedWaves = [
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-6.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-5.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-4.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-3.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-2.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
] as const;

export const waves = {
  live: {
    id: nanoid(),
    name: 'video.mp4',
    url: 'https://www.surfeye.video/web/top-wave-1.mp4',
  },
  latestWaves,
  topSurfedWaves,
} as const;

export type AllWaveVideos = typeof waves;
