import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import OtpVerification from "./pages/AuthPages/OtpVerification";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import Inputs from "./pages/UiElements/Inputs";
import Pagination from "./pages/UiElements/Pagination";
import Modals from "./pages/UiElements/Modals";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import AdminDashboard from "./pages/Dashboard/Home";
import ProductCategories from "@/pages/ProductCategories";
import Products from "@/pages/Products";
import AddProduct from "@/pages/AddProduct";
import ProductDetails from "@/pages/ProductDetails";
import Customers from "@/pages/Customers";
import AddCustomer from "@/pages/AddCustomer";
import StatusCatalogPreview from "./pages/Catalog/StatusCatalogPreview";
import StatusCatalogGallery from "./pages/Catalog/StatusCatalogGallery";
import LandingPage from "./pages/LandingPage";
import { GalleryConfigProvider } from "./context/GalleryConfigContext";
import { LandingPageConfigProvider } from "./context/LandingPageConfigContext";
import CollectionBuilder from "./pages/Builder/CollectionBuilder";
import { CollectionConfigProvider } from "./context/colllection/CollectionConfigContext";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <LandingPageConfigProvider>
                <LandingPage />
              </LandingPageConfigProvider>
            }
          />

          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/admin" element={<AdminDashboard />} />
            <Route path="/categories" element={<ProductCategories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/quick-add" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/add" element={<AddCustomer />} />

            <Route
              path="/builder/collection"
              element={
                <CollectionConfigProvider>
                  <CollectionBuilder />
                </CollectionConfigProvider>
              }
            />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/modals" element={<Modals />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          <Route
            path="/catalog/status/preview"
            element={<StatusCatalogPreview />}
          />
          <Route
            path="/catalog/status/gallery"
            element={
              <GalleryConfigProvider>
                <StatusCatalogGallery />
              </GalleryConfigProvider>
            }
          />

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OtpVerification />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
