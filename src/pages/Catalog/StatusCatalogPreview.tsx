import { useMemo } from "react";
import { useLocation } from "react-router";
import StatusStoryPreview from "../../components/catalog/StatusStoryPreview";
import type { StatusItem } from "./StatusCatalog.tsx";
import { initialStatuses } from "./StatusCatalog.tsx";

type LocationState = {
  items?: StatusItem[];
};

const toPreviewItems = (items: StatusItem[]) =>
  items.map((item) => ({
    id: item.id,
    title: item.name,
    caption: item.caption ?? "",
    image: item.preview,
    autoShare: item.autoShare,
  }));

export default function StatusCatalogPreview() {
  const location = useLocation();
  const state = (location.state as LocationState | null) ?? null;
  const incomingItems = state?.items;

  const resolvedItems = useMemo(() => {
    if (Array.isArray(incomingItems) && incomingItems.length > 0) {
      return incomingItems;
    }
    return initialStatuses;
  }, [incomingItems]);

  const previewItems = useMemo(
    () => toPreviewItems(resolvedItems),
    [resolvedItems]
  );

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),rgba(15,23,42,0.95))]" />
      <div className="relative z-10 flex min-h-dvh w-full items-center justify-center">
        <StatusStoryPreview items={previewItems} />
      </div>
    </div>
  );
}
