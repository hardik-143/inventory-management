export type ThemeMode = "light" | "dark";
export type LayoutType = "grid" | "masonry" | "carousel";
export type CardStyle = "glass" | "soft" | "outline" | "filled";

export interface GalleryConfig {
  theme: ThemeMode;

  galleryBackgroundColor: string;
  cardBackgroundColor: string;
  cardBorderColor: string;
  textColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;

  fontFamily:
    | "outfit"
    | "montserrat"
    | "lexend"
    | "poppins"
    | "roboto"
    | "open-sans";

  headingFontSize: number;
  bodyFontSize: number;
  headingFontWeight: 600 | 700 | 800;

  layout: LayoutType;
  gridColumns: number;
  gapSize: number;
  horizontalGap: number;
  verticalGap: number;

  cardStyle: CardStyle;
  borderRadius: number;
  shadowSize: "none" | "sm" | "md" | "lg" | "xl";
  cardAspectRatio: "auto" | "5/6" | "4/5" | "1/1" | "16/9";
  cardOpacity: number;
  cardPadding: number;

  showBuyButton: boolean;
  buyButtonText: string;
  showAutoShareBadge: boolean;
  showIndexNumber: boolean;
  enableHoverScale: boolean;
  hoverScaleAmount: number;
  enableHoverGradient: boolean;
  enableImageZoom: boolean;

  direction: "ltr" | "rtl";

  imageHeight: number;
  showCaption: boolean;
  captionLines: 1 | 2 | 3 | 4;
}

export interface GalleryContextType {
  config: GalleryConfig;
  updateConfig: (updates: Partial<GalleryConfig>) => void;
  applyLightTheme: () => void;
  applyDarkTheme: () => void;
  resetConfig: () => void;
}
