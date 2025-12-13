interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
  showHeader?: boolean; // Flag to show or hide header
  extraHeaderContent?: React.ReactNode; // Additional content in header
  headerClassName?: string; // Additional classes for header styling
}

const ComponentCard = ({
  title,
  children,
  className = "",
  desc = "",
  showHeader = true,
  extraHeaderContent,
  headerClassName = "",
}: ComponentCardProps) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3 ${className}`}
    >
      {/* Card Header */}
      {showHeader && (
        <div
          className={`px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex flex-wrap gap-y-4 justify-between ${headerClassName}`}
        >
          <div className="flex items-start flex-col justify-center">
            <h3 className="text-2xl mb-0! font-medium text-gray-800 dark:text-white/90">
              {title}
            </h3>
            {desc && (
              <p className="mt-1 mb-0! text-sm text-gray-500 dark:text-gray-400">
                {desc}
              </p>
            )}
          </div>
          {extraHeaderContent}
        </div>
      )}

      {/* Card Body */}
      <div className="p-4  sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
