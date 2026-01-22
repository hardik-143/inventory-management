import { softBackgroundColors } from "@/context/galleryConfig.constants";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function BackgroundColorDropdown({
  selectedColor,
  onColorSelect,
  onSelect,
}: {
  selectedColor: string;
  onColorSelect?: (color: string) => void;
  onSelect?: (object: {
    name: string;
    value: string;
    textColor: string;
  }) => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const updateDropdownPosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const dropdownHeight = 260; // max-h-64 approx
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    const openBelow = spaceBelow >= dropdownHeight || spaceBelow > spaceAbove;

    setDropdownStyle({
      position: "absolute",
      left: rect.left,
      width: rect.width,
      top: openBelow
        ? rect.bottom + window.scrollY + 6
        : rect.top + window.scrollY - dropdownHeight - 6,
      zIndex: 9999,
    });
  };
  useEffect(() => {
    if (isDropdownOpen) {
      updateDropdownPosition();
      window.addEventListener("scroll", updateDropdownPosition);
      window.addEventListener("resize", updateDropdownPosition);
    }

    return () => {
      window.removeEventListener("scroll", updateDropdownPosition);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [isDropdownOpen]);

  const selectedOption =
    softBackgroundColors.find((bg) => bg.value === selectedColor) ||
    softBackgroundColors[0];

  return (
    <div className="relative">
      {/* Main Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        ref={buttonRef}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 transition"
      >
        <div className="flex items-center gap-3">
          {/* Color Preview */}
          <div
            className="w-7 h-7 rounded-lg border border-slate-300 shadow-sm"
            style={{ backgroundColor: selectedOption.value }}
          />
          {/* Color Name */}
          <span className="font-medium  text-slate-900">
            {selectedOption.name}
          </span>
        </div>

        {/* Dropdown Arrow */}
        <svg
          className={clsx(
            "w-5 h-5 transition-transform duration-200 text-slate-900",
            isDropdownOpen ? "rotate-180" : "rotate-0",
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen &&
        createPortal(
          <>
            {/* Dropdown */}
            <div
              style={dropdownStyle}
              className="bg-white border border-slate-300 rounded-lg shadow-lg max-h-64 overflow-y-auto"
            >
              {softBackgroundColors.map((bg) => (
                <button
                  key={bg.value}
                  onClick={() => {
                    onColorSelect?.(bg.value);
                    onSelect?.(bg);
                    setIsDropdownOpen(false);
                  }}
                  className={clsx(
                    "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-100",
                    selectedColor === bg.value && "bg-blue-50",
                  )}
                >
                  <div
                    className="w-8 h-8 rounded-lg border"
                    style={{ backgroundColor: bg.value }}
                  />
                  <div className="flex-1">
                    <div className="font-medium">{bg.name}</div>
                    <div className="text-xs font-mono text-slate-500">
                      {bg.value}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[9998]"
              onClick={() => setIsDropdownOpen(false)}
            />
          </>,
          document.body,
        )}

      {/* Backdrop to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
}

export default BackgroundColorDropdown;
