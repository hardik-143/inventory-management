import { useState, Fragment, useRef } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  defaultValue = "",
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [openUpwards, setOpenUpwards] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption =
    options.find((opt) => opt.value === selectedValue) || null;

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  // Detect placement dynamically
  const handleOpen = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const estimatedDropdownHeight = 240; // ~ max-h-60

    // Open upwards if not enough space below
    setOpenUpwards(spaceBelow < estimatedDropdownHeight);
  };

  return (
    <Listbox value={selectedValue} onChange={handleSelect}>
      <div className={`relative w-full ${className}`}>
        {/* Button */}
        <ListboxButton
          ref={buttonRef}
          onClick={handleOpen}
          className={`
            h-11 w-full flex items-center justify-between rounded-lg border border-gray-300 
            bg-transparent px-4 py-2.5 text-sm shadow-theme-xs 
            focus:border-brand-300 focus:outline-hidden focus:ring-3 
            focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 
            dark:text-white/90
            ${selectedValue ? "text-gray-800! dark:text-white" : "text-gray-400!"}
          `}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>

          <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </ListboxButton>

        {/* Dropdown Panel */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <ListboxOptions
            className={`
              absolute ${openUpwards ? "bottom-full mb-2" : "top-full mt-2"}
              max-h-60 w-full overflow-auto rounded-lg border border-gray-200 
              bg-white py-1 text-sm shadow-lg focus:outline-hidden 
              dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 z-20
            `}
          >
            {/* Placeholder (disabled) */}
            <ListboxOption
              value=""
              disabled
              className="cursor-not-allowed select-none px-4 py-2 text-gray-400 dark:text-gray-600"
            >
              {placeholder}
            </ListboxOption>

            {/* Options */}
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `
                  cursor-pointer select-none px-4 py-2 
                  ${active ? "bg-brand-50 dark:bg-brand-900/30" : ""}
                `
                }
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-900! dark:text-white">
                      {option.label}
                    </span>

                    {selected && (
                      <Check className="h-4 w-4 text-brand-600 dark:text-brand-300" />
                    )}
                  </div>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
