/* eslint-disable no-unused-vars */
type IntersectionObserverInit = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
};
type CreateIntersectionObserverArgs = {
  options: IntersectionObserverInit;
  entryCallback: (entry: IntersectionObserverEntry) => void;
  observerCallback?: (observer: IntersectionObserver) => void;
};

export const createIntersectionObserver = ({
  options,
  entryCallback,
  observerCallback,
}: CreateIntersectionObserverArgs) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entryCallback);
  }, options);

  observerCallback?.(observer);

  const unobserve = (el: HTMLElement) => {
    observer.unobserve(el);
  };
  return { observer, unobserve };
};
