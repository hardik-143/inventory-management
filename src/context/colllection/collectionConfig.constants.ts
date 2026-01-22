import { createContext } from "react";
import {
  CollectionConfig,
  CollectionContextType,
} from "./collecitonConfig.types";

export const CollectionContext = createContext<
  CollectionContextType | undefined
>(undefined);

export const defaultConfig: Partial<CollectionConfig> = {
  theme: "dark",
  pageBackgroundColor: "#0F1115",
  cardBackgroundColor: "#192233",
  cardBorderColor: "rgba(255, 255, 255, 0.1)",
  textColor: "rgb(255, 255, 255)",
  accentColor: "rgb(59, 130, 246)",
  gradientFrom: "from-brand-500/20",
  gradientVia: "via-brand-500/10",
  gradientTo: "to-transparent",
  fontFamily: "poppins",
  headingFontSize: 18,
  bodyFontSize: 14,
  headingFontWeight: 600,
  gridColumns: 3,
  gapSize: 6,
  horizontalGap: 6,
  verticalGap: 6,
  showProductId: false,
  borderRadius: 24,
  shadowSize: "lg",
  imageAspectRatio: "5/6",
  cardPadding: 5,
  showBuyButton: true,
  buyButtonText: "Buy Now",
  showAutoShareBadge: true,
  showIndexNumber: true,
  enableHoverScale: true,
  hoverScaleAmount: 1.05,
  enableHoverGradient: false,
  direction: "ltr",
  imageHeight: 100,
  showCaption: true,
  captionLines: 3,
};

export const lightThemeConfig: Partial<CollectionConfig> = {
  theme: "light",
  pageBackgroundColor: "#FAFAFA",
  cardBackgroundColor: "rgba(255, 255, 255)",
  cardBorderColor: "rgba(0, 0, 0, 0.1)",
  textColor: "rgb(15, 23, 42)",
  accentColor: "rgb(59, 130, 246)",
  gradientFrom: "from-blue-500/10",
  gradientVia: "via-blue-400/5",
  gradientTo: "to-transparent",
};
