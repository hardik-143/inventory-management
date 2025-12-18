import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    if (totalItems <= 1) return;

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
  }, [advance, autoAdvanceMs, totalItems]);

  const activeSlide = totalItems ? clampedItems[activeIndex] : null;
  const progressPercent =
    totalItems <= 1 ? 100 : Math.min(100, (elapsed / autoAdvanceMs) * 100);

  if (!totalItems) {
    return (
      <div className="flex h-dvh items-center justify-center overflow-hidden rounded-3xl border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-400">
        Upload an image to see a live status preview.
      </div>
    );
  }

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-black">
      {/* Background Blur */}
      <div className="absolute inset-0 hidden md:block">
        {clampedItems.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            className={clsx(
              "absolute inset-0 h-full w-full object-cover blur-3xl transition-opacity duration-500",
              index === activeIndex ? "opacity-60" : "opacity-0"
            )}
          />
        ))}
      </div>

      {/* Centered Story */}
      <div className="relative z-10 flex items-center h-full justify-center">
        <div className="relative aspect-9/16 h-full w-auto ">
          {/* Desktop Arrows */}
          <button
            onClick={() =>
              handleSelect((activeIndex - 1 + totalItems) % totalItems)
            }
            className="absolute -left-14 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow md:block"
          >
            <ChevronLeft className="text-black" />
          </button>

          <button
            onClick={() => handleSelect((activeIndex + 1) % totalItems)}
            className="absolute -right-14 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow md:block"
          >
            <ChevronRight className="text-black" />
          </button>

          {/* Mobile Tap Zones */}
          <button
            onClick={() =>
              handleSelect((activeIndex - 1 + totalItems) % totalItems)
            }
            className="absolute inset-y-0 left-0 w-1/3 md:hidden md:z-40"
          />
          <button
            onClick={() => handleSelect((activeIndex + 1) % totalItems)}
            className="absolute inset-y-0 right-0 w-1/3 md:hidden md:z-40"
          />

          {/* Story Card */}
          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-black shadow-xl z-9">
            {/* Progress */}
            <div className="absolute top-3 z-20 flex w-full gap-1 px-4 bg-linear-to-b from-black/90 to-transparent">
              {clampedItems.map((_, index) => {
                const fill =
                  index < activeIndex
                    ? 100
                    : index === activeIndex
                    ? progressPercent
                    : 0;

                return (
                  <div
                    key={index}
                    className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/30"
                  >
                    <span
                      style={{ width: `${fill}%` }}
                      className="absolute inset-y-0 left-0 bg-white transition-all"
                    />
                  </div>
                );
              })}
            </div>

            {/* Image */}
            {clampedItems.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={clsx(
                  "absolute inset-0 h-full w-full object-contain transition-opacity",
                  index === activeIndex ? "opacity-100" : "opacity-0"
                )}
              />
            ))}

            {/* Footer */}
            {activeSlide && (
              <div className="absolute bottom-0 w-full bg-linear-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <h2 className="text-lg font-semibold">{activeSlide.title}</h2>
                {activeSlide.caption && (
                  <p className="text-sm text-white/80">{activeSlide.caption}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusStoryPreview;
