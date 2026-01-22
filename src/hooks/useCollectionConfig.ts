import { CollectionContext } from "@/context/colllection/collectionConfig.constants";
import { useContext } from "react";

export function useCollectionConfig() {
  const context = useContext(CollectionContext);
  if (context === undefined) {
    throw new Error(
      "useCollectionConfig must be used within a CollectionConfigProvider",
    );
  }
  return context;
}
