import Header from "../Forms/Header/Header";
import SocialLinks from "../Forms/SocialLinks/SocialLinks";

export default function CvPreview({
  name,
  role,
  email,
  github,
  linkedIn,
  portfolio,
  city,
  phone,
}: {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedIn: string;
  portfolio: string;
  city: string;
  phone: string;
}) {
  return (
    <div className=" px-4 py-2  m-2 mb-2 bg-white ">
      <Header name={name} job={role} />
      <SocialLinks
        github={github}
        linkedin={linkedIn}
        portfolio={portfolio}
        email={email}
        city={city}
        phone={phone}
      />
    </div>
  );
}
