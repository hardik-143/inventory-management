import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import { ArrowRight } from "lucide-react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
            Create your account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Set up access with your team details below.
          </p>
        </header>

        <form className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="signup-first-name">First name</Label>
              <Input
                id="signup-first-name"
                name="firstName"
                placeholder="Jane"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-last-name">Last name</Label>
              <Input
                id="signup-last-name"
                name="lastName"
                placeholder="Cooper"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-email">Work email</Label>
            <Input
              id="signup-email"
              type="email"
              name="email"
              placeholder="you@inventoryteam.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <div className="relative">
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a secure password"
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

          <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
            <Checkbox checked={isChecked} onChange={setIsChecked} />
            <span>
              By creating an account you agree to our
              <span className="font-medium text-gray-800 dark:text-white">
                {" "}
                Terms of Service
              </span>{" "}
              and
              <span className="font-medium text-gray-800 dark:text-white">
                {" "}
                Privacy Policy
              </span>
              .
            </span>
          </label>

          <Button type="submit" className="w-full justify-center" size="md">
            Create account
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>

        <footer className="border-t border-gray-100 pt-6 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
          <span>Already have an account? </span>
          <Link
            to="/signin"
            className="font-semibold text-brand-500 transition hover:text-brand-600 dark:text-brand-300"
          >
            Sign in
          </Link>
        </footer>
      </div>
    </div>
  );
}
