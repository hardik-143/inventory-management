import { useEffect, useMemo, useState } from "react";
import { useMatch, useNavigate } from "react-router";
import PageMeta from "@/components/common/PageMeta";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "@/components/ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem";
import { Modal } from "@/components/ui/modal";
import Form from "@/components/form/Form";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import Checkbox from "@/components/form/input/Checkbox";
import FileInput from "@/components/form/input/FileInput";
import {
  products,
  productCategories,
  defaultSpecifications,
} from "@/data/inventory";
import type { SpecificationRow } from "@/data/inventory";
import { PlusIcon, HorizontaLDots, PencilIcon, TrashBinIcon } from "@/icons";

interface QuickAddState {
  name: string;
  description: string;
  category: string;
  hasGst: boolean;
  gstPercentage: string;
  price: string;
  newArrival: string;
  image: string;
  specifications: SpecificationRow[];
  feedback?: string;
}

const buildQuickAddState = (): QuickAddState => ({
  name: "",
  description: "",
  category: "",
  hasGst: true,
  gstPercentage: "18",
  price: "",
  newArrival: "yes",
  image: "",
  specifications: defaultSpecifications.map((spec, index) => ({
    ...spec,
    id: `spec-${index + 1}`,
  })),
});

export default function InventoryProducts() {
  const navigate = useNavigate();
  const quickAddMatch = useMatch("/inventory/products/quick-add");
  const isQuickAddOpen = Boolean(quickAddMatch);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [quickAddState, setQuickAddState] =
    useState<QuickAddState>(buildQuickAddState);

  useEffect(() => {
    if (!isQuickAddOpen) {
      setQuickAddState(buildQuickAddState());
    }
  }, [isQuickAddOpen]);

  const categoryOptions = useMemo(
    () =>
      productCategories.map((category) => ({
        value: category.name,
        label: category.name,
      })),
    []
  );

  const newArrivalOptions = useMemo(
    () => [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    []
  );

  const handleQuickAddSubmit = () => {
    setQuickAddState((prev) => ({
      ...prev,
      feedback: "Quick add placeholder - connect to inventory API later.",
    }));
  };

  const handleAddSpecRow = () => {
    setQuickAddState((prev) => ({
      ...prev,
      specifications: [
        ...prev.specifications,
        {
          id: `spec-${prev.specifications.length + 1}`,
          key: "",
          value: "",
        },
      ],
    }));
  };

  const handleRemoveSpecRow = (id: string) => {
    setQuickAddState((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((spec) => spec.id !== id),
    }));
  };

  const closeQuickAdd = () => {
    navigate("/inventory/products", { replace: true });
  };

  return (
    <>
      <PageMeta
        title="Inventory Products"
        description="Manage products, quick add items, and access product details."
      />
      <PageBreadcrumb pageTitle="Products" />
      <ComponentCard title="Products">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="sm"
              startIcon={<PlusIcon className="size-4" />}
              onClick={() => navigate("/inventory/products/add")}
            >
              Add Product
            </Button>
            <Button
              size="sm"
              variant="outline"
              startIcon={<PlusIcon className="size-4" />}
              onClick={() => navigate("/inventory/products/quick-add")}
            >
              Add Quick Product
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
                  Product Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Category
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Product Price
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Total Number of Views
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
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">
                    {product.name}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                    {product.category}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">
                    {product.price}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                    {product.totalViews}
                  </TableCell>
                  <TableCell className="relative px-5 py-4 text-start">
                    <button
                      type="button"
                      className="dropdown-toggle inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 shadow-theme-xs transition hover:border-brand-200 hover:text-brand-500 dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand-500"
                      onClick={(event) => {
                        const target = event.currentTarget;
                        const isActive = openDropdownId === product.id;
                        setOpenDropdownId(isActive ? null : product.id);
                        setAnchorEl(isActive ? null : target);
                      }}
                    >
                      <HorizontaLDots className="size-5" />
                    </button>
                    <Dropdown
                      isOpen={openDropdownId === product.id}
                      onClose={() => {
                        setOpenDropdownId(null);
                        setAnchorEl(null);
                      }}
                      anchorEl={anchorEl}
                      className="min-w-[180px]"
                    >
                      <div className="py-1">
                        <DropdownItem
                          tag="a"
                          to={`/inventory/products/${product.id}`}
                          onItemClick={() => {
                            setOpenDropdownId(null);
                            setAnchorEl(null);
                          }}
                        >
                          View Details
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            setOpenDropdownId(null);
                            setAnchorEl(null);
                          }}
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300"
                        >
                          <PencilIcon className="size-4" /> Edit
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            setOpenDropdownId(null);
                            setAnchorEl(null);
                          }}
                          className="flex items-center gap-2 text-error-500 hover:text-error-600"
                        >
                          <TrashBinIcon className="size-4" /> Delete
                        </DropdownItem>
                      </div>
                    </Dropdown>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentCard>

      <Modal
        isOpen={isQuickAddOpen}
        onClose={closeQuickAdd}
        className="m-4 max-w-[620px] p-6 sm:p-10"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              Quick Add Product
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Capture the essential product details to append the inventory in
              seconds.
            </p>
          </div>
          <Form onSubmit={handleQuickAddSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="quick-name">Product Name</Label>
                <Input
                  id="quick-name"
                  placeholder="Enter product name"
                  value={quickAddState.name}
                  onChange={(event) =>
                    setQuickAddState((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="quick-category">Category</Label>
                <Select
                  options={categoryOptions}
                  placeholder="Select category"
                  defaultValue={quickAddState.category}
                  onChange={(value) =>
                    setQuickAddState((prev) => ({
                      ...prev,
                      category: value,
                    }))
                  }
                  className="dark:bg-gray-900"
                />
              </div>
              <div>
                <Label htmlFor="quick-price">Product Price</Label>
                <Input
                  id="quick-price"
                  placeholder="$0.00"
                  value={quickAddState.price}
                  onChange={(event) =>
                    setQuickAddState((prev) => ({
                      ...prev,
                      price: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="quick-new-arrival">Is New Arrival?</Label>
                <Select
                  options={newArrivalOptions}
                  placeholder="Select status"
                  defaultValue={quickAddState.newArrival}
                  onChange={(value) =>
                    setQuickAddState((prev) => ({
                      ...prev,
                      newArrival: value,
                    }))
                  }
                  className="dark:bg-gray-900"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="quick-description">Description</Label>
              <TextArea
                rows={4}
                id="quick-description"
                value={quickAddState.description}
                onChange={(value) =>
                  setQuickAddState((prev) => ({
                    ...prev,
                    description: value,
                  }))
                }
                placeholder="Enter product description"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Checkbox
                checked={quickAddState.hasGst}
                onChange={(checked) =>
                  setQuickAddState((prev) => ({
                    ...prev,
                    hasGst: checked,
                  }))
                }
                label="Has GST?"
              />
              {quickAddState.hasGst && (
                <div className="sm:w-40">
                  <Label htmlFor="quick-gst">GST Percentage</Label>
                  <Input
                    id="quick-gst"
                    type="number"
                    placeholder="18"
                    value={quickAddState.gstPercentage}
                    onChange={(event) =>
                      setQuickAddState((prev) => ({
                        ...prev,
                        gstPercentage: event.target.value,
                      }))
                    }
                  />
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="quick-image">Image Upload</Label>
              <FileInput
                id="quick-image"
                onChange={(event) =>
                  setQuickAddState((prev) => ({
                    ...prev,
                    image: event.target.files?.[0]?.name ?? "",
                  }))
                }
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-800 dark:text-white/90">
                  Specification
                </h4>
                <Button
                  size="sm"
                  variant="outline"
                  startIcon={<PlusIcon className="size-4" />}
                  onClick={handleAddSpecRow}
                >
                  Add Row
                </Button>
              </div>
              <div className="space-y-4">
                {quickAddState.specifications.map((spec) => (
                  <div
                    key={spec.id}
                    className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]"
                  >
                    <div>
                      <Label htmlFor={`spec-key-${spec.id}`}>Key</Label>
                      <Input
                        id={`spec-key-${spec.id}`}
                        placeholder="Enter key"
                        value={spec.key}
                        onChange={(event) =>
                          setQuickAddState((prev) => ({
                            ...prev,
                            specifications: prev.specifications.map((row) =>
                              row.id === spec.id
                                ? { ...row, key: event.target.value }
                                : row
                            ),
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor={`spec-value-${spec.id}`}>Value</Label>
                      <Input
                        id={`spec-value-${spec.id}`}
                        placeholder="Enter value"
                        value={spec.value}
                        onChange={(event) =>
                          setQuickAddState((prev) => ({
                            ...prev,
                            specifications: prev.specifications.map((row) =>
                              row.id === spec.id
                                ? { ...row, value: event.target.value }
                                : row
                            ),
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full sm:w-auto"
                        onClick={() => handleRemoveSpecRow(spec.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {quickAddState.feedback && (
              <div className="rounded-lg border border-dashed border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-600 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                {quickAddState.feedback}
              </div>
            )}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Button variant="outline" onClick={closeQuickAdd}>
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
