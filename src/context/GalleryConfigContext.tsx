import React, { useState, ReactNode } from "react";
import {
  defaultConfig,
  GalleryContext,
  lightThemeConfig,
} from "./galleryConfig.constants";
import { GalleryConfig } from "./galleryConfig.types";

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
