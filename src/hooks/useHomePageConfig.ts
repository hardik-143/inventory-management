import { useContext } from "react";
import { HomePageContext } from "../context/LandingPageConfigContext";

export function useHomePageConfig() {
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error(
      "useHomePageConfig must be used within LandingPageConfigProvider"
    );
  }
  return context;
}
