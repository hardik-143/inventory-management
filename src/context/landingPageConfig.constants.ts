import { createContext } from "react";
import {
  HomePageConfig,
  HomePageContextType,
  ColorScheme,
} from "./landingPageConfig.types";

export const HomePageContext = createContext<HomePageContextType | undefined>(
  undefined,
);

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

export const defaultHomeConfig: HomePageConfig = {
  accentColor: "rgb(59, 130, 246)",
  primaryColor: "rgb(59, 130, 246)",
  secondaryColor: "rgb(191, 219, 254)",
  hoverColor: "rgb(37, 99, 235)",
  activeColor: "rgb(29, 78, 216)",
  lightShade: "rgb(219, 234, 254)",
  navbar: {
    height: 64,
    show: true,
  },
  showCategoryMenu: true,
  heroSection: {
    show: true,
    title: "Welcome to Our Store",
    subtitle: "Find the best products here",
    showSearchBar: true,
    searchBarPlaceholder: "Search anything...",
    searchBarRadius: 8,
    backgroundColor: "#FAFAFA",
    textColor: "#0F1115",
    verticalPadding: 80,
  },
  productCard: {
    borderRadius: 12,
    shadowSize: "lg",
    padding: 4,
    showAddToCartButton: true,
    showFavoriteIcon: true,
  },
  productsSection: {
    backgroundColor: "#FFFFFF",
  },

  // accentColor: colorSchemes.blue.primary,
  // galleryBackgroundColor: "#0F1115",
  // cardBackgroundColor: "#192233",
  // cardBorderColor: "rgba(255, 255, 255, 0.1)",
  // textColor: "rgb(255, 255, 255)",
  // // Theme
  // // theme: "dark",
  // backgroundColor: "#0F1115",
  // showNavbar: true,
  // showSearchBar: true,
  // searchBarPlaceholder: "Search...",
  // navbarHeight: 64,
  // // accentColor: "rgb(59, 130, 246)",
  // // hoverColor: "rgb(37, 99, 235)",
  // // activeColor: "rgb(29, 78, 216)",
  // primaryColor: colorSchemes.blue.primary,
  // secondaryColor: colorSchemes.blue.secondary,
  // borderColor: "rgba(255, 255, 255, 0.1)",
  // Sections visibility
  // showEcommerceMetrics: true,
  // showMonthlySalesChart: true,
  // showMonthlyTarget: true,
  // showStatisticsChart: true,
  // showDemographicCard: true,
  // showRecentOrders: true,
  // Header and Banner
  // showNavbar: true,
  // showSearchBar: true,
  // searchBarPlaceholder: "Search...",
  // navbarHeight: 64,
  // Layout
  // layout: "default",
  // cardPadding: 6,
  // cardBorderRadius: 12,
  // cardShadow: "lg",
  // gapSize: 6,
  // Typography
  // fontFamily: "poppins",
  // headingFontSize: 18,
  // bodyFontSize: 14,
  // headingFontWeight: 600,
  // Effects
  // enableHoverEffect: true,
  // enableTransitions: true,
  // enableAnimations: true,
  // hoverScaleAmount: 1.02,
  // transitionDuration: 300,
  // Colors
  // colorScheme: "blue",
};

export const lightThemeHomeConfig: Partial<HomePageConfig> = {
  // theme: "light",
  // backgroundColor: "#FAFAFA",
  // textColor: "rgb(15, 23, 42)",
  // borderColor: "rgba(0, 0, 0, 0.1)",
};
