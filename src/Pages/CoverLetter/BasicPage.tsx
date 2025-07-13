import { useReactToPrint } from "react-to-print";
import BasicForm from "../../Forms/CoverLetter/Basic/BasicForm";
import BasicPreview from "../../Preview/CoverLetter/BasicPreview";
import { usePersistentState } from "../../Preview/usePersistentState";
import { useRef } from "react";
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

export default function BasicPage() {
  const [basic, setBasic] = usePersistentState<BasicProps[]>("Basic", []);
  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <section className="py-12 bg-gray-100 dark:bg-cyan-700 min-h-screen md:py-20">
      <div className="container md:ps-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-7">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <BasicForm basic={basic} setBasic={setBasic} />
          </div>
          <div className="lg:w-1/2 mb-52 md:me-10 md:ms-10">
            <h1 className="text-xl text-center   dark:text-white">
              Cover Letter Preview
            </h1>
            <div ref={contentRef}>
              <BasicPreview basic={basic} />
            </div>
            <div className="lg:w-1/2 mb-52 md:me-10 md:ms-10">
              <button
                onClick={reactToPrintFn}
                className="mt-6 px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 shadow transition-colors cursor-pointer duration-300"
              >
                Download CoverLetter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
