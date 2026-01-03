import { GalleryContext } from "@/context/galleryConfig.constants";
import { useContext } from "react";

export function useGalleryConfig() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error(
      "useGalleryConfig must be used within a GalleryConfigProvider"
    );
  }
  return context;
}
