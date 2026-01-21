import { softBackgroundColors } from "@/context/galleryConfig.constants";
import clsx from "clsx";
import { useState } from "react";

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

  const selectedOption =
    softBackgroundColors.find((bg) => bg.value === selectedColor) ||
    softBackgroundColors[0];

  return (
    <div className="relative">
      {/* Main Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 transition"
      >
        <div className="flex items-center gap-3">
          {/* Color Preview */}
          <div
            className="w-6 h-6 rounded-full border-2 border-slate-300 shadow-sm"
            style={{ backgroundColor: selectedOption.value }}
          />
          {/* Color Name */}
          <span className="font-medium text-slate-900">
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
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-300 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
          {softBackgroundColors.map((bg) => (
            <button
              key={bg.value}
              onClick={() => {
                if (onColorSelect) {
                  onColorSelect(bg.value);
                }
                if (onSelect) {
                  onSelect(bg);
                }
                setIsDropdownOpen(false);
              }}
              className={clsx(
                "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-100 transition",
                "first:rounded-t-lg last:rounded-b-lg",
                selectedColor === bg.value && "bg-blue-50",
              )}
            >
              {/* Color Preview */}
              <div
                className="w-8 h-8 rounded-full border-2 border-slate-300 shadow-sm shrink-0"
                style={{ backgroundColor: bg.value }}
              />

              {/* Color Details */}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-slate-900">{bg.name}</div>
                <div className="text-sm text-slate-500 font-mono">
                  {bg.value}
                </div>
              </div>

              {/* Selected Checkmark */}
              {selectedColor === bg.value && (
                <svg
                  className="w-5 h-5 text-blue-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
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
