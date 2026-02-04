export type HomePageTheme = "dark" | "light";
export type HomePageLayout = "default" | "compact" | "spacious";
export type ColorScheme =
  | "blue"
  | "purple"
  | "green"
  | "orange"
  | "red"
  | "pink"
  | "indigo"
  | "teal";

export interface HomePageConfig {
  navbar: {
    show: boolean;
    height: number;
    type: "floating" | "sticky" | "static";
  };
  accentColor: string;
  showCategoryMenu: boolean;
  primaryColor: string;
  secondaryColor: string;
  hoverColor: string;
  activeColor: string;
  lightShade: string;
  heroSection: {
    show: boolean;
    title: string;
    subtitle: string;
    showSearchBar: boolean;
    searchBarPlaceholder: string;
    searchBarRadius?: number;
    backgroundColor: string;
    textColor?: string;
    verticalPadding?: number;
  };
  productCard: {
    borderRadius: number;
    shadowSize: "none" | "sm" | "md" | "lg" | "xl";
    padding: number;
    showAddToCartButton: boolean;
    showFavoriteIcon: boolean;
  };
  productsSection: {
    backgroundColor: string;
    gapBetweenCards?: number;
    showCategoryMenu: boolean;
  };
  // galleryBackgroundColor: string;
  // cardBackgroundColor: string;
  // cardBorderColor: string;
  // // Theme
  // // theme: HomePageTheme;
  // backgroundColor: string;
  // textColor: string;
  // accentColor: string;
  // fontFamily:
  //   | "outfit"
  //   | "montserrat"
  //   | "lexend"
  //   | "poppins"
  //   | "roboto"
  //   | "open-sans";
  //   showSearchBar: boolean;
  //   searchBarPlaceholder: string;
  //   navbarHeight: number;
  //   showNavbar: boolean;
  // // hoverColor: string;
  // // activeColor: string;
  // primaryColor: string;
  // secondaryColor: string;
  // borderColor: string;
  // // Sections visibility
  // showEcommerceMetrics: boolean;
  // showMonthlySalesChart: boolean;
  // showMonthlyTarget: boolean;
  // showStatisticsChart: boolean;
  // showDemographicCard: boolean;
  // showRecentOrders: boolean;
  // // Header and Banner
  // showNavbar: boolean;
  // showSearchBar: boolean;
  // searchBarPlaceholder: string;
  // navbarHeight: number;
  // // Layout
  // layout: HomePageLayout;
  // cardPadding: number;
  // cardBorderRadius: number;
  // cardShadow: "none" | "sm" | "md" | "lg" | "xl";
  // gapSize: number;
  // // Typography
  // fontFamily:
  //   | "poppins"
  //   | "montserrat"
  //   | "lexend"
  //   | "roboto"
  //   | "open-sans"
  //   | "outfit";
  // headingFontSize: number;
  // bodyFontSize: number;
  // headingFontWeight: 400 | 500 | 600 | 700 | 800;
  // // Effects
  // enableHoverEffect: boolean;
  // enableTransitions: boolean;
  // enableAnimations: boolean;
  // hoverScaleAmount: number;
  // transitionDuration: number; // in milliseconds
  // // Colors
  // colorScheme: ColorScheme;
}

export interface HomePageContextType {
  config: HomePageConfig;
  updateConfig: (updates: Partial<HomePageConfig>) => void;
  applyLightTheme: () => void;
  applyDarkTheme: () => void;
  applyColorScheme: (scheme: ColorScheme) => void;
  resetConfig: () => void;
}
