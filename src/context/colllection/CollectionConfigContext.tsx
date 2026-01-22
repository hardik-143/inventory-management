import React, { useState, ReactNode } from "react";
import {
  defaultConfig,
  CollectionContext,
  lightThemeConfig,
} from "./collectionConfig.constants";
import { CollectionConfig } from "./collecitonConfig.types";

export function CollectionConfigProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [config, setConfig] = useState<CollectionConfig>(() => {
    const saved = localStorage.getItem("galleryConfig");
    if (saved) {
      const parsedConfig = JSON.parse(saved);
      // Merge with defaults to ensure all properties exist
      return { ...defaultConfig, ...parsedConfig };
    }
    return defaultConfig;
  });

  const updateConfig = (updates: Partial<CollectionConfig>) => {
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
    setConfig(defaultConfig as CollectionConfig);
    localStorage.setItem("galleryConfig", JSON.stringify(defaultConfig));
  };

  return (
    <CollectionContext.Provider
      value={{
        config,
        updateConfig,
        applyLightTheme,
        applyDarkTheme,
        resetConfig,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}
