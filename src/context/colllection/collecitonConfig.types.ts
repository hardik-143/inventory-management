import { DirectionType } from "antd/es/config-provider";
import {
  AspectRatioType,
  FontFamilyType,
  ShadowSizeType,
  ThemeModeType,
} from "../common";

export interface CollectionConfig {
  theme: ThemeModeType; //

  pageBackgroundColor: string; //
  cardBackgroundColor: string;
  cardBorderColor: string;
  textColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;

  fontFamily: FontFamilyType;

  headingFontSize: number;
  bodyFontSize: number;
  headingFontWeight: 600 | 700 | 800;

  gridColumns: number;
  gapSize: number;
  horizontalGap: number;
  verticalGap: number;

  showProductId: boolean;
  borderRadius: number;
  shadowSize: ShadowSizeType;
  imageAspectRatio: AspectRatioType;
  cardPadding: number;

  showBuyButton: boolean;
  buyButtonText: string;
  showAutoShareBadge: boolean;
  showIndexNumber: boolean;
  enableHoverScale: boolean;
  hoverScaleAmount: number;
  enableHoverGradient: boolean;
  enableImageZoom: boolean;

  direction: DirectionType;

  imageHeight: number;
  showCaption: boolean;
  captionLines: 1 | 2 | 3 | 4;
}

export interface CollectionContextType {
  config: CollectionConfig;
  updateConfig: (updates: Partial<CollectionConfig>) => void;
  applyLightTheme: () => void;
  applyDarkTheme: () => void;
  resetConfig: () => void;
}
