import { useMemo } from "react";
import { useLocation } from "react-router";
import clsx from "clsx";
import type { StatusItem } from "./StatusCatalog.tsx";
import { initialStatuses } from "./StatusCatalog.tsx";

const GRADIENTS = [
  "from-brand-500/20 via-brand-500/10 to-transparent",
  "from-emerald-500/20 via-emerald-400/10 to-transparent",
  "from-indigo-500/20 via-indigo-400/10 to-transparent",
  "from-rose-500/20 via-rose-400/10 to-transparent",
];

type LocationState = {
  items?: StatusItem[];
};

const getResolvedItems = (items?: StatusItem[] | null) => {
  if (Array.isArray(items) && items.length > 0) {
    return items;
  }
  return initialStatuses;
};

export default function StatusCatalogGallery() {
  //   const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as LocationState | null) ?? null;

  const galleryItems = useMemo(
    () => getResolvedItems(state?.items),
    [state?.items]
  );

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.98),_rgba(15,23,42,0.75))]" />
      <div className="relative z-10 flex min-h-dvh w-full flex-col">
        {/* <header className="flex items-center justify-between px-4 py-6 sm:px-8">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Status gallery
            </p>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              Curate your drops in one glance
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                navigate("/catalog/status/preview", {
                  state: { items: galleryItems },
                })
              }
            >
              View story carousel
            </Button>
            <Link
              to="/"
              className="text-xs font-medium uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
            >
              Back home
            </Link>
          </div>
        </header> */}

        <main className="flex-1 overflow-y-auto px-4 pb-16 sm:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-10">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-[0_30px_60px_rgba(15,23,42,0.45)] backdrop-blur-xl transition hover:border-white/10 hover:shadow-[0_30px_80px_rgba(59,130,246,0.35)]"
              >
                <div className="relative aspect-[5/6] overflow-hidden">
                  <img
                    src={item.preview}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={clsx(
                      "absolute inset-0 bg-gradient-to-t opacity-0 transition duration-500 group-hover:opacity-100",
                      GRADIENTS[index % GRADIENTS.length]
                    )}
                  />
                </div>
                <div className="relative space-y-3 px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                    <span>{item.autoShare ? "Auto-share" : "Manual"}</span>
                    <span>#{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-lg font-semibold leading-tight text-white">
                    {item.name}
                  </h2>
                  {item.caption && (
                    <p className="text-sm text-white/75 line-clamp-3">
                      {item.caption}
                    </p>
                  )}
                </div>
              </article>
            ))}
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-[0_30px_60px_rgba(15,23,42,0.45)] backdrop-blur-xl transition hover:border-white/10 hover:shadow-[0_30px_80px_rgba(59,130,246,0.35)]"
              >
                <div className="relative aspect-[5/6] overflow-hidden">
                  <img
                    src={item.preview}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={clsx(
                      "absolute inset-0 bg-gradient-to-t opacity-0 transition duration-500 group-hover:opacity-100",
                      GRADIENTS[index % GRADIENTS.length]
                    )}
                  />
                </div>
                <div className="relative space-y-3 px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                    <span>{item.autoShare ? "Auto-share" : "Manual"}</span>
                    <span>#{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-lg font-semibold leading-tight text-white">
                    {item.name}
                  </h2>
                  {item.caption && (
                    <p className="text-sm text-white/75 line-clamp-3">
                      {item.caption}
                    </p>
                  )}
                </div>
              </article>
            ))}
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-[0_30px_60px_rgba(15,23,42,0.45)] backdrop-blur-xl transition hover:border-white/10 hover:shadow-[0_30px_80px_rgba(59,130,246,0.35)]"
              >
                <div className="relative aspect-[5/6] overflow-hidden">
                  <img
                    src={item.preview}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={clsx(
                      "absolute inset-0 bg-gradient-to-t opacity-0 transition duration-500 group-hover:opacity-100",
                      GRADIENTS[index % GRADIENTS.length]
                    )}
                  />
                </div>
                <div className="relative space-y-3 px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                    <span>{item.autoShare ? "Auto-share" : "Manual"}</span>
                    <span>#{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-lg font-semibold leading-tight text-white">
                    {item.name}
                  </h2>
                  {item.caption && (
                    <p className="text-sm text-white/75 line-clamp-3">
                      {item.caption}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
