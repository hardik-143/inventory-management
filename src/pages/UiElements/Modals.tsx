import { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { Modal as BaseModal } from "../../components/ui/modal";
import { AlertIcon, CheckCircleIcon, ErrorIcon, InfoIcon } from "../../icons";

const longParagraphs = Array.from(
  { length: 14 },
  (_, index) =>
    `Paragraph ${
      index + 1
    }: A longer block of content that helps simulate real-world copy inside the modal body. Use this to preview how typography wraps and how layout spacing behaves when the content grows.`
);

const statusVariantStyles: Record<string, string> = {
  success:
    "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400",
  danger: "bg-error-50 text-error-600 dark:bg-error-500/20 dark:text-error-300",
  warning:
    "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-300",
  info: "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300",
};

const statusIconMap = {
  success: CheckCircleIcon,
  danger: ErrorIcon,
  warning: AlertIcon,
  info: InfoIcon,
};

type ModalKey =
  | "status-success"
  | "status-danger"
  | "status-warning"
  | "status-info"
  | "size-small"
  | "size-medium"
  | "size-large"
  | "size-full"
  | "position-top"
  | "position-center"
  | "position-bottom"
  | "scroll-internal"
  | "scroll-body";

export default function Modals() {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);

  const openModal = (key: ModalKey) => setActiveModal(key);
  const closeModal = () => setActiveModal(null);
  const isOpen = (key: ModalKey) => activeModal === key;

  return (
    <div>
      <PageMeta
        title="React.js Custom Modal Examples | TailAdmin - React.js Admin Dashboard Template"
        description="Collection of modal variations built with the TailAdmin custom modal component."
      />
      <PageBreadcrumb pageTitle="Modals" />

      <div className="space-y-6">
        <ComponentCard
          title="Status & Confirmation Modals"
          desc="Use contextual styling to reinforce the intent of the confirmation prompt."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => openModal("status-success")}>Success</Button>
            <Button
              className="bg-error-500 text-white hover:bg-error-600"
              onClick={() => openModal("status-danger")}
            >
              Danger
            </Button>
            <Button
              className="bg-warning-500 text-white hover:bg-warning-600"
              onClick={() => openModal("status-warning")}
            >
              Warning
            </Button>
            <Button variant="outline" onClick={() => openModal("status-info")}>
              Info
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Modal Sizes"
          desc="Demonstrate how the modal scales across common breakpoints from compact to spacious layouts."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" onClick={() => openModal("size-small")}>
              Small
            </Button>
            <Button onClick={() => openModal("size-medium")}>Medium</Button>
            <Button
              className="bg-gray-900 text-white hover:bg-gray-800"
              onClick={() => openModal("size-large")}
            >
              Large
            </Button>
            <Button
              className="bg-brand-500 text-white hover:bg-brand-600"
              onClick={() => openModal("size-full")}
            >
              Fullscreen
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Placement"
          desc="Position the modal along the viewport to accommodate different interaction patterns."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="outline" onClick={() => openModal("position-top")}>
              Top aligned
            </Button>
            <Button onClick={() => openModal("position-center")}>
              Centered
            </Button>
            <Button
              variant="outline"
              onClick={() => openModal("position-bottom")}
            >
              Bottom aligned
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Scrolling"
          desc="Compare internally scrolling content with a modal that grows taller than the viewport."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              onClick={() => openModal("scroll-internal")}
            >
              Internal scroll
            </Button>
            <Button onClick={() => openModal("scroll-body")}>
              Body scroll
            </Button>
          </div>
        </ComponentCard>
      </div>

      {["success", "danger", "warning", "info"].map((variant) => {
        const key = `status-${variant}` as ModalKey;
        const Icon = statusIconMap[variant as keyof typeof statusIconMap];

        return (
          <BaseModal
            key={variant}
            isOpen={isOpen(key)}
            onClose={closeModal}
            className="mx-4 max-w-md shadow-theme-xl"
          >
            <div className="p-6 sm:p-7">
              <div
                className={`flex items-start gap-4 rounded-xl p-4 ${
                  statusVariantStyles[
                    variant as keyof typeof statusVariantStyles
                  ]
                }`}
              >
                <span className="mt-0.5">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
                    {variant === "success" && "Order fulfilled"}
                    {variant === "danger" && "Delete record?"}
                    {variant === "warning" && "Pause subscription?"}
                    {variant === "info" && "Heads-up"}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {variant === "success" &&
                      "The order status will be updated and a confirmation email is dispatched to the customer."}
                    {variant === "danger" &&
                      "Removing this record permanently deletes any associated analytics and cannot be undone."}
                    {variant === "warning" &&
                      "Customers lose access immediately. You can resume the subscription whenever you need."}
                    {variant === "info" &&
                      "Share quick wins and keep updates flowing so your team stays aligned on priorities."}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Button onClick={closeModal}>
                      {variant === "danger" ? "Confirm" : "Continue"}
                    </Button>
                    <Button variant="outline" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </BaseModal>
        );
      })}

      <BaseModal
        isOpen={isOpen("size-small")}
        onClose={closeModal}
        className="mx-4 max-w-sm shadow-theme-xl"
      >
        <div className="space-y-4 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
            Compact modal
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Ideal for confirmations or quick forms. The small footprint keeps
            the user focused on a single task.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button size="sm" onClick={closeModal}>
              Continue
            </Button>
            <Button size="sm" variant="outline" onClick={closeModal}>
              Dismiss
            </Button>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isOpen("size-medium")}
        onClose={closeModal}
        className="mx-4 max-w-lg shadow-theme-xl"
      >
        <div className="space-y-5 p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90">
            Default modal width
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This sizing works for most use cases and comfortably accommodates
            forms, data summaries, and short lists.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-300">
            <li>Use the grid system inside to create more complex layouts.</li>
            <li>
              Pairs well with two-button footers or single primary actions.
            </li>
            <li>Supports responsive spacing via Tailwind utility classes.</li>
          </ul>
          <div className="flex items-center gap-3">
            <Button onClick={closeModal}>Save changes</Button>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isOpen("size-large")}
        onClose={closeModal}
        className="mx-4 max-w-4xl shadow-theme-xl"
      >
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90">
              Team planning session
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Larger modals support richer layouts with charts, tables, or
              multi-column forms without overwhelming the user.
            </p>
            <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 dark:border-gray-700 dark:bg-white/5">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-white/80">
                Agenda
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Review quarterly OKRs</li>
                <li>• Prioritize upcoming initiatives</li>
                <li>• Assign owners and milestones</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-sm font-medium text-gray-800 dark:text-white/80">
              Notes
              <textarea
                className="mt-2 h-40 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                placeholder="Capture discussion points"
              />
            </label>
            <div className="flex items-center gap-3 pt-2">
              <Button onClick={closeModal}>Share summary</Button>
              <Button variant="outline" onClick={closeModal}>
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isOpen("size-full")}
        onClose={closeModal}
        isFullscreen
        className="bg-white dark:bg-gray-900"
      >
        <div className="flex h-full flex-col">
          <header className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
              Fullscreen workspace
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ideal for editing flows, granular settings, or immersive
              dashboards that require additional space.
            </p>
          </header>
          <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6 sm:px-10">
            {Array.from({ length: 6 }, (_, section) => (
              <section
                key={section}
                className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700"
              >
                <h4 className="text-base font-semibold text-gray-900 dark:text-white/90">
                  Section {section + 1}
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Build uninterrupted experiences such as editors or analytics
                  consoles by leveraging the fullscreen mode.
                </p>
              </section>
            ))}
          </div>
          <footer className="border-t border-gray-200 px-6 py-4 dark:border-gray-700">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Progress is saved automatically while the workspace remains
                open.
              </p>
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={closeModal}>
                  Exit
                </Button>
                <Button onClick={closeModal}>Publish</Button>
              </div>
            </div>
          </footer>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isOpen("position-top")}
        onClose={closeModal}
        placement="top"
        className="mx-4 max-w-xl shadow-theme-xl"
      >
        <div className="p-6 sm:p-7">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
            Top aligned modal
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Useful for notifications that originate from the navigation or need
            to stay close to triggering controls.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button onClick={closeModal}>Acknowledge</Button>
            <Button variant="outline" onClick={closeModal}>
              Dismiss
            </Button>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isOpen("position-center")}
        onClose={closeModal}
        className="mx-4 max-w-lg shadow-theme-xl"
      >
        <div className="p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
            Centered modal
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            The classic treatment for focused decisions. Provide a clear message
            and concise set of actions.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button onClick={closeModal}>Confirm</Button>
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isOpen("position-bottom")}
        onClose={closeModal}
        placement="bottom"
        className="mx-4 max-w-xl shadow-theme-xl"
      >
        <div className="p-6 sm:p-7">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
            Bottom aligned modal
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Works well for mobile-first flows or quick context sheets that slide
            in from the bottom edge.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button onClick={closeModal}>Got it</Button>
            <Button variant="outline" onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isOpen("scroll-internal")}
        onClose={closeModal}
        className="mx-4 max-w-3xl shadow-theme-xl"
      >
        <div className="flex max-h-[70vh] flex-col">
          <header className="border-b border-gray-200 px-6 py-5 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
              Scrollable content
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              The body area scrolls while the header and footer remain pinned
              for persistent actions.
            </p>
          </header>
          <div className="grow space-y-4 overflow-y-auto px-6 py-6 text-sm text-gray-600 dark:text-gray-300">
            {longParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <footer className="border-t border-gray-200 px-6 py-4 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Button onClick={closeModal}>Agree</Button>
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </footer>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isOpen("scroll-body")}
        onClose={closeModal}
        className="mx-4 max-w-3xl shadow-theme-xl"
      >
        <div className="space-y-5 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
            Long form content
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Let the modal grow taller than the viewport to demonstrate how the
            overall sheet scrolls within the overlay.
          </p>
          {longParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              {paragraph}
            </p>
          ))}
          <div className="flex items-center gap-3">
            <Button onClick={closeModal}>Mark as read</Button>
            <Button variant="outline" onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      </BaseModal>
    </div>
  );
}
