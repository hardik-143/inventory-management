import {
  FontFamilyType,
  ShadowSizeType,
  ThemeModeType,
} from "@/context/common";

export const getGridColsClass = (gridColumns: number) => {
  const cols = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };
  return cols[gridColumns as keyof typeof cols];
};

export const getTextColor = (theme: ThemeModeType) => {
  if (theme === "light") {
    return "text-slate-900";
  }
  return "text-white";
};

export const getShadowClasses = (shadowSize: ShadowSizeType) => {
  const shadows = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };
  return shadows[shadowSize];
};

const ratios = {
  "5/6": "aspect-[5/6]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  auto: "aspect-auto",
};
export const getAspectRatioClass = (cardAspectRatio: keyof typeof ratios) => {
  return ratios[cardAspectRatio as keyof typeof ratios] || "aspect-[5/6]";
};

export const getFontFamilyClass = (fontFamily: FontFamilyType) => {
  const fonts = {
    // sans: "font-sans",
    // serif: "font-serif",
    //   mono: "font-mono",
    // system: "font-system",
    outfit: "font-outfit",
    montserrat: "font-montserrat",
    lexend: "font-lexend",
    poppins: "font-poppins",
    roboto: "font-roboto",
    inter: "font-inter",
    "open-sans": "font-open-sans",
  };
  return fonts[fontFamily];
};
