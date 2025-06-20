import { useRef, useState } from "react";
import CvPreview from "../../Preview/CvPreview";
import { HeaderForm } from "../../Forms/Header/HeaderForm";
import { SocialLinksForm } from "../../Forms/SocialLinks/SocialLinksForm";
import { useReactToPrint } from "react-to-print";
import { usePersistentState } from "../../Preview/usePersistentState";
import ObjectiveForm from "../../Forms/Objective/ObjectiveForm";
import ExperienceForm from "../../Forms/Experience/ExperienceForm";
import ProjectsForm from "../../Forms/Projects/ProjectsForm";
import SkillsForm from "../../Components/Skills/SkillsForm";
import EducationForm from "../../Forms/Education/EducationForm";
import CoursesForm from "../../Forms/Courses/CoursesForm";
import InternshipForm from "../../Forms/Internship/InternshipForm";
type ProjectItem = {
  title: string;
  date: string;
  description: string[];
  technologies?: string[];
  links: { platform: string; label: string; url: string }[];
};

type ExperienceItem = {
  title: string;
  date: string;
  location: string;
  description: string[];
  // Remove this duplicate ProjectItem type definition and import it from a shared location instead.
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
type CoursesItem = {
  title: string;
  institution: string;
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

export default function CvBuilder() {
  const [name, setName] = usePersistentState("name", "");
  const [role, setRole] = usePersistentState("role", "");
  const [email, setEmail] = usePersistentState("email", "");
  const [github, setGithub] = usePersistentState("github", "");
  const [linkedIn, setLinkedIn] = usePersistentState("linkedIn", "");
  const [portfolio, setPortfolio] = usePersistentState("portfolio", "");
  const [city, setCity] = usePersistentState("city", "");
  const [phone, setPhone] = usePersistentState("phone", "");
  const [summary, setSummary] = usePersistentState("summary", "");
  const [summaryTitle, setSummaryTitle] = usePersistentState(
    "summaryTitle",
    ""
  );

  const [experiences, setExperiences] = usePersistentState<ExperienceItem[]>(
    "experiences",
    []
  );
  const [projects, setProjects] = usePersistentState<ProjectItem[]>(
    "projects",
    []
  );
  const [skills, setSkills] = usePersistentState<SkillItem>("skills", {
    dataformOne: [],
    dataformTwo: [],
  });
  const [education, setEducation] = usePersistentState<educationItem[]>(
    "education",
    []
  );
  const [courses, setCourses] = usePersistentState<CoursesItem[]>(
    "courses",
    []
  ); // Assuming Courses is similar to education
  const [internships, setInternships] = usePersistentState<InternshipItem[]>(
    "internships",
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const nextPage: () => void = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const renderPageTitle = () => {
    switch (currentPage) {
      case 1:
        return "📝 Personal & Contact Information";
      case 2:
        return "🎯 Objective & Career Summary";
      case 3:
        return "💼 Work Experience";
      case 4:
        return "🛠️ Projects "; // tools = hands-on work + abilities

      case 5:
        return "🧠 Skills"; // brain = knowledge & competence
      case 6:
        return "🎓 Education & Certifications"; // 🎓 = universal symbol for education

      case 7:
        return "📚 Courses"; // 📚 = focused learning resources

      case 8:
        return "🏢 Internships"; // 🏢 = company/office experience
      default:
        return "";
    }
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-cyan-700 min-h-screen md:py-20">
      <div className="container md:ps-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-7">
          {/* ======= LEFT: Form Section ======= */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 transition-colors duration-300">
              {/* Page Title */}
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {renderPageTitle()}
              </h2>

              {/* Page 1 */}
              {currentPage === 1 && (
                <>
                  <HeaderForm setName={setName} setRole={setRole} />
                  <SocialLinksForm
                    setEmail={setEmail}
                    setGithub={setGithub}
                    setLinkedIn={setLinkedIn}
                    setPortfolio={setPortfolio}
                    setCity={setCity}
                    setPhone={setPhone}
                  />
                </>
              )}

              {/* Page 2 */}
              {currentPage === 2 && (
                <ObjectiveForm
                  setSummary={setSummary}
                  setSummaryTitle={setSummaryTitle}
                />
              )}

              {/* Page 3 */}
              {currentPage === 3 && (
                <ExperienceForm
                  setExperiences={setExperiences}
                  experiences={experiences}
                />
              )}
              {/* Page 4 */}
              {currentPage === 4 && (
                <ProjectsForm setProjects={setProjects} projects={projects} />
              )}
              {/* Page 5 */}
              {currentPage === 5 && (
                <SkillsForm setSkills={setSkills} skills={skills} />
              )}
              {/* Page 6 */}
              {currentPage === 6 && (
                <EducationForm
                  setEducation={setEducation}
                  education={education}
                />
              )}
              {/* Page 7 */}
              {currentPage === 7 && (
                <>
                  <CoursesForm setCourses={setCourses} courses={courses} />
                </>
              )}
              {currentPage === 8 && (
                <>
                  <InternshipForm
                    setInternships={setInternships}
                    internships={internships}
                  />
                </>
              )}

              {/* Navigation Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-start gap-3">
                {currentPage > 1 && (
                  <button
                    onClick={prevPage}
                    className="px-4 cursor-pointer py-2 text-sm font-medium rounded-lg bg-gray-500 hover:bg-gray-600 text-white shadow transition"
                  >
                    Previous
                  </button>
                )}
                {currentPage < 8 && (
                  <button
                    onClick={nextPage}
                    className="px-4 py-2 cursor-pointer text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow transition"
                  >
                    Next
                  </button>
                )}
                <button
                  onClick={() => {
                    if (
                      confirm(
                        "Are you sure you want to reset all data? This cannot be undone."
                      )
                    ) {
                      localStorage.clear();
                      window.location.reload();
                    }
                  }}
                  className="px-4 py-2 text-sm cursor-pointer font-medium rounded-lg bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/40 dark:hover:text-red-300 transition-colors duration-200 border border-red-200 dark:border-red-800/50 shadow-sm flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Reset All Data
                </button>
              </div>
            </div>
          </div>

          {/* ======= RIGHT: CV Preview Section ======= */}
          <div className="lg:w-1/2 mb-52 md:me-10 md:ms-10">
            <div ref={contentRef}>
              <CvPreview
                name={name}
                role={role}
                email={email}
                github={github}
                linkedIn={linkedIn}
                portfolio={portfolio}
                city={city}
                phone={phone}
                summary={summary}
                SummaryTitle={summaryTitle}
                experiences={experiences}
                projects={projects}
                skills={skills}
                education={education}
                courses={courses}
                internships={internships}
              />
            </div>
            <div className="mt-4 flex items-start gap-2 bg-cyan-100 text-cyan-900 dark:bg-cyan-900/20 dark:text-cyan-200 border border-cyan-300 dark:border-cyan-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
              <span className="text-xl">⚠️</span>
              <div>
                <strong className="font-semibold">Important:</strong> Your CV
                data is <u>not saved automatically</u>. Please make sure to save
                or download your resume before leaving the page or refreshing.
              </div>
            </div>
            <button
              onClick={reactToPrintFn}
              className="mt-6 px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 shadow transition-colors duration-300"
            >
              Download CV
            </button>

            {/* A4 Preview Tip */}
            <div className="mt-4 flex items-start gap-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-300/10 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-500 rounded-lg px-4 py-3 shadow-sm text-sm max-w-md">
              <span className="text-xl">💡</span>
              <div>
                <strong className="font-semibold">Tip:</strong> For best
                results, click "Download CV" to preview your resume in{" "}
                <strong>A4 size</strong>. We recommend viewing in{" "}
                <em>portrait mode</em> for accuracy, especially on mobile.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
