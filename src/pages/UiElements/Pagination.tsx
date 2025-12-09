import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { AngleLeftIcon, AngleRightIcon } from "../../icons";

const roundedPages = [1, 2, 3, 4, 5];
const segmentedPages = [1, 2, 3, 4, 5, 6];
const ellipsisPages = [1, 2, 3, "...", 8, 9, 10];
const minimalPages = [1, 2, 3, 4, 5];

const baseCircleButton =
  "inline-flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-600 transition hover:border-brand-500 hover:bg-brand-50 hover:text-brand-600 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-brand-500 dark:hover:text-brand-400 disabled:dark:border-gray-700 disabled:dark:bg-gray-800 disabled:dark:text-gray-600";
const activeCircleButton =
  "border-brand-500 bg-brand-500 text-white hover:bg-brand-500 hover:text-white dark:text-white";

const segmentedButton =
  "px-4 py-2 text-sm font-medium transition hover:bg-brand-50 hover:text-brand-600 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 dark:hover:bg-white/5 dark:text-gray-300 disabled:dark:text-gray-600";
const segmentedActiveButton =
  "bg-brand-500 text-white hover:bg-brand-500 hover:text-white";

const minimalNumberButton =
  "flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200";
const minimalActiveNumber = "bg-brand-500 text-white hover:bg-brand-500";

export default function Pagination() {
  return (
    <div>
      <PageMeta
        title="React.js Pagination Examples | TailAdmin - React.js Admin Dashboard Template"
        description="Collection of pagination UI variations built with TailAdmin React.js admin dashboard template components."
      />
      <PageBreadcrumb pageTitle="Pagination" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Rounded Pagination">
          <nav
            aria-label="Rounded pagination"
            className="flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              className={baseCircleButton}
              disabled
              aria-label="Previous page"
            >
              <AngleLeftIcon className="size-4" />
            </button>
            {roundedPages.map((page) => (
              <button
                type="button"
                key={page}
                className={`${baseCircleButton} ${
                  page === 3 ? activeCircleButton : ""
                }`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className={baseCircleButton}
              aria-label="Next page"
            >
              <AngleRightIcon className="size-4" />
            </button>
          </nav>
        </ComponentCard>

        <ComponentCard title="Segmented Pagination">
          <nav
            aria-label="Segmented pagination"
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex overflow-hidden rounded-full border border-gray-200 bg-white text-gray-600 shadow-theme-xs dark:border-gray-700 dark:bg-gray-900">
              <button
                type="button"
                className={`${segmentedButton} px-5`}
                disabled
              >
                Previous
              </button>
              {segmentedPages.map((page) => (
                <button
                  type="button"
                  key={page}
                  className={`${segmentedButton} px-4 ${
                    page === 4 ? segmentedActiveButton : ""
                  }`}
                >
                  {page}
                </button>
              ))}
              <button type="button" className={`${segmentedButton} px-5`}>
                Next
              </button>
            </div>
          </nav>
        </ComponentCard>

        <ComponentCard title="Pagination with Ellipsis">
          <nav
            aria-label="Pagination with ellipsis"
            className="flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              className={baseCircleButton}
              aria-label="Go to first page"
            >
              <AngleLeftIcon className="size-4" />
            </button>
            {ellipsisPages.map((item, index) => (
              <button
                type="button"
                key={`${item}-${index}`}
                className={`${baseCircleButton} ${
                  item === 9 ? activeCircleButton : ""
                } ${item === "..." ? "cursor-default" : ""}`}
                disabled={item === "..."}
              >
                {item}
              </button>
            ))}
            <button
              type="button"
              className={baseCircleButton}
              aria-label="Go to last page"
            >
              <AngleRightIcon className="size-4" />
            </button>
          </nav>
        </ComponentCard>

        <ComponentCard title="Minimal Pagination">
          <nav
            aria-label="Minimal pagination"
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              size="sm"
              variant="outline"
              startIcon={<AngleLeftIcon className="size-4" />}
              disabled
            >
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {minimalPages.map((page) => (
                <button
                  type="button"
                  key={page}
                  className={`${minimalNumberButton} ${
                    page === 2 ? minimalActiveNumber : ""
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 text-sm font-medium text-gray-400">
                ...
              </span>
              <button type="button" className={minimalNumberButton}>
                12
              </button>
            </div>
            <Button
              size="sm"
              variant="outline"
              endIcon={<AngleRightIcon className="size-4" />}
            >
              Next
            </Button>
          </nav>
        </ComponentCard>
      </div>
    </div>
  );
}
