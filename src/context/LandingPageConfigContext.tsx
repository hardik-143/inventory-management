import React, { useState, ReactNode } from "react";
import {
  defaultHomeConfig,
  HomePageContext,
  lightThemeHomeConfig,
  colorSchemes,
} from "./landingPageConfig.constants";
import type { HomePageConfig, ColorScheme } from "./landingPageConfig.types";

export { HomePageContext };

export function LandingPageConfigProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [config, setConfig] = useState<HomePageConfig>(() => {
    const saved = localStorage.getItem("homePageConfig");
    if (saved) {
      const parsedConfig = JSON.parse(saved);
      return { ...defaultHomeConfig, ...parsedConfig };
    }
    return defaultHomeConfig;
  });

  const updateConfig = (updates: Partial<HomePageConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    localStorage.setItem("homePageConfig", JSON.stringify(newConfig));
  };

  const applyLightTheme = () => {
    const lightConfig = { ...config, ...lightThemeHomeConfig };
    setConfig(lightConfig);
    localStorage.setItem("homePageConfig", JSON.stringify(lightConfig));
  };

  const applyDarkTheme = () => {
    const darkConfig = { ...config, ...defaultHomeConfig };
    setConfig(darkConfig);
    localStorage.setItem("homePageConfig", JSON.stringify(darkConfig));
  };

  const applyColorScheme = (scheme: ColorScheme) => {
    const schemeColors = colorSchemes[scheme];
    const newConfig = {
      ...config,
      colorScheme: scheme,
      lightShade: schemeColors.lightShade,
      primaryColor: schemeColors.primary,
      secondaryColor: schemeColors.secondary,
      hoverColor: schemeColors.hover,
      activeColor: schemeColors.active,
      accentColor: schemeColors.primary,
    };
    setConfig(newConfig);
    localStorage.setItem("homePageConfig", JSON.stringify(newConfig));
  };

  const resetConfig = () => {
    setConfig(defaultHomeConfig);
    localStorage.setItem("homePageConfig", JSON.stringify(defaultHomeConfig));
  };

  return (
    <HomePageContext.Provider
      value={{
        config,
        updateConfig,
        applyLightTheme,
        applyDarkTheme,
        applyColorScheme,
        resetConfig,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
}
