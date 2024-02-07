'use client';

import { VideoPreviewFinder, WaveVideo } from './preview-finder';
import { useState } from 'react';
import { LiveBadge } from '@/app/components/badge/live';
import { waves } from './mocks/wave-videos';

export const LiveVideos = () => {
  const defaultSelectedWaveType = 'topSurfedWaves';
  const [video, setVideo] = useState<WaveVideo>(
    waves[defaultSelectedWaveType][0]
  );

  return (
    <div className="xl:px-4 pb-7 md:pb-9" id="live">
      <VideoPreview video={video} key={video.id} />
      <VideoPreviewFinder
        defaultSelectedWaveType={defaultSelectedWaveType}
        waves={waves}
        selectedVideo={video}
        setSelectedVideo={setVideo}
      />
    </div>
  );
};

type VideoPreviewProps = {
  video: WaveVideo;
};

export const VideoPreview = ({ video }: VideoPreviewProps) => {
  return (
    <div className="max-w-[60rem] mx-auto w-full aspect-[390/221] lg:aspect-[960/442] xl:rounded-3xl bg-brand-primary relative">
      <video
        className="w-full h-full object-cover lg:rounded-2xl"
        autoPlay
        controls
      >
        <source src={video.url} type="video/mp4" />
      </video>
      <LiveBadge className="top-4 left-4 lg:left-14 lg:top-9" />
    </div>
  );
};
