export type ThemeModeType = "light" | "dark";
export type ShadowSizeType = "none" | "sm" | "md" | "lg" | "xl";
export type ColorScheme =
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "red"
  | "pink"
  | "indigo"
  | "teal";

export type AspectRatioType = "auto" | "5/6" | "4/5" | "1/1" | "16/9";
export type DirectionsType = "ltr" | "rtl";
export type FontFamilyType =
  | "outfit"
  | "montserrat"
  | "lexend"
  | "poppins"
  | "roboto"
  | "inter"
  | "open-sans";
export const colorSchemes: Record<
  ColorScheme,
  {
    primary: string;
    secondary: string;
    hover: string;
    active: string;
    lightShade: string;
  }
> = {
  blue: {
    primary: "rgb(59, 130, 246)",
    secondary: "rgb(191, 219, 254)",
    lightShade: "rgb(219, 234, 254)",
    hover: "rgb(37, 99, 235)",
    active: "rgb(29, 78, 216)",
  },
  purple: {
    primary: "rgb(168, 85, 247)",
    secondary: "rgb(221, 214, 254)",
    lightShade: "rgb(237, 233, 254)",
    hover: "rgb(147, 51, 234)",
    active: "rgb(126, 34, 206)",
  },
  green: {
    primary: "rgb(34, 197, 94)",
    secondary: "rgb(187, 247, 208)",
    lightShade: "rgb(220, 252, 231)",
    hover: "rgb(22, 163, 74)",
    active: "rgb(16, 145, 68)",
  },
  orange: {
    primary: "rgb(249, 115, 22)",
    secondary: "rgb(254, 237, 215)",
    lightShade: "rgb(255, 243, 224)",
    hover: "rgb(234, 88, 12)",
    active: "rgb(216, 65, 8)",
  },
  red: {
    primary: "rgb(239, 68, 68)",
    secondary: "rgb(254, 226, 226)",
    lightShade: "rgb(254, 242, 242)",
    hover: "rgb(220, 38, 38)",
    active: "rgb(185, 28, 28)",
  },
  pink: {
    primary: "rgb(236, 72, 153)",
    secondary: "rgb(252, 231, 243)",
    lightShade: "rgb(253, 242, 248)",
    hover: "rgb(219, 39, 119)",
    active: "rgb(190, 24, 93)",
  },
  indigo: {
    primary: "rgb(99, 102, 241)",
    secondary: "rgb(224, 231, 255)",
    lightShade: "rgb(238, 242, 255)",
    hover: "rgb(79, 70, 229)",
    active: "rgb(67, 56, 202)",
  },
  teal: {
    primary: "rgb(20, 184, 166)",
    secondary: "rgb(204, 251, 241)",
    lightShade: "rgb(236, 254, 255)",
    hover: "rgb(13, 148, 136)",
    active: "rgb(5, 122, 119)",
  },
};

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

export const getTextColor = (theme: "light" | "dark") => {
  if (theme === "light") {
    return "text-slate-900";
  }
  return "text-white";
};

export const getBackgroundColor = (theme: "light" | "dark") => {
  if (theme === "light") {
    return "bg-gradient-to-br from-slate-50 via-white to-slate-100";
  }
  return "bg-slate-950";
};
