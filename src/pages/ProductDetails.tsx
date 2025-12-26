import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
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
import { productDetailsMap } from "@/data/inventory";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const product = useMemo(() => {
    if (!id) {
      return undefined;
    }
    return productDetailsMap[id];
  }, [id]);

  const pageTitle = product ? product.name : "Product Details";

  return (
    <>
      <PageMeta
        title={`${pageTitle} Details`}
        description="Detailed inventory record including purchase and sales history."
      />
      <PageBreadcrumb pageTitle="Product Details" />
      {!product ? (
        <div className="rounded-2xl border border-error-200 bg-error-50 px-5 py-6 text-center text-sm text-error-600 dark:border-error-500/30 dark:bg-error-500/10 dark:text-error-300">
          Product not found. Please return to the products list.
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              onClick={() => navigate("/inventory/products")}
            >
              Back to Products
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/3">
              <div className="flex flex-col items-center text-center gap-5">
                <div className="h-48 w-48 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {product.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => navigate("/inventory/products")}
                  >
                    Back to Products
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      navigate(`/inventory/products/${product.id}`)
                    }
                  >
                    Refresh View
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Product Information
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Category</p>
                  <p className="font-medium text-gray-800 dark:text-white/90">
                    {product.category}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    GST Percentage
                  </p>
                  <p className="font-medium text-gray-800 dark:text-white/90">
                    {product.gstPercentage}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Quantity</p>
                  <p className="font-medium text-gray-800 dark:text-white/90">
                    {product.quantity}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Price</p>
                  <p className="font-medium text-gray-800 dark:text-white/90">
                    {product.price}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    New Arrival
                  </p>
                  <p className="font-medium text-gray-800 dark:text-white/90">
                    {product.newArrival}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Total Quantity Sold
                  </p>
                  <p className="font-medium text-gray-800 dark:text-white/90">
                    {product.totalQuantitySold}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ComponentCard title="History of All Purchase">
            <div className="max-w-full overflow-x-auto">
              <Table>
                <TableHeader className="border-b border-gray-100 dark:border-white/5">
                  <TableRow>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Supplier
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Date
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Qty
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-white/5">
                  {product.purchases.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">
                        {entry.party}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                        {entry.date}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                        {entry.quantity}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                        {entry.price}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                        {entry.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ComponentCard>

          <ComponentCard title="History of All Sales">
            <div className="max-w-full overflow-x-auto">
              <Table>
                <TableHeader className="border-b border-gray-100 dark:border-white/5">
                  <TableRow>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Customer
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Date
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Qty
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-white/5">
                  {product.sales.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-800 dark:text-white/90">
                        {entry.party}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                        {entry.date}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                        {entry.quantity}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                        {entry.price}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-start text-theme-sm text-gray-600 dark:text-gray-400">
                        {entry.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ComponentCard>
        </div>
      )}
    </>
  );
}
