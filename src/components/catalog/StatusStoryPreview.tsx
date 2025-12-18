import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const AUTO_ADVANCE_MS = 6000;
const STEP_MS = 120;

type StorySlide = {
  id: string;
  title: string;
  caption: string;
  image: string;
  autoShare?: boolean;
};

interface StatusStoryPreviewProps {
  items: StorySlide[];
  autoAdvanceMs?: number;
}

const StatusStoryPreview = ({
  items,
  autoAdvanceMs = AUTO_ADVANCE_MS,
}: StatusStoryPreviewProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const clampedItems = useMemo(() => items.filter(Boolean), [items]);
  const totalItems = clampedItems.length;

  useEffect(() => {
    if (totalItems === 0) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex((prev) => Math.min(prev, totalItems - 1));
  }, [totalItems]);

  const handleSelect = useCallback(
    (nextIndex: number) => {
      if (nextIndex < 0 || nextIndex >= totalItems) return;
      setActiveIndex(nextIndex);
      setElapsed(0);
    },
    [totalItems]
  );

  const advance = useCallback(() => {
    if (totalItems <= 1) return;
    setActiveIndex((prev) => (prev + 1) % totalItems);
    setElapsed(0);
  }, [totalItems]);

  useEffect(() => {
    if (totalItems <= 1 || isPaused) return;

    const timer = window.setInterval(() => {
      setElapsed((prev) => {
        const next = prev + STEP_MS;
        if (next >= autoAdvanceMs) {
          advance();
          return 0;
        }
        return next;
      });
    }, STEP_MS);

    return () => window.clearInterval(timer);
  }, [advance, autoAdvanceMs, totalItems, isPaused]);

  const activeSlide = totalItems ? clampedItems[activeIndex] : null;
  const progressPercent =
    totalItems <= 1 ? 100 : Math.min(100, (elapsed / autoAdvanceMs) * 100);

  if (!totalItems) {
    return (
      <div className="flex h-dvh items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 text-center dark:border-gray-700 dark:from-gray-900 dark:to-gray-800">
        <div className="space-y-2">
          <div className="text-4xl">📸</div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Upload an image to see a live status preview
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Blur */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {clampedItems.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            className={clsx(
              "absolute inset-0 h-full w-full object-cover blur-3xl transition-all duration-700 ease-in-out",
              index === activeIndex
                ? "opacity-60 scale-110"
                : "opacity-0 scale-100"
            )}
          />
        ))}
      </div>

      {/* Centered Story */}
      <div className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center px-3 py-8 sm:px-6 sm:py-12 md:px-10">
        <div className="relative aspect-[9/16] w-full max-w-[min(420px,_100vw-28px)] sm:max-w-sm md:max-w-md">
          {/* Desktop Navigation */}
          <button
            type="button"
            onClick={() =>
              handleSelect((activeIndex - 1 + totalItems) % totalItems)
            }
            className="absolute -left-16 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-2xl backdrop-blur-sm transition-all hover:scale-110 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:block"
            style={{ touchAction: "manipulation" }}
            aria-label="Previous story"
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>

          <button
            type="button"
            onClick={() => handleSelect((activeIndex + 1) % totalItems)}
            className="absolute -right-16 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-2xl backdrop-blur-sm transition-all hover:scale-110 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:block"
            style={{ touchAction: "manipulation" }}
            aria-label="Next story"
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>

          {/* Mobile Tap Zones */}
          <button
            type="button"
            onClick={() =>
              handleSelect((activeIndex - 1 + totalItems) % totalItems)
            }
            className="absolute inset-y-0 left-0 z-20 w-1/3 rounded-l-[28px] bg-transparent md:hidden"
            style={{ touchAction: "manipulation" }}
            aria-label="Previous story"
          />
          <button
            type="button"
            onClick={() => handleSelect((activeIndex + 1) % totalItems)}
            className="absolute inset-y-0 right-0 z-20 w-1/3 rounded-r-[28px] bg-transparent md:hidden"
            style={{ touchAction: "manipulation" }}
            aria-label="Next story"
          />

          {/* Story Card */}
          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900 to-black shadow-2xl ring-1 ring-white/10">
            {/* Progress Bar */}
            <div className="absolute top-0 z-20 flex w-full gap-1.5 p-4 bg-gradient-to-b from-black/60 via-black/20 to-transparent">
              {clampedItems.map((_, index) => {
                const fill =
                  index < activeIndex
                    ? 100
                    : index === activeIndex
                    ? progressPercent
                    : 0;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelect(index)}
                    className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/20 backdrop-blur-sm transition-all hover:h-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label={`Go to story ${index + 1}`}
                  >
                    <span
                      style={{ width: `${fill}%` }}
                      className="absolute inset-y-0 left-0 bg-white transition-all duration-150"
                    />
                  </button>
                );
              })}
            </div>

            {/* Pause/Play Button */}
            {totalItems > 1 && (
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="absolute right-3 top-16 z-20 rounded-full bg-black/40 p-2 backdrop-blur-sm transition-all hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4"
                style={{ touchAction: "manipulation" }}
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <Play className="h-4 w-4 text-white fill-white" />
                ) : (
                  <Pause className="h-4 w-4 text-white fill-white" />
                )}
              </button>
            )}

            {/* Image with Animation */}
            {clampedItems.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={clsx(
                  "absolute inset-0 h-full w-full object-contain transition-all duration-500",
                  index === activeIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                )}
              />
            ))}

            {/* Enhanced Footer */}
            {activeSlide && (
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-white">
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-xl font-bold leading-tight drop-shadow-lg">
                    {activeSlide.title}
                  </h2>
                  {activeSlide.caption && (
                    <p className="text-sm leading-relaxed text-white/90 drop-shadow">
                      {activeSlide.caption}
                    </p>
                  )}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="text-xs text-white/60">
                      {activeIndex + 1} / {totalItems}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusStoryPreview;
