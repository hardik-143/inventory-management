import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import { ArrowRight, Lock, Mail } from "lucide-react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);

  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-gray-200 bg-white/95 p-8 shadow-xl shadow-brand-500/10 backdrop-blur dark:border-white/10 dark:bg-gray-900/95">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <ChevronLeftIcon className="size-5" />
        Back to dashboard
      </Link>

      <div className="mt-6 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Access your inventory console with your email and password.
          </p>
        </header>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="signin-email">Email address</Label>
            <Input
              id="signin-email"
              type="email"
              placeholder="you@inventoryteam.com"
              prefix={<Mail className="size-4" />}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signin-password">Password</Label>
            <div className="relative">
              <Input
                id="signin-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                prefix={<Lock className="size-4" />}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600 focus:outline-hidden dark:text-gray-500 dark:hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeIcon className="size-5 fill-current" />
                ) : (
                  <EyeCloseIcon className="size-5 fill-current" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="inline-flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <Checkbox checked={rememberDevice} onChange={setRememberDevice} />
              Remember this device
            </label>
            <Link
              to="/reset-password"
              className="text-sm font-medium text-brand-500 transition hover:text-brand-600 dark:text-brand-300"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full justify-center" size="md">
            Sign in
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>

        <footer className="border-t border-gray-100 pt-6 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
          <span>Don&apos;t have an account? </span>
          <Link
            to="/signup"
            className="font-semibold text-brand-500 transition hover:text-brand-600 dark:text-brand-300"
          >
            Create one now
          </Link>
        </footer>
      </div>
    </div>
  );
}
