import React, { createContext, useContext, useState, ReactNode } from "react";

export type ThemeMode = "light" | "dark";
export type LayoutType = "grid" | "masonry" | "carousel";
export type CardStyle = "glass" | "soft" | "outline" | "filled";

export interface GalleryConfig {
  // Theme
  theme: ThemeMode;

  // Colors
  cardBackgroundColor: string;
  cardBorderColor: string;
  textColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;

  // Typography
  fontFamily:
    | "outfit"
    | "montserrat"
    | "lexend"
    | "poppins"
    | "roboto"
    | "open-sans";
  headingFontSize: number; // 16-32
  bodyFontSize: number; // 12-18
  headingFontWeight: 600 | 700 | 800;

  // Layout
  layout: LayoutType;
  gridColumns: number; // 1-4
  gapSize: number; // 2-8 (Tailwind units) - kept for backward compatibility
  horizontalGap: number; // 2-8 - horizontal gap between columns
  verticalGap: number; // 2-8 - vertical gap between rows

  // Card styling
  cardStyle: CardStyle;
  borderRadius: number; // 0-32 (in px)
  shadowSize: "none" | "sm" | "md" | "lg" | "xl";
  cardAspectRatio: "auto" | "5/6" | "4/5" | "1/1" | "16/9";
  cardOpacity: number; // 0.3-1
  cardPadding: number; // 0-8 (Tailwind units)

  // Features
  showBuyButton: boolean;
  buyButtonText: string;
  showAutoShareBadge: boolean;
  showIndexNumber: boolean;
  enableHoverScale: boolean;
  hoverScaleAmount: number; // 1-1.2
  enableHoverGradient: boolean;
  enableImageZoom: boolean;

  // RTL Support
  direction: "ltr" | "rtl";

  // Image
  imageHeight: number; // percentage
  showCaption: boolean;
  captionLines: 1 | 2 | 3 | 4;
}

export const defaultConfig: GalleryConfig = {
  theme: "dark",
  cardBackgroundColor: "rgba(255, 255, 255, 0.05)",
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
  cardBackgroundColor: "rgba(255, 255, 255, 0.9)",
  cardBorderColor: "rgba(0, 0, 0, 0.1)",
  textColor: "rgb(15, 23, 42)",
  accentColor: "rgb(59, 130, 246)",
  gradientFrom: "from-blue-500/10",
  gradientVia: "via-blue-400/5",
  gradientTo: "to-transparent",
};

interface GalleryContextType {
  config: GalleryConfig;
  updateConfig: (updates: Partial<GalleryConfig>) => void;
  applyLightTheme: () => void;
  applyDarkTheme: () => void;
  resetConfig: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<GalleryConfig>(() => {
    const saved = localStorage.getItem("galleryConfig");
    if (saved) {
      const parsedConfig = JSON.parse(saved);
      // Merge with defaults to ensure all properties exist
      return { ...defaultConfig, ...parsedConfig };
    }
    return defaultConfig;
  });

  const updateConfig = (updates: Partial<GalleryConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    localStorage.setItem("galleryConfig", JSON.stringify(newConfig));
  };

  const applyLightTheme = () => {
    const lightConfig = { ...config, ...lightThemeConfig };
    setConfig(lightConfig);
    localStorage.setItem("galleryConfig", JSON.stringify(lightConfig));
  };

  const applyDarkTheme = () => {
    const darkConfig = { ...config, ...defaultConfig };
    setConfig(darkConfig);
    localStorage.setItem("galleryConfig", JSON.stringify(darkConfig));
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
    localStorage.setItem("galleryConfig", JSON.stringify(defaultConfig));
  };

  return (
    <GalleryContext.Provider
      value={{
        config,
        updateConfig,
        applyLightTheme,
        applyDarkTheme,
        resetConfig,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGalleryConfig() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error(
      "useGalleryConfig must be used within a GalleryConfigProvider"
    );
  }
  return context;
}
