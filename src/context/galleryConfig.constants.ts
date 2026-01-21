import { createContext } from "react";
import { GalleryConfig, GalleryContextType } from "./galleryConfig.types";

export const GalleryContext = createContext<GalleryContextType | undefined>(
  undefined,
);

export const softBackgroundColors = [
  { name: "Soft White", value: "#FAFAFA", textColor: "#0F1115" },
  { name: "Cloud Gray", value: "#F4F6F8", textColor: "#0F1115" },
  { name: "Mist Gray", value: "#EEF1F4", textColor: "#0F1115" },
  { name: "Pearl Gray", value: "#EDEDED", textColor: "#0F1115" },

  { name: "Soft Blue", value: "#EAF2FF", textColor: "#0F1115" },
  { name: "Powder Blue", value: "#DCE9F9", textColor: "#0F1115" },
  { name: "Sky Wash", value: "#EDF4FF", textColor: "#0F1115" },

  { name: "Soft Green", value: "#EAF7F0", textColor: "#0F1115" },
  { name: "Mint Green", value: "#DFF5EA", textColor: "#0F1115" },
  { name: "Sage Green", value: "#E6F2ED", textColor: "#0F1115" },

  { name: "Soft Yellow", value: "#FFF8E5", textColor: "#0F1115" },
  { name: "Butter Yellow", value: "#FFF1C1", textColor: "#0F1115" },
  { name: "Cream Yellow", value: "#FFF4D6", textColor: "#0F1115" },

  { name: "Soft Peach", value: "#FFEDE5", textColor: "#0F1115" },
  { name: "Peach Blush", value: "#FFE2D1", textColor: "#0F1115" },
  { name: "Coral Mist", value: "#FDE8E4", textColor: "#0F1115" },

  { name: "Soft Pink", value: "#FCEEF5", textColor: "#0F1115" },
  { name: "Rose Wash", value: "#F8E1EB", textColor: "#0F1115" },
  { name: "Blush Pink", value: "#FBE4EA", textColor: "#0F1115" },

  { name: "Soft Purple", value: "#F3EEFF", textColor: "#0F1115" },
  { name: "Lavender Mist", value: "#EDE7FA", textColor: "#0F1115" },
  { name: "Lilac Wash", value: "#F1ECF9", textColor: "#0F1115" },

  { name: "Soft Teal", value: "#E6F7F6", textColor: "#0F1115" },
  { name: "Aqua Mist", value: "#DCF2F1", textColor: "#0F1115" },

  { name: "Soft Brown", value: "#F5EFEA", textColor: "#0F1115" },
  { name: "Sand Beige", value: "#F3ECDC", textColor: "#0F1115" },
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
  { name: "Obsidian Night", value: "#0F1115", textColor: "#FAFAFA" },
  { name: "Smoked Charcoal", value: "#191B1F", textColor: "#FAFAFA" },
  { name: "Warm Ash", value: "#22201E", textColor: "#FAFAFA" },

  { name: "Deep Space Blue", value: "#141C2B", textColor: "#FAFAFA" },
  { name: "Storm Navy", value: "#1C2740", textColor: "#FAFAFA" },
  { name: "Dusty Indigo", value: "#262B44", textColor: "#FAFAFA" },

  { name: "Pine Shadow", value: "#162521", textColor: "#FAFAFA" },
  { name: "Eucalyptus Dark", value: "#1E302A", textColor: "#FAFAFA" },
  { name: "Jade Smoke", value: "#203733", textColor: "#FAFAFA" },

  { name: "Abyss Teal", value: "#112B2C", textColor: "#FAFAFA" },
  { name: "Deep Lagoon", value: "#163A3C", textColor: "#FAFAFA" },

  { name: "Midnight Plum", value: "#241A2E", textColor: "#FAFAFA" },
  { name: "Royal Grape", value: "#2E2340", textColor: "#FAFAFA" },
  { name: "Cosmic Violet", value: "#342A4D", textColor: "#FAFAFA" },

  { name: "Dark Cherry", value: "#2A151B", textColor: "#FAFAFA" },
  { name: "Wine Ember", value: "#3A1F28", textColor: "#FAFAFA" },

  { name: "Dark Walnut", value: "#241C17", textColor: "#FAFAFA" },
  { name: "Roasted Cocoa", value: "#2F261F", textColor: "#FAFAFA" },

  { name: "Burnt Olive", value: "#2A2F1D", textColor: "#FAFAFA" },
  { name: "Desert Night", value: "#33261C", textColor: "#FAFAFA" },

  /////
  { name: "Electric Blue", value: "#2979FF", textColor: "#0F1115" },
  { name: "Neon Sky", value: "#00B4FF", textColor: "#0F1115" },
  { name: "Royal Azure", value: "#3F51FF", textColor: "#FAFAFA" },

  { name: "Emerald Pop", value: "#00C853", textColor: "#0F1115" },
  { name: "Neon Mint", value: "#1DE9B6", textColor: "#0F1115" },
  { name: "Lime Spark", value: "#AEEA00", textColor: "#0F1115" },

  { name: "Crimson Flash", value: "#FF1744", textColor: "#0F1115" },
  { name: "Fire Orange", value: "#FF6D00", textColor: "#0F1115" },
  { name: "Sunset Blaze", value: "#FF9100", textColor: "#0F1115" },

  { name: "Electric Yellow", value: "#FFD600", textColor: "#0F1115" },
  { name: "Golden Burst", value: "#FFC400", textColor: "#0F1115" },

  { name: "Hot Pink", value: "#FF4081", textColor: "#0F1115" },
  { name: "Fuchsia Punch", value: "#E040FB", textColor: "#0F1115" },

  { name: "Violet Storm", value: "#7C4DFF", textColor: "#FAFAFA" },
  { name: "Ultra Purple", value: "#651FFF", textColor: "#FAFAFA" },
  { name: "Aqua Pulse", value: "#00E5FF", textColor: "#0F1115" },
  { name: "Turbo Teal", value: "#00BFA5", textColor: "#0F1115" },
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
