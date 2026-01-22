type RangeInputProps = {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string | React.ReactNode;
  showValue?: boolean;
};

export default function RangeInput({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label,
  showValue = true,
}: RangeInputProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full space-y-3">
      {label && (
        <div className="flex items-center justify-between pe-1">
          <label className="text-sm font-medium text-slate-900">{label}</label>
          {showValue && (
            <span className="text-sm font-semibold text-brand-500">
              {value}
            </span>
          )}
        </div>
      )}

      <div className="relative h-2 w-full rounded-full bg-gray-200">
        {/* Filled Track */}
        <div
          className="absolute left-0 top-0 h-2 rounded-full bg-brand-500"
          style={{ width: `${percentage}%` }}
        />

        {/* Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute -top-1 h-4 w-full cursor-pointer appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-brand-500
            [&::-webkit-slider-thumb]:shadow
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-brand-500
            [&::-moz-range-thumb]:border-0"
        />
      </div>
    </div>
  );
}
