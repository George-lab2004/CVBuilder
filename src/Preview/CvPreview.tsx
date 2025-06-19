import Experience from "../Forms/Experience/Experience";
import Header from "../Forms/Header/Header";
import Objective from "../Forms/Objective/Objective";
import Projects from "../Forms/Projects/Projects";
import SocialLinks from "../Forms/SocialLinks/SocialLinks";

type ExperienceItem = {
  title: string;
  date: string;
  location: string;
  description: string[];
};

type ProjectItem = {
  title: string;
  date: string;
  description: string[];
  technologies?: string[];
  links: { platform: string; label: string; url: string }[];
};

export default function CvPreview({
  name,
  role,
  email,
  github,
  linkedIn,
  portfolio,
  city,
  phone,
  summary,
  SummaryTitle,
  experiences,
  projects,
}: {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedIn: string;
  portfolio: string;
  city: string;
  phone: string;
  summary: string | null;
  SummaryTitle: string | null;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
}) {
  return (
    <div className="px-4 py-2 m-2 mb-2 bg-white">
      <Header name={name} job={role} />
      <SocialLinks
        github={github}
        linkedin={linkedIn}
        portfolio={portfolio}
        email={email}
        city={city}
        phone={phone}
      />
      <Objective Summary={summary} summaryTitle={SummaryTitle} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
    </div>
  );
}
