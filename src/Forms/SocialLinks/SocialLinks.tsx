export default function SocialLinks({
  email,
  github,
  linkedin,
  portfolio,
  city,
  phone,
}: {
  email: string | null;
  github: string | null;
  linkedin: string | null;
  portfolio: string | null;
  city: string | null;
  phone: string | null;
}) {
  const items = [
    { name: "Email", value: email, isLink: false },
    { name: "Github", value: github, isLink: !!github?.startsWith("http") },
    {
      name: "LinkedIn",
      value: linkedin,
      isLink: !!linkedin?.startsWith("http"),
    },
    {
      name: "Portfolio",
      value: portfolio,
      isLink: !!portfolio?.startsWith("http"),
    },
    { name: "City", value: city, isLink: false },
    { name: "Phone", value: phone, isLink: false },
  ].filter((item) => item.value); // filter out nulls

  return (
    <div className="flex flex-wrap justify-center gap-x-3 mx-auto gap-y-2 w-[80%] text-base text-black">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {item.isLink ? (
            <a
              href={item.value!}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800 transition"
            >
              {item.name}
            </a>
          ) : (
            <span>{item.value}</span>
          )}
          {/* Dash between items */}
          {index < items.length - 1 && (
            <span className="mx-1 text-gray-500">-</span>
          )}
        </span>
      ))}
    </div>
  );
}
