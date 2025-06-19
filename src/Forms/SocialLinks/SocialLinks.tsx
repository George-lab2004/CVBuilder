import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi"; // minimal and sharp

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
    { name: "Email", value: email, isLink: false, icon: <AiOutlineMail /> },
    {
      name: "Github",
      value: github,
      isLink: !!github?.startsWith("http"),
      icon: <AiFillGithub />,
    },
    {
      name: "LinkedIn",
      value: linkedin,
      isLink: !!linkedin?.startsWith("http"),
      icon: <AiFillLinkedin />,
    },
    {
      name: "Portfolio",
      value: portfolio,
      isLink: !!portfolio?.startsWith("http"),
      icon: <FiGlobe />,
    },
    { name: "City", value: city, isLink: false, icon: <FiMapPin /> },
    { name: "Phone", value: phone, isLink: false, icon: <AiFillPhone /> },
  ].filter((item) => item.value); // filter out nulls

  return (
    <div className="flex flex-wrap justify-center gap-x-3 mx-auto gap-y-2 w-[80%] text-base text-black">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {item.isLink ? (
            <a
              href={item.value!}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800 transition flex items-center gap-1"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ) : (
            <span className="flex items-center gap-1">
              <span className="text-lg">{item.icon}</span>
              <span>{item.value}</span>
            </span>
          )}
          {index < items.length - 1 && (
            <span className="mx-1 text-gray-500">-</span>
          )}
        </span>
      ))}
    </div>
  );
}
