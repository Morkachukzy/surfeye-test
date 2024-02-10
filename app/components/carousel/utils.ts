import { chunk } from '@/app/_utils/chunk';
import { createIntersectionObserver } from '@/app/_utils/create-intersection-observer';

export const MAX_CHUNK_AMOUNT = 3;

export const splitCarouselItemsIntoChunks = <T extends HTMLElement>(
  parent: T,
  chunkLength: number = MAX_CHUNK_AMOUNT
) => {
  const carouselItems = Array.from(
    parent.querySelectorAll('.carousel-item')
  ) as T[];

  return chunk(carouselItems, chunkLength);
};

export const scrollSectionIntoView = <T extends HTMLElement>(
  chunkList: T[][],
  index: number
) => {
  const selectedChunk = chunkList[index - 1];
  const selectedEl =
    index >= MAX_CHUNK_AMOUNT
      ? selectedChunk[selectedChunk.length - 1]
      : selectedChunk[0];

  if (!selectedEl) return;

  selectedEl.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest',
  });
};

export const getMonitoredChunks = <T extends HTMLElement>(chunkList: T[][]) => {
  let monitoredChunks: T[] = [];

  chunkList.forEach((chunk, index) => {
    const chunkLength = chunk.length;
    const monitoredChunkIndex = index === 0 ? 0 : Math.ceil(chunkLength / 2);
    monitoredChunks.push(chunk[monitoredChunkIndex]);
  });
  return monitoredChunks;
};

export const attachObservers = <T extends HTMLElement>(
  parent: T,
  chunkList: T[][],
  // eslint-disable-next-line no-unused-vars
  callback?: (index: number) => void
) => {
  const observerInitOptions = {
    root: parent,
    threshold: 0.9,
  };

  const entryCallback = (entry: IntersectionObserverEntry) => {
    if (entry.intersectionRatio > 0.8) {
      const attributeValue = entry.target.getAttribute('data-observable');
      if (!attributeValue) return;
      const chunkIndex = parseInt(attributeValue);

      callback?.(chunkIndex);
    }
  };

  const monitoredChunks = getMonitoredChunks(chunkList);

  monitoredChunks.forEach((chunk, index) => {
    createIntersectionObserver({
      options: observerInitOptions,
      entryCallback,
      observerCallback: (observer) => {
        chunk.setAttribute('data-observable', `${index + 1}`);

        observer.observe(chunk);
      },
    });
  });
};
