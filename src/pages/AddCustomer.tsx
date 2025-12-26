import { useState } from "react";
import { useNavigate } from "react-router";
import PageMeta from "@/components/common/PageMeta";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Form from "@/components/form/Form";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import TextArea from "@/components/form/input/TextArea";
import Button from "@/components/ui/button/Button";

interface CustomerFormState {
  customerName: string;
  firmName: string;
  contactNumber: string;
  address: string;
  email: string;
  feedback?: string;
}

const buildInitialState = (): CustomerFormState => ({
  customerName: "",
  firmName: "",
  contactNumber: "",
  address: "",
  email: "",
});

export default function AddCustomer() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<CustomerFormState>(
    buildInitialState()
  );

  const handleSubmit = () => {
    setFormState((prev) => ({
      ...prev,
      feedback: "Form submission placeholder - connect to customer API later.",
    }));
  };

  return (
    <>
      <PageMeta
        title="Add Customer"
        description="Register a new customer to start tracking sales and payments."
      />
      <PageBreadcrumb pageTitle="Add Customer" />
      <ComponentCard title="Customer Information">
        <Form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="customer-name">Customer Name</Label>
              <Input
                id="customer-name"
                placeholder="Enter customer name"
                value={formState.customerName}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    customerName: event.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="firm-name">Firm Name</Label>
              <Input
                id="firm-name"
                placeholder="Enter firm name"
                value={formState.firmName}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    firmName: event.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="contact-number">Contact Number</Label>
              <Input
                id="contact-number"
                placeholder="Enter contact number"
                value={formState.contactNumber}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    contactNumber: event.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                value={formState.email}
                onChange={(event) =>
                  setFormState((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <TextArea
              id="address"
              rows={4}
              placeholder="Enter address"
              value={formState.address}
              onChange={(value) =>
                setFormState((prev) => ({
                  ...prev,
                  address: value,
                }))
              }
            />
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
