import {
  AiFillPhone,
  AiOutlineMail,
  AiFillHome,
  AiFillLinkedin,
} from "react-icons/ai";

type BasicProps = {
  Name: string;
  role: string;
  companyName: string;
  address?: string;
  phone?: string;
  description?: string[];
  linkedIn?: string;
  ManagerName?: string;
  ManagerJobTitle?: string;
  ManagerGender?: string;
  date?: string;
  gmail?: string;
  ManagerGmail?: string;
  CompanyCity?: string;
  Companystate?: string;
  CompanyZipCode?: string;
  CompanyAddress?: string;
  ManagerLastName?: string;
};

export default function Basic({ basic }: { basic: BasicProps[] }) {
  if (!basic.length) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 space-y-6">
      {basic.map((item, i) => {
        // Format date nicely if present
        const formattedDate = item.date
          ? new Date(item.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          : null;

        // Greeting logic: fallback to ManagerName if ManagerLastName missing
        const greeting =
          !item.ManagerGender || (!item.ManagerLastName && !item.ManagerName)
            ? "Dear Hiring Manager,"
            : item.ManagerGender === "Male"
            ? `Dear Mr. ${item.ManagerLastName || item.ManagerName},`
            : `Dear Mrs. ${item.ManagerLastName || item.ManagerName},`;

        return (
          <div key={i} className="space-y-6">
            {/* Date */}
            {formattedDate && (
              <p className="text-gray-700 text-sm">{formattedDate}</p>
            )}

            {/* Your contact info */}
            <div className="space-y-1 text-gray-700 text-sm">
              <p className="text-xl font-semibold">{item.Name}</p>{" "}
              {/* bigger name */}
              {item.address && (
                <p className="flex items-center gap-1">
                  <AiFillHome /> {item.address}
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                {item.phone && (
                  <span className="flex items-center gap-1">
                    <AiFillPhone /> {item.phone}
                  </span>
                )}
                {item.gmail && (
                  <span className="flex items-center gap-1">
                    <AiOutlineMail /> {item.gmail}
                  </span>
                )}
                {item.linkedIn && (
                  <a
                    href={item.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 underline"
                  >
                    <AiFillLinkedin /> LinkedIn
                  </a>
                )}
              </div>
            </div>

            {/* subtle divider after contact */}
            <hr className="my-4 border-gray-200" />

            {/* Company block */}
            <div className="space-y-1 text-gray-700 text-sm">
              <p className="text-lg font-medium">{item.companyName}</p>{" "}
              {/* larger companyName */}
              {(item.ManagerJobTitle || item.ManagerName) && (
                <p>
                  {item.ManagerJobTitle ? `${item.ManagerJobTitle} ` : ""}
                  {item.ManagerName || ""}
                </p>
              )}
              {item.CompanyAddress && <p>{item.CompanyAddress}</p>}
              {(item.CompanyCity ||
                item.Companystate ||
                item.CompanyZipCode) && (
                <p>
                  {item.CompanyCity ? `${item.CompanyCity}, ` : ""}
                  {item.Companystate ? `${item.Companystate} ` : ""}
                  {item.CompanyZipCode ? item.CompanyZipCode : ""}
                </p>
              )}
            </div>

            {/* Body */}
            <div className="space-y-4 text-gray-800 text-[15px] leading-relaxed">
              <p>{greeting}</p>
              <p>
                My name is {item.Name}, and I am writing to express my interest
                in the {item.role} position at {item.companyName}.
              </p>

              {item.description && item.description.length > 0 && (
                <div className="space-y-2">
                  {item.description.map((desc, idx) => (
                    <p key={idx} className="whitespace-pre-wrap">
                      {desc}
                    </p>
                  ))}
                </div>
              )}

              <p>
                Thank you for considering my application. I look forward to
                discussing how I can contribute to {item.companyName}.
              </p>

              <p>Sincerely,</p>
              <p>{item.Name}</p>

              {/* CC manager email if available */}
              {item.ManagerGmail && (
                <p className="text-sm text-gray-500">CC: {item.ManagerGmail}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
