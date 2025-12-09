import { useMemo, useState } from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import PageMeta from "@/components/common/PageMeta";
import Button from "@/components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Modal } from "@/components/ui/modal";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import FileInput from "@/components/form/input/FileInput";
import Form from "@/components/form/Form";
import { PencilIcon, TrashBinIcon, PlusIcon } from "@/icons";
import { productCategories } from "@/data/inventory";

const initialFormState = {
  name: "",
  image: "",
};

type CategoryModalMode = "add" | "quick" | null;

type FormState = typeof initialFormState & { feedback?: string };

export default function InventoryProductCategories() {
  const [modalMode, setModalMode] = useState<CategoryModalMode>(null);
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const modalTitle = useMemo(() => {
    if (modalMode === "quick") {
      return "Quick Add Product Category";
    }

    if (modalMode === "add") {
      return "Add Product Category";
    }

    return "";
  }, [modalMode]);

  const handleOpenModal = (mode: CategoryModalMode) => {
    setFormState(initialFormState);
    setModalMode(mode);
  };

  const handleCloseModal = () => {
    setModalMode(null);
    setFormState(initialFormState);
  };

  const handleSubmit = () => {
    setFormState((prev) => ({
      ...prev,
      feedback: "Form submission placeholder - add validation logic here.",
    }));
  };

  return (
    <>
      <PageMeta
        title="Inventory Product Categories"
        description="Manage inventory product categories and quick add new ones."
      />
      <PageBreadcrumb pageTitle="Product Categories" />
      <ComponentCard title="Product Categories">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              startIcon={<PlusIcon className="size-4" />}
              onClick={() => handleOpenModal("add")}
            >
              Add Product Category
            </Button>
            <Button
              size="sm"
              variant="outline"
              startIcon={<PlusIcon className="size-4" />}
              onClick={() => handleOpenModal("quick")}
            >
              Add Quick Product Category
            </Button>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/5">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Image
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  No. of Products
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/5">
              {productCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">
                    {category.name}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <div className="h-12 w-12 overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="size-12 object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                    {category.productCount}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="px-3 py-2"
                        startIcon={<PencilIcon className="size-4" />}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="px-3 py-2 text-error-500 hover:text-error-600"
                        startIcon={<TrashBinIcon className="size-4" />}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentCard>

      <Modal
        isOpen={modalMode !== null}
        onClose={handleCloseModal}
        className="m-4 max-w-[520px] p-6 sm:p-8"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              {modalTitle}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Provide the category name and upload an image to keep the catalog
              up to date.
            </p>
          </div>
          <Form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="category-name">Category Name</Label>
              <Input
                id="category-name"
                placeholder="Enter category name"
                value={formState.name}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="category-image">Image Upload</Label>
              <FileInput
                id="category-image"
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    image: event.target.files?.[0]?.name ?? "",
                  }))
                }
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Placeholder: wire up validation before submitting to backend.
              </p>
            </div>
            {formState.feedback && (
              <div className="rounded-lg border border-dashed border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-600 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                {formState.feedback}
              </div>
            )}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Button variant="outline" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}
