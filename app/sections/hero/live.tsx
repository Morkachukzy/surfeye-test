'use client';

import { VideoPreviewFinder, WaveVideo } from './preview-finder';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { LiveBadge } from '@/app/components/badge/live';
import { waves } from './mocks/wave-videos';

import './video.scss';

export const LiveVideos = () => {
  const defaultSelectedWaveType = 'topSurfedWaves';
  const [video, setVideo] = useState<WaveVideo>(waves.live);

  const videoPreviewRef = useRef<HTMLDivElement>(null);
  const handleSetVideo = (video: WaveVideo) => {
    setVideo(video);
    videoPreviewRef?.current?.focus();
    videoPreviewRef?.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };
  return (
    <div className="xl:px-4 pb-7 md:pb-9">
      <VideoPreview
        ref={videoPreviewRef}
        video={video}
        key={video.id}
        isLive={video.id === waves.live.id}
      />
      <VideoPreviewFinder
        defaultSelectedWaveType={defaultSelectedWaveType}
        waves={waves}
        selectedVideo={video}
        setSelectedVideo={handleSetVideo}
      />
    </div>
  );
};

type VideoPreviewProps = {
  video: WaveVideo;
  isLive?: boolean;
};

export const VideoPreview = forwardRef<HTMLDivElement, VideoPreviewProps>(
  ({ video, isLive }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      console.log('VIDEO', video);
      // if (videoRef.current.readyState) videoRef.current.play();
    }, []);

    return (
      <div
        className="max-w-[60rem] mx-auto w-full aspect-[390/221] lg:aspect-[960/442] xl:rounded-3xl bg-brand-primary relative"
        ref={ref}
      >
        <video
          className="w-full h-full object-cover lg:rounded-2xl"
          muted
          loop
          autoPlay
          playsInline
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={video.url} type="video/mp4" />
        </video>
        {isLive ? (
          <LiveBadge className="top-4 left-4 lg:left-14 lg:top-9 animate-pulse" />
        ) : null}
      </div>
    );
  }
);

VideoPreview.displayName = 'VideoPreview';
