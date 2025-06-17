import { useRef, useState } from "react";
import CvPreview from "../../Preview/CvPreview";
import { HeaderForm } from "../../Forms/Header/HeaderForm";
import { SocialLinksForm } from "../../Forms/SocialLinks/SocialLinksForm";
import { useReactToPrint } from "react-to-print";
export default function CvBuilder() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <section className="py-12 bg-blue-300 dark:bg-cyan-700 md:py-20">
      <div className="container md:ps-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-7">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow">
              <HeaderForm setName={setName} setRole={setRole} />
              <SocialLinksForm
                setEmail={setEmail}
                setGithub={setGithub}
                setLinkedIn={setLinkedIn}
                setPortfolio={setPortfolio}
                setCity={setCity}
                setPhone={setPhone}
              />
            </div>
          </div>
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
              />
            </div>
            <button
              onClick={reactToPrintFn}
              className="mt-6 px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 shadow transition-colors duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
