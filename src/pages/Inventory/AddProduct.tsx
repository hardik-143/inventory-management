import { useState } from "react";
import { useNavigate } from "react-router";
import PageMeta from "@/components/common/PageMeta";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Form from "@/components/form/Form";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Select from "@/components/form/Select";
import Checkbox from "@/components/form/input/Checkbox";
import FileInput from "@/components/form/input/FileInput";
import Button from "@/components/ui/button/Button";
import { productCategories, defaultSpecifications } from "@/data/inventory";
import type { SpecificationRow } from "@/data/inventory";
import { PlusIcon } from "@/icons";

interface ProductFormState {
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

const buildInitialState = (): ProductFormState => ({
  name: "",
  description: "",
  category: "",
  hasGst: true,
  gstPercentage: "18",
  price: "",
  newArrival: "no",
  image: "",
  specifications: defaultSpecifications.map((spec, index) => ({
    ...spec,
    id: `spec-${index + 1}`,
  })),
});

export default function InventoryAddProduct() {
  const navigate = useNavigate();
  const [formState, setFormState] =
    useState<ProductFormState>(buildInitialState);

  const categoryOptions = productCategories.map((category) => ({
    value: category.name,
    label: category.name,
  }));

  const newArrivalOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const handleSubmit = () => {
    setFormState((prev) => ({
      ...prev,
      feedback: "Form submission placeholder - integrate backend later.",
    }));
  };

  const handleAddSpecRow = () => {
    setFormState((prev) => ({
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
    setFormState((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((spec) => spec.id !== id),
    }));
  };

  return (
    <>
      <PageMeta
        title="Add Product"
        description="Create a new product and enrich the inventory data."
      />
      <PageBreadcrumb pageTitle="Add Product" />
      <ComponentCard title="Product Information">
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="product-name">Product Name</Label>
              <Input
                id="product-name"
                placeholder="Enter product name"
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
              <Label htmlFor="product-category">Category</Label>
              <Select
                options={categoryOptions}
                placeholder="Select category"
                defaultValue={formState.category}
                onChange={(value) =>
                  setFormState((prev) => ({
                    ...prev,
                    category: value,
                  }))
                }
                className="dark:bg-gray-900"
              />
            </div>
            <div>
              <Label htmlFor="product-price">Product Price</Label>
              <Input
                id="product-price"
                placeholder="$0.00"
                value={formState.price}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    price: event.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="product-new-arrival">Is New Arrival?</Label>
              <Select
                options={newArrivalOptions}
                placeholder="Select status"
                defaultValue={formState.newArrival}
                onChange={(value) =>
                  setFormState((prev) => ({
                    ...prev,
                    newArrival: value,
                  }))
                }
                className="dark:bg-gray-900"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="product-description">Description</Label>
            <TextArea
              id="product-description"
              rows={5}
              value={formState.description}
              onChange={(value) =>
                setFormState((prev) => ({
                  ...prev,
                  description: value,
                }))
              }
              placeholder="Enter product description"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Checkbox
              checked={formState.hasGst}
              onChange={(checked) =>
                setFormState((prev) => ({
                  ...prev,
                  hasGst: checked,
                }))
              }
              label="Has GST?"
            />
            {formState.hasGst && (
              <div className="sm:w-40">
                <Label htmlFor="product-gst">GST Percentage</Label>
                <Input
                  id="product-gst"
                  type="number"
                  placeholder="18"
                  value={formState.gstPercentage}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      gstPercentage: event.target.value,
                    }))
                  }
                />
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="product-image">Image Upload</Label>
            <FileInput
              id="product-image"
              onChange={(event) =>
                setFormState((prev) => ({
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
              {formState.specifications.map((spec) => (
                <div
                  key={spec.id}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]"
                >
                  <div>
                    <Label htmlFor={`add-spec-key-${spec.id}`}>Key</Label>
                    <Input
                      id={`add-spec-key-${spec.id}`}
                      placeholder="Enter key"
                      value={spec.key}
                      onChange={(event) =>
                        setFormState((prev) => ({
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
                    <Label htmlFor={`add-spec-value-${spec.id}`}>Value</Label>
                    <Input
                      id={`add-spec-value-${spec.id}`}
                      placeholder="Enter value"
                      value={spec.value}
                      onChange={(event) =>
                        setFormState((prev) => ({
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
          {formState.feedback && (
            <div className="rounded-lg border border-dashed border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-600 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              {formState.feedback}
            </div>
          )}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </ComponentCard>
    </>
  );
}
