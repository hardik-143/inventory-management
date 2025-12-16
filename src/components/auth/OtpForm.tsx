import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { clsx } from "clsx";
import { ArrowLeft, ArrowRight, Mail, RefreshCw, Timer } from "lucide-react";
import Button from "../ui/button/Button";

const OTP_LENGTH = 6;
const RESEND_DELAY = 45;

const createEmptyDigits = () => Array(OTP_LENGTH).fill("");

export default function OtpForm() {
  const [digits, setDigits] = useState<string[]>(() => createEmptyDigits());
  const [timeLeft, setTimeLeft] = useState<number>(RESEND_DELAY);
  const [isVerifying, setIsVerifying] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return undefined;
    const timer = window.setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [timeLeft]);

  const formattedCountdown = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [timeLeft]);

  const canSubmit = useMemo(
    () => digits.every((digit) => digit !== ""),
    [digits]
  );

  const handleChange = (index: number, rawValue: string) => {
    const sanitized = rawValue.replace(/[^0-9]/g, "");

    setDigits((prev) => {
      const next = [...prev];
      next[index] = sanitized.charAt(0) ?? "";
      return next;
    });

    if (sanitized && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const { key } = event;

    if (key === "Backspace") {
      event.preventDefault();
      if (digits[index]) {
        setDigits((prev) => {
          const next = [...prev];
          next[index] = "";
          return next;
        });
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        setDigits((prev) => {
          const next = [...prev];
          next[index - 1] = "";
          return next;
        });
      }
      return;
    }

    if (key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      inputsRef.current[index - 1]?.focus();
    }

    if (key === "ArrowRight" && index < OTP_LENGTH - 1) {
      event.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, OTP_LENGTH);
    if (!pasted) return;

    const nextDigits = pasted.split("");
    while (nextDigits.length < OTP_LENGTH) {
      nextDigits.push("");
    }
    setDigits(nextDigits);
    inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    setIsVerifying(true);
    setStatusMessage(null);

    window.setTimeout(() => {
      setIsVerifying(false);
      setStatusMessage("Code accepted! Redirecting you now...");
    }, 1200);
  };

  const handleResend = () => {
    setDigits(createEmptyDigits());
    setTimeLeft(RESEND_DELAY);
    setStatusMessage("We just sent a fresh code to your inbox.");
    inputsRef.current[0]?.focus();
  };

  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-gray-200 bg-white/95 p-8 shadow-xl shadow-brand-500/10 backdrop-blur dark:border-white/10 dark:bg-gray-900/95">
      <Link
        to="/signin"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <ArrowLeft className="size-4" />
        Back to login
      </Link>

      <div className="mt-6 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Enter your verification code
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We sent a 6-digit code to
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              {" "}
              claire@inventory.dev
            </span>
            . The code expires in {formattedCountdown}.
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-3 sm:gap-4">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputsRef.current[index] = element;
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                onPaste={handlePaste}
                onFocus={(event) => event.currentTarget.select()}
                disabled={isVerifying}
                aria-label={`Digit ${index + 1}`}
                className={clsx(
                  "h-14 w-full rounded-2xl border bg-white text-center text-lg font-semibold tracking-[0.3em] text-gray-900 shadow-theme-xs transition focus:border-brand-400 focus:shadow-focus-ring focus:outline-hidden dark:bg-gray-900 dark:text-white",
                  digit
                    ? "border-brand-200 dark:border-brand-400"
                    : "border-gray-200 dark:border-white/10"
                )}
              />
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr),auto] sm:items-center">
            <Button
              type="submit"
              className="w-full justify-center"
              size="md"
              disabled={!canSubmit || isVerifying}
            >
              {isVerifying ? "Verifying..." : "Confirm & continue"}
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              variant="outline"
              className="w-full justify-center sm:w-auto"
              size="md"
              onClick={handleResend}
              disabled={timeLeft > 0 || isVerifying}
            >
              <RefreshCw className="mr-2 size-4" />
              Resend code
            </Button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
          <Timer className="size-4 text-brand-500" />
          Session expires in {formattedCountdown}
        </div>

        {statusMessage && (
          <div className="rounded-2xl border border-success-200 bg-success-50/80 p-4 text-sm font-medium text-success-700 dark:border-success-500/30 dark:bg-success-500/10 dark:text-success-200">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}
