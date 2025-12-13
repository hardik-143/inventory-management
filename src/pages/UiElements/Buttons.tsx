import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { BoxIcon, PencilIcon, TrashBinIcon } from "../../icons";
import { ChevronRight, Info, MoveRight, Plus } from "lucide-react";

export default function Buttons() {
  return (
    <div>
      <PageMeta
        title="React.js Buttons Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Buttons Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Buttons" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard
          title="Solid Buttons"
          desc="Core call-to-action styles in every supported size."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="primary">
              Small Button
            </Button>
            <Button size="md" variant="primary">
              Medium Button
            </Button>
            <Button size="lg" variant="primary">
              Large Button
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Solid Buttons with Icons"
          desc="Combine icons with labels for extra clarity on actions."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="sm"
              variant="primary"
              startIcon={<Plus className="size-4" />}
            >
              Add Item
            </Button>
            <Button
              size="md"
              variant="primary"
              endIcon={<ChevronRight className="size-5" />}
            >
              Continue
            </Button>
            <Button
              size="lg"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
              endIcon={<MoveRight className="size-5" />}
            >
              Launch Flow
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Outline Buttons"
          desc="Secondary emphasis buttons with border styling."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="outline">
              Small Outline
            </Button>
            <Button size="md" variant="outline">
              Medium Outline
            </Button>
            <Button
              size="lg"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              Large Outline
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Primary Soft Buttons"
          desc="Muted brand fills paired with subtle borders for low-emphasis actions."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="primarySoft">
              Soft Small
            </Button>
            <Button
              size="md"
              variant="primarySoft"
              endIcon={<Plus className="size-5" />}
            >
              Soft Medium
            </Button>
            <Button
              size="lg"
              variant="primarySoft"
              startIcon={<Plus className="size-5" />}
            >
              Soft Large
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Bold Brand Outline"
          desc="High-contrast outline buttons for stronger emphasis."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="primaryOutline">
              Accent Small
            </Button>
            <Button size="md" variant="primaryOutline">
              Accent Medium
            </Button>
            <Button
              size="lg"
              variant="primaryOutline"
              startIcon={<Plus className="size-5" />}
            >
              Accent Large
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Status Buttons"
          desc="Semantic colors tailored for positive, caution, and destructive flows."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="success">
              Mark Complete
            </Button>
            <Button size="md" variant="warning">
              Send Reminder
            </Button>
            <Button size="md" variant="error">
              Delete Record
            </Button>
            <Button
              size="lg"
              variant="orange"
              endIcon={<Info className="size-5" />}
              variantIconPosition="end"
            >
              Schedule Review
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Status Outline Buttons"
          desc="Outline treatments mirroring semantic colors for secondary emphasis."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="successOutline" useVariantIcon>
              Approve
            </Button>
            <Button size="md" variant="warningOutline" useVariantIcon>
              Review Later
            </Button>
            <Button size="md" variant="errorOutline" useVariantIcon>
              Remove Access
            </Button>
            <Button
              size="lg"
              variant="orangeOutline"
              useVariantIcon
              variantIconPosition="end"
            >
              Reschedule
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Status Soft Buttons"
          desc="Low-contrast fills for quiet confirmations and gentle warnings."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" variant="successSoft" useVariantIcon>
              Success Note
            </Button>
            <Button size="md" variant="warningSoft" useVariantIcon>
              Pending Update
            </Button>
            <Button size="md" variant="errorSoft" useVariantIcon>
              Needs Attention
            </Button>
            <Button
              size="lg"
              variant="orangeSoft"
              useVariantIcon
              variantIconPosition="end"
            >
              Upcoming Event
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Status Icon-Only Buttons"
          desc="Compact icon buttons that inherit semantics from their variants."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="sm"
              variant="success"
              iconOnly
              useVariantIcon
              tooltip="Success"
            />
            <Button
              size="sm"
              variant="successOutline"
              iconOnly
              useVariantIcon
              tooltip="Success"
            />
            <Button
              size="sm"
              variant="successSoft"
              iconOnly
              useVariantIcon
              tooltip="Success"
            />
            <Button
              size="sm"
              variant="warning"
              iconOnly
              useVariantIcon
              tooltip="Warning"
            />
            <Button
              size="sm"
              variant="warningOutline"
              iconOnly
              useVariantIcon
              tooltip="Warning"
            />
            <Button
              size="sm"
              variant="warningSoft"
              iconOnly
              useVariantIcon
              tooltip="Warning"
            />
            <Button
              size="sm"
              variant="error"
              iconOnly
              useVariantIcon
              tooltip="Error"
            />
            <Button
              size="sm"
              variant="errorOutline"
              iconOnly
              useVariantIcon
              tooltip="Error"
            />
            <Button
              size="sm"
              variant="errorSoft"
              iconOnly
              useVariantIcon
              tooltip="Error"
            />
            <Button
              size="sm"
              variant="orange"
              iconOnly
              useVariantIcon
              tooltip="Orange"
            />
            <Button
              size="sm"
              variant="orangeOutline"
              iconOnly
              useVariantIcon
              tooltip="Orange"
            />
            <Button
              size="sm"
              variant="orangeSoft"
              iconOnly
              useVariantIcon
              tooltip="Orange"
            />
          </div>
        </ComponentCard>

        <ComponentCard
          title="Disabled States"
          desc="Demonstrate how each variant behaves when interactions are disabled."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button size="md" variant="primary" disabled>
              Primary Disabled
            </Button>
            <Button size="md" variant="outline" disabled>
              Outline Disabled
            </Button>
            <Button size="md" variant="primarySoft" disabled>
              Soft Disabled
            </Button>
            <Button size="md" variant="primaryOutline" disabled>
              Accent Disabled
            </Button>
          </div>
        </ComponentCard>

        <ComponentCard
          title="Icon Only Buttons"
          desc="Circular treatments for quick actions without labels."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="sm"
              variant="primary"
              icon={<Plus className="size-5" />}
              iconOnly
              tooltip="Create"
              ariaLabel="Create"
            />
            <Button
              size="md"
              variant="primary"
              icon={<Plus className="size-5" />}
              iconOnly
              tooltip="Add item"
              ariaLabel="Add item"
            />
            <Button
              size="lg"
              variant="primary"
              icon={<Plus className="size-6" />}
              iconOnly
              tooltip="New record"
              ariaLabel="Create new record"
            />
            <Button
              size="sm"
              variant="outline"
              icon={<TrashBinIcon className="size-5" />}
              iconOnly
              tooltip="Delete"
              ariaLabel="Delete"
            />
            <Button
              size="md"
              variant="outline"
              icon={<TrashBinIcon className="size-5" />}
              iconOnly
              tooltip="Remove"
              ariaLabel="Remove"
            />
            <Button
              size="lg"
              variant="outline"
              icon={<TrashBinIcon className="size-6" />}
              iconOnly
              tooltip="Remove permanently"
              ariaLabel="Remove permanently"
            />
          </div>
        </ComponentCard>

        <ComponentCard
          title="Buttons with Tooltips"
          desc="Pair informative tooltips with both text and icon-only actions."
        >
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="md"
              variant="primary"
              startIcon={<PencilIcon className="size-5" />}
              tooltip="Edit details"
            >
              Edit Item
            </Button>
            <Button
              size="md"
              variant="primaryOutline"
              endIcon={<MoveRight className="size-5" />}
              tooltip="Save & Continue"
            >
              Next Step
            </Button>
            <Button
              size="md"
              variant="outline"
              icon={<PencilIcon className="size-5" />}
              iconOnly
              tooltip="Quick edit"
              ariaLabel="Quick edit"
            />
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
