import { useState } from "react";
import { useNavigate } from "react-router";
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
import { customers } from "@/data/inventory";
import { Ellipsis, Eye, Pencil, Plus, Trash } from "lucide-react";

export default function InventoryCustomers() {
  const navigate = useNavigate();
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <PageMeta
        title="Inventory Customers"
        description="Manage customer records and record payments for inventory."
      />
      <PageBreadcrumb pageTitle="Customers" />
      <ComponentCard
        title="Customers"
        headerClassName="py-3!"
        extraHeaderContent={
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button
              size="sm"
              variant="primary"
              startIcon={<Plus className="size-5" />}
              onClick={() => navigate("/inventory/customers/add")}
            >
              Add Customer
            </Button>
          </div>
        }
      >
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/5">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Customer Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Firm Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Contact Number
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Address
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  Email
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
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">
                    {customer.customerName}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                    {customer.firmName}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                    {customer.contactNumber}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                    {customer.address}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                    {customer.email}
                  </TableCell>
                  <TableCell className="relative px-5 py-4 text-start">
                    <button
                      type="button"
                      className="dropdown-toggle inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 shadow-theme-xs transition hover:border-brand-200 hover:text-brand-500 dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand-500"
                      onClick={(e) => {
                        const clickedEl = e.currentTarget; // store DOM element

                        setOpenDropdownId((prev) =>
                          prev === customer.id ? null : customer.id
                        );

                        // store reference only when opening
                        setAnchorEl(() =>
                          openDropdownId === customer.id ? null : clickedEl
                        );
                      }}
                    >
                      <Ellipsis className="size-5" />
                    </button>
                    <Dropdown
                      isOpen={openDropdownId === customer.id}
                      onClose={() => {
                        setOpenDropdownId(null);
                        setAnchorEl(null);
                      }}
                      anchorEl={anchorEl}
                      className="min-w-[200px]"
                    >
                      <div className="py-1">
                        <DropdownItem
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300"
                          onClick={() => setOpenDropdownId(null)}
                        >
                          <Pencil className="size-4" /> Edit
                        </DropdownItem>
                        <DropdownItem
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300"
                          onClick={() => setOpenDropdownId(null)}
                        >
                          <Eye className="size-4" /> View
                        </DropdownItem>
                        <DropdownItem
                          className="flex items-center gap-2 text-brand-500 hover:text-brand-600"
                          onClick={() => setOpenDropdownId(null)}
                        >
                          <Pencil className="size-4" /> Add Receive Payment
                        </DropdownItem>
                        <DropdownItem
                          className="flex items-center gap-2 text-error-500 hover:text-error-600"
                          onClick={() => setOpenDropdownId(null)}
                        >
                          <Trash className="size-4" /> Delete
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
    </>
  );
}
