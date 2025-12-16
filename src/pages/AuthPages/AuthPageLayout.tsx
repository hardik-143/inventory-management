import React from "react";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-10 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,_70,_229,_0.12),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(79,_70,_229,_0.18),_transparent_60%)]"
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-xl">{children}</div>
      <div className="fixed bottom-6 right-6 hidden sm:block">
        <ThemeTogglerTwo />
      </div>
    </div>
  );
}
