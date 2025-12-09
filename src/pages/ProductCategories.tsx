import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import PageMeta from "@/components/common/PageMeta";
import BasicTableOne from "@/components/tables/BasicTables/BasicTableOne";
import ProductCategoriesList from "@/components/tables/ProductCategoriesList";

export default function ProductCategories() {
  return (
    <>
      <PageMeta
        title="React.js Product Categories Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Product Categories Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Product Categories" />
      <div className="space-y-6">
        <ComponentCard title="Product Categories">
          <ProductCategoriesList />
        </ComponentCard>
      </div>
    </>
  );
}
