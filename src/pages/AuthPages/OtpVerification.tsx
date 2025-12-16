import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import OtpForm from "../../components/auth/OtpForm";

export default function OtpVerification() {
  return (
    <>
      <PageMeta
        title="React.js OTP Verification | TailAdmin - React.js Admin Dashboard Template"
        description="Secure one-time passcode verification flow for TailAdmin React.js admin dashboard template."
      />
      <AuthLayout>
        <OtpForm />
      </AuthLayout>
    </>
  );
}
