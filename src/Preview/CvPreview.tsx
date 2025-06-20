import Skills from "../Components/Skills/Skills";
import Courses from "../Forms/Courses/Courses";
import Education from "../Forms/Education/Education";
import Experience from "../Forms/Experience/Experience";
import Header from "../Forms/Header/Header";
import Internship from "../Forms/Internship/Internship";
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
type SkillItem = {
  dataformOne: { title: string; skills: string[] }[];
  dataformTwo: { title: string; skills: { name: string; level: number }[] }[];
};
type educationItem = {
  degree: string;
  GPA?: string;
  major?: string;
  institution: string;
  location?: string;
  date: string;
  description?: string[];
};
type InternshipItem = {
  company: string;
  role: string;
  date: string;
  location?: string;
  description?: string[];
};
type CoursesItem = {
  title: string;
  institution: string;
  date: string;
  description?: string[];
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
  skills,
  education,
  courses,
  internships,
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
  skills: SkillItem;
  education: educationItem[];
  courses: CoursesItem[];
  internships: InternshipItem[];
}) {
  return (
    <>
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
        <Skills skills={skills} />
        <Education education={education} />
        <Courses courses={courses} />
        <Internship internship={internships} />
      </div>
    </>
  );
}
