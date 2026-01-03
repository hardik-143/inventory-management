import { createContext } from "react";
import { GalleryConfig, GalleryContextType } from "./galleryConfig.types";

export const GalleryContext = createContext<GalleryContextType | undefined>(
  undefined
);

export const softBackgroundColors = [
  { name: "Soft White", value: "#FAFAFA" },
  { name: "Cloud Gray", value: "#F4F6F8" },
  { name: "Mist Gray", value: "#EEF1F4" },
  { name: "Pearl Gray", value: "#EDEDED" },

  { name: "Soft Blue", value: "#EAF2FF" },
  { name: "Powder Blue", value: "#DCE9F9" },
  { name: "Sky Wash", value: "#EDF4FF" },

  { name: "Soft Green", value: "#EAF7F0" },
  { name: "Mint Green", value: "#DFF5EA" },
  { name: "Sage Green", value: "#E6F2ED" },

  { name: "Soft Yellow", value: "#FFF8E5" },
  { name: "Butter Yellow", value: "#FFF1C1" },
  { name: "Cream Yellow", value: "#FFF4D6" },

  { name: "Soft Peach", value: "#FFEDE5" },
  { name: "Peach Blush", value: "#FFE2D1" },
  { name: "Coral Mist", value: "#FDE8E4" },

  { name: "Soft Pink", value: "#FCEEF5" },
  { name: "Rose Wash", value: "#F8E1EB" },
  { name: "Blush Pink", value: "#FBE4EA" },

  { name: "Soft Purple", value: "#F3EEFF" },
  { name: "Lavender Mist", value: "#EDE7FA" },
  { name: "Lilac Wash", value: "#F1ECF9" },

  { name: "Soft Teal", value: "#E6F7F6" },
  { name: "Aqua Mist", value: "#DCF2F1" },

  { name: "Soft Brown", value: "#F5EFEA" },
  { name: "Sand Beige", value: "#F3ECDC" },
  ///
  //   { name: "Soft Black", value: "#121212" },
  //   { name: "Charcoal", value: "#1A1A1A" },
  //   { name: "Graphite", value: "#1F1F1F" },
  //   { name: "Ash Gray", value: "#262626" },

  //   { name: "Soft Navy", value: "#1B2230" },
  //   { name: "Midnight Blue", value: "#202A3C" },
  //   { name: "Deep Slate Blue", value: "#242F42" },

  //   { name: "Soft Forest Green", value: "#1F2D28" },
  //   { name: "Deep Sage", value: "#24332E" },
  //   { name: "Muted Teal", value: "#1E3534" },

  //   { name: "Soft Olive", value: "#2B2F24" },
  //   { name: "Dark Moss", value: "#2E3327" },

  //   { name: "Soft Plum", value: "#2B2433" },
  //   { name: "Muted Purple", value: "#322A3D" },
  //   { name: "Deep Lavender", value: "#352F45" },

  //   { name: "Soft Wine", value: "#2E1F26" },
  //   { name: "Muted Rose", value: "#3A262E" },

  //   { name: "Soft Brown", value: "#2A241E" },
  //   { name: "Dark Cocoa", value: "#322A24" },

  //   { name: "Soft Teal Dark", value: "#1C2F2E" },
  //   { name: "Deep Aqua", value: "#213837" },
  ////
  { name: "Obsidian Night", value: "#0F1115" },
  { name: "Smoked Charcoal", value: "#191B1F" },
  { name: "Warm Ash", value: "#22201E" },

  { name: "Deep Space Blue", value: "#141C2B" },
  { name: "Storm Navy", value: "#1C2740" },
  { name: "Dusty Indigo", value: "#262B44" },

  { name: "Pine Shadow", value: "#162521" },
  { name: "Eucalyptus Dark", value: "#1E302A" },
  { name: "Jade Smoke", value: "#203733" },

  { name: "Abyss Teal", value: "#112B2C" },
  { name: "Deep Lagoon", value: "#163A3C" },

  { name: "Midnight Plum", value: "#241A2E" },
  { name: "Royal Grape", value: "#2E2340" },
  { name: "Cosmic Violet", value: "#342A4D" },

  { name: "Dark Cherry", value: "#2A151B" },
  { name: "Wine Ember", value: "#3A1F28" },

  { name: "Dark Walnut", value: "#241C17" },
  { name: "Roasted Cocoa", value: "#2F261F" },

  { name: "Burnt Olive", value: "#2A2F1D" },
  { name: "Desert Night", value: "#33261C" },

  /////
  { name: "Electric Blue", value: "#2979FF" },
  { name: "Neon Sky", value: "#00B4FF" },
  { name: "Royal Azure", value: "#3F51FF" },

  { name: "Emerald Pop", value: "#00C853" },
  { name: "Neon Mint", value: "#1DE9B6" },
  { name: "Lime Spark", value: "#AEEA00" },

  { name: "Crimson Flash", value: "#FF1744" },
  { name: "Fire Orange", value: "#FF6D00" },
  { name: "Sunset Blaze", value: "#FF9100" },

  { name: "Electric Yellow", value: "#FFD600" },
  { name: "Golden Burst", value: "#FFC400" },

  { name: "Hot Pink", value: "#FF4081" },
  { name: "Fuchsia Punch", value: "#E040FB" },

  { name: "Violet Storm", value: "#7C4DFF" },
  { name: "Ultra Purple", value: "#651FFF" },

  { name: "Aqua Pulse", value: "#00E5FF" },
  { name: "Turbo Teal", value: "#00BFA5" },
] as const;

export const defaultConfig: GalleryConfig = {
  theme: "dark",
  galleryBackgroundColor: "#0F1115",
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
  layout: "grid",
  gridColumns: 3,
  gapSize: 6,
  horizontalGap: 6,
  verticalGap: 6,
  cardStyle: "glass",
  borderRadius: 24,
  shadowSize: "lg",
  cardAspectRatio: "5/6",
  cardOpacity: 1,
  cardPadding: 5,
  showBuyButton: true,
  buyButtonText: "Buy Now",
  showAutoShareBadge: true,
  showIndexNumber: true,
  enableHoverScale: true,
  hoverScaleAmount: 1.05,
  enableHoverGradient: true,
  enableImageZoom: true,
  direction: "ltr",
  imageHeight: 100,
  showCaption: true,
  captionLines: 3,
};

export const lightThemeConfig: Partial<GalleryConfig> = {
  theme: "light",
  galleryBackgroundColor: "#FAFAFA",
  cardBackgroundColor: "rgba(255, 255, 255)",
  cardBorderColor: "rgba(0, 0, 0, 0.1)",
  textColor: "rgb(15, 23, 42)",
  accentColor: "rgb(59, 130, 246)",
  gradientFrom: "from-blue-500/10",
  gradientVia: "via-blue-400/5",
  gradientTo: "to-transparent",
};
