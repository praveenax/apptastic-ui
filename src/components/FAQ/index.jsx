import * as React from "react";

export function FAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  if (!faqs.length) return null;

  const toggleIndex = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-300">
            Help & Information
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            A quick overview of what Apptastic Coder is about, how the site
            works, and how you can get the most value from the content, tools,
            and job listings shared here.
          </p>
        </header>

        <section className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-panel-${index}`;
            return (
              <div key={index} className="px-4 py-3 sm:px-5 sm:py-4">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="text-sm font-semibold text-slate-100 sm:text-base dark:text-sky-400 text-sky-700">
                    {item.question}
                  </span>

                  {/* simple chevron icon */}
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4A1 1 0 017.293 12.293L10.586 9 7.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    className="mt-2 text-sm leading-relaxed text-slate-300"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
