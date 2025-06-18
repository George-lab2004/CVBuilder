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
        <div className="text-left w-[90%] mx-auto my-6">
          <h2 className="text-2xl font-semibold">{SummaryTitle}</h2>

          {summaryText && (
            <>
              {/* Floating Horizontal Line */}
              <div className="my-2 border-t-2  border-gray-600 w-full mx-auto" />

              {/* Summary Content */}
              <p className="mt-4 text-lg leading-relaxed">{summaryText}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
