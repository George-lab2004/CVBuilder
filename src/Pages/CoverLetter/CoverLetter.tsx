import { Link } from "react-router-dom";
import vite from "/vite.svg";

export default function CoverLetter() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-300 dark:from-cyan-800 dark:via-cyan-900 dark:to-cyan-950 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700 flex flex-col items-center p-6 transition-transform hover:scale-105">
          <img src={vite} alt="Basic Cover Letter" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Basic Cover Letter Template
          </h2>
          <Link to="/basic" className="btn btn-primary dark:text-white mt-auto">
            Preview
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700 flex flex-col items-center p-6 transition-transform hover:scale-105">
          <img
            src={vite}
            alt="Modern Cover Letter"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Modern Cover Letter Template
          </h2>
          <Link
            to="/modern"
            className="btn dark:text-white btn-primary mt-auto"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
