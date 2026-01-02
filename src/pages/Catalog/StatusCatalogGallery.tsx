import { useMemo } from "react";
import { useLocation } from "react-router";
import clsx from "clsx";
import type { StatusItem } from "./StatusCatalog.tsx";
import { initialStatuses } from "./StatusCatalog.tsx";
import { useGalleryConfig } from "../../context/GalleryConfigContext";
import GalleryConfigPanel from "../../components/catalog/GalleryConfigPanel";

type LocationState = {
  items?: StatusItem[];
};

const getResolvedItems = (items?: StatusItem[] | null) => {
  if (Array.isArray(items) && items.length > 0) {
    return items;
  }
  return initialStatuses;
};

export default function StatusCatalogGallery() {
  const location = useLocation();
  const state = (location.state as LocationState | null) ?? null;
  const { config } = useGalleryConfig();

  const galleryItems = useMemo(
    () => getResolvedItems(state?.items),
    [state?.items]
  );

  const getBackgroundColor = () => {
    if (config.theme === "light") {
      return "bg-gradient-to-br from-slate-50 via-white to-slate-100";
    }
    return "bg-slate-950";
  };

  const getBackgroundGradient = () => {
    if (config.theme === "light") {
      return "bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.98),_rgba(241,245,249,0.75))]";
    }
    return "bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.98),_rgba(15,23,42,0.75))]";
  };

  const getTextColor = () => {
    if (config.theme === "light") {
      return "text-slate-900";
    }
    return "text-white";
  };

  const getShadowClasses = () => {
    const shadows = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    };
    return shadows[config.shadowSize];
  };

  const getGridColsClass = () => {
    const cols = {
      1: "grid-cols-1",
      2: "sm:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
    };
    return cols[config.gridColumns as keyof typeof cols];
  };

  const getFontFamilyClass = () => {
    const fonts = {
      // sans: "font-sans",
      // serif: "font-serif",
      // mono: "font-mono",
      // system: "font-system",
      outfit: "font-outfit",
      montserrat: "font-montserrat",
      lexend: "font-lexend",
      poppins: "font-poppins",
      roboto: "font-roboto",
      "open-sans": "font-open-sans",
    };
    return fonts[config.fontFamily];
  };

  const getAspectRatioClass = () => {
    const ratios = {
      "5/6": "aspect-[5/6]",
      "4/5": "aspect-[4/5]",
      "1/1": "aspect-square",
      "16/9": "aspect-video",
      auto: "aspect-auto",
    };
    return (
      ratios[config.cardAspectRatio as keyof typeof ratios] || "aspect-[5/6]"
    );
  };

  const getCardStyles = () => {
    const baseStyle = {
      backgroundColor: config.cardBackgroundColor,
      borderColor: config.cardBorderColor,
      color: config.textColor,
    };

    const styleMap = {
      glass: "border border-white/10 backdrop-blur-xl bg-white/5",
      soft: "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800",
      outline: "border-2 bg-transparent",
      filled: "border-0 shadow-md",
    };

    return {
      className: styleMap[config.cardStyle],
      style: baseStyle,
    };
  };

  // Generate random height for masonry layout
  const getRandomMasonryHeight = (index: number) => {
    // Use index as seed for consistent heights across renders
    const seed = Math.sin(index * 12.9898) * 43758.5453;
    const random = seed - Math.floor(seed);
    // Heights between 250px and 400px for variety
    return 250 + random * 150;
  };

  const renderMasonry = () => {
    return (
      <div
        className={clsx("mx-auto py-10 px-4 sm:px-8", "max-w-7xl")}
        style={{
          direction: config.direction as "ltr" | "rtl",
          columnCount: config.gridColumns,
          columnGap: `${config.horizontalGap * 0.25}rem`,
        }}
      >
        {galleryItems.map((item, index) => (
          <article
            key={item.id}
            className={clsx(
              "group relative overflow-hidden rounded-lg transition break-inside-avoid",
              getShadowClasses(),
              config.enableHoverScale && "hover:shadow-2xl",
              getCardStyles().className
            )}
            style={{
              borderRadius: `${config.borderRadius}px`,
              marginBottom: `${config.verticalGap * 0.25}rem`,
              ...getCardStyles().style,
            }}
          >
            <div
              className={clsx(
                "relative overflow-hidden",
                config.layout !== "masonry" && getAspectRatioClass()
              )}
              style={
                config.layout === "masonry"
                  ? { height: `${getRandomMasonryHeight(index)}px` }
                  : undefined
              }
            >
              <img
                src={item.preview}
                alt={item.name}
                className={clsx(
                  "h-full w-full object-cover transition-transform duration-500",
                  config.enableHoverScale && "group-hover:scale-105"
                )}
                loading="lazy"
              />
              {config.enableHoverGradient && (
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), transparent)`,
                  }}
                />
              )}
            </div>
            <div
              className={clsx(
                "relative space-y-3 px-5 pb-6 pt-5",
                getFontFamilyClass()
              )}
              style={{
                padding: `${config.cardPadding * 0.25}rem`,
              }}
            >
              {config.showAutoShareBadge || config.showIndexNumber ? (
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] opacity-75">
                  {config.showAutoShareBadge && (
                    <span>{item.autoShare ? "Auto-share" : "Manual"}</span>
                  )}
                  {config.showIndexNumber && (
                    <span>#{String(index + 1).padStart(2, "0")}</span>
                  )}
                </div>
              ) : null}
              <h2
                className="font-semibold leading-tight"
                style={{
                  fontSize: `${config.headingFontSize}px`,
                  fontWeight: config.headingFontWeight,
                }}
              >
                {item.name}
              </h2>
              {config.showCaption && item.caption && (
                <p
                  className="opacity-75"
                  style={{
                    fontSize: `${config.bodyFontSize}px`,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: config.captionLines,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.caption}
                </p>
              )}
              {config.showBuyButton && (
                <button
                  className="mt-4 w-full px-4 py-2 rounded-lg font-medium transition"
                  style={{
                    backgroundColor: config.accentColor,
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                    e.currentTarget.style.transform = `scale(${
                      config.hoverScaleAmount ?? 1.05
                    })`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {config.buyButtonText}
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    );
  };

  const renderGrid = () => {
    return (
      <div
        className={clsx(
          "mx-auto grid max-w-7xl py-10 px-4 sm:px-8",
          `grid-cols-1`,
          getGridColsClass()
        )}
        style={{
          direction: config.direction as "ltr" | "rtl",
          columnGap: `${config.horizontalGap * 0.25}rem`,
          rowGap: `${config.verticalGap * 0.25}rem`,
        }}
      >
        {galleryItems.map((item, index) => (
          <article
            key={item.id}
            className={clsx(
              "group relative overflow-hidden rounded-lg transition",
              config.layout === "masonry" && "break-inside-avoid mb-6",
              getShadowClasses(),
              config.enableHoverScale && "hover:shadow-2xl",
              getCardStyles().className
            )}
            style={{
              borderRadius: `${config.borderRadius}px`,
              ...getCardStyles().style,
            }}
          >
            <div
              className={clsx(
                "relative overflow-hidden",
                getAspectRatioClass()
              )}
            >
              <img
                src={item.preview}
                alt={item.name}
                className={clsx(
                  "h-full w-full object-cover transition-transform duration-500",
                  config.enableHoverScale && "group-hover:scale-105"
                )}
                loading="lazy"
              />
              {config.enableHoverGradient && (
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), transparent)`,
                  }}
                />
              )}
            </div>
            <div
              className={clsx(
                "relative space-y-3 px-5 pb-6 pt-5",
                getFontFamilyClass()
              )}
              style={{
                padding: `${config.cardPadding * 0.25}rem`,
              }}
            >
              {config.showAutoShareBadge || config.showIndexNumber ? (
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] opacity-75">
                  {config.showAutoShareBadge && (
                    <span>{item.autoShare ? "Auto-share" : "Manual"}</span>
                  )}
                  {config.showIndexNumber && (
                    <span>#{String(index + 1).padStart(2, "0")}</span>
                  )}
                </div>
              ) : null}
              <h2
                className="font-semibold leading-tight"
                style={{
                  fontSize: `${config.headingFontSize}px`,
                  fontWeight: config.headingFontWeight,
                }}
              >
                {item.name}
              </h2>
              {config.showCaption && item.caption && (
                <p
                  className="opacity-75"
                  style={{
                    fontSize: `${config.bodyFontSize}px`,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: config.captionLines,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.caption}
                </p>
              )}
              {config.showBuyButton && (
                <button
                  className="mt-4 w-full px-4 py-2 rounded-lg font-medium transition"
                  style={{
                    backgroundColor: config.accentColor,
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                    e.currentTarget.style.transform = `scale(${config.hoverScaleAmount})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {config.buyButtonText}
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "relative min-h-dvh w-full overflow-hidden",
        getBackgroundColor()
      )}
      style={{
        direction: config.direction as "ltr" | "rtl",
      }}
    >
      <div className={clsx("absolute inset-0", getBackgroundGradient())} />
      <div
        className={clsx(
          "relative z-10 flex min-h-dvh w-full flex-col",
          getTextColor()
        )}
      >
        <GalleryConfigPanel />

        <main className="flex-1 overflow-y-auto">
          {config.layout === "grid" && renderGrid()}
          {config.layout === "masonry" && renderMasonry()}
        </main>
      </div>
    </div>
  );
}
