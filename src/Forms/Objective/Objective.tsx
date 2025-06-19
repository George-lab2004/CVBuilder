export default function Objective({
  Summary,
  summaryTitle,
}: {
  Summary: string | null;
  summaryTitle: string | null;
}) {
  const summaryText = Summary?.trim();
  const SummaryTitle = summaryTitle?.trim();

  return (
    <>
      {summaryTitle && (
        <div className="text-left w-[98%] mx-auto mt-1">
          <h2 className="text-lg font-semibold">{SummaryTitle}</h2>

          {summaryText && (
            <>
              {/* Floating Horizontal Line */}
              <div className="my-1 border-t-2  border-gray-600 w-full mx-auto" />

              {/* Summary Content */}
              <p className="mt-1 text-sm leading-relaxed">{summaryText}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
