import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

interface ProductCategory {
  id: number;
  image: string;
  productName: string;
  noOfProducts: number;
}

// Define the table data using the interface
const tableData: ProductCategory[] = [
  {
    id: 1,
    image: "/images/user/user-17.jpg",
    productName: "Lindsey Curtis",
    noOfProducts: 34,
  },
  {
    id: 2,
    image: "/images/user/user-18.jpg",
    productName: "Kaiya George",
    noOfProducts: 12,
  },
  {
    id: 3,
    image: "/images/user/user-19.jpg",
    productName: "Madison Butler",
    noOfProducts: 27,
  },
  {
    id: 4,
    image: "/images/user/user-20.jpg",
    productName: "Aarav Thompson",
    noOfProducts: 45,
  },
];

export default function ProductCategoriesList() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Image
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                No. of Products
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {order.productName}
                  </span>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <img
                    width={40}
                    height={40}
                    src={order.image}
                    alt={order.productName}
                  />
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {order.noOfProducts}
                  </span>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  ...
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
