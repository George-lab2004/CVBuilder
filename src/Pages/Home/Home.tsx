import gif from "../../../src/assets/resume.gif";

export default function Home() {
  return (
    <section className="bg-hero dark:bg-dark-hero py-12 md:py-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <span className="inline-block text-primary-700 dark:text-primary-400 text-lg md:text-xl font-semibold mb-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-1.5 rounded-full">
              Fast. Easy. Effective
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white leading-tight">
              Build Your Professional{" "}
              <span className="text-primary-600 dark:text-primary-400">CV</span>{" "}
              in Minutes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-[90%] lg:max-w-[80%]">
              Create a winning resume that gets noticed. Our AI-powered
              templates help you showcase your skills and experience
              professionally, increasing your chances of landing interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-primary-500/20 dark:shadow-primary-400/10">
                Start Building CV →
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Create Cover Letter
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Completely Free, fast and effective{" "}
              </div>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                ATS-optimized templates
              </div>
            </div>
          </div>

          {/* Right side - GIF showcase */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <img
                src={gif}
                alt="Resume builder interface preview"
                className="w-full h-auto rounded-xl shadow-2xl border-8 border-white dark:border-gray-800"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  Try it now!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
