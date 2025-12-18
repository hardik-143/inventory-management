import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import StatusStoryPreview from "../../components/catalog/StatusStoryPreview";
import type { StatusItem } from "./StatusCatalog.tsx";
import { initialStatuses } from "./StatusCatalog.tsx";
import Button from "../../components/ui/button/Button";

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
  const navigate = useNavigate();
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
      <div className="relative z-10 flex min-h-dvh w-full flex-col">
        {/* <header className="flex items-center justify-between px-4 py-6 sm:px-8">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Story preview
            </p>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              Simulate the status carousel
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                navigate("/catalog/status/gallery", {
                  state: { items: resolvedItems },
                })
              }
            >
              View gallery layout
            </Button>
            <Link
              to="/"
              className="text-xs font-medium uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
            >
              Back home
            </Link>
          </div>
        </header> */}

        <div className="flex flex-1 items-center justify-center pb-10">
          <StatusStoryPreview items={previewItems} />
        </div>
      </div>
    </div>
  );
}
