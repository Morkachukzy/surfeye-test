'use client';

import { VideoPreviewFinder, WaveVideo } from './preview-finder';
import { useState } from 'react';
import { LiveBadge } from '@/app/components/badge/live';

export const LiveVideos = () => {
  const [video, setVideo] = useState<WaveVideo | null>(null);
  return (
    <div className="xl:px-4 pb-7 md:pb-9">
      <VideoPreview />
      <VideoPreviewFinder selectedVideo={video} setSelectedVideo={setVideo} />
    </div>
  );
};

export const VideoPreview = () => {
  return (
    <div className="max-w-[60rem] mx-auto w-full aspect-[390/221] lg:aspect-[960/442] xl:rounded-3xl bg-brand-primary relative">
      <LiveBadge />
    </div>
  );
};
