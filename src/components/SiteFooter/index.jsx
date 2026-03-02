import React, { useState } from "react";

function isAnchorComponent(LinkComponent) {
  return (
    typeof LinkComponent === "string" && LinkComponent.toLowerCase() === "a"
  );
}

export function SiteFooter({
  brand,
  tagline,
  socialHeading = "Social",
  companyHeading = "Company",
  newsletterHeading = "Newsletter",
  socialLinks = [],
  companyLinks = [],
  newsletterPlaceholder = "Email address",
  newsletterButtonLabel = "Subscribe",
  onNewsletterSubmit,
  LinkComponent = "a",
  showCookiePreferences = false,
  onCookiePreferencesClick,
  copyrightName,
}) {
  const [email, setEmail] = useState("");
  const useAnchor = isAnchorComponent(LinkComponent);

  const renderCompanyLink = (item) => {
    if (useAnchor) {
      return (
        <a
          href={item.to}
          className="inline-flex items-center gap-2 hover:text-blue-600 hover:underline"
        >
          {item.label}
        </a>
      );
    }
    return (
      <LinkComponent
        to={item.to}
        className="inline-flex items-center gap-2 hover:text-blue-600 hover:underline"
      >
        {item.label}
      </LinkComponent>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onNewsletterSubmit) {
      onNewsletterSubmit(email);
    }
    setEmail("");
  };

  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-12 px-4 lg:flex-row">
        <div className="flex flex-shrink-0 flex-col items-center text-center lg:items-start lg:text-left">
          <div className="flex items-center space-x-3">
            {brand?.logoSrc ? (
              <img
                src={brand.logoSrc}
                alt={brand?.logoAlt || `${brand?.name || "Site"} logo`}
                width={56}
                height={56}
                className="rounded-full"
                loading="lazy"
              />
            ) : null}
            <span className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
              {brand?.name}
            </span>
          </div>
          {tagline ? (
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {tagline}
            </p>
          ) : null}
        </div>

        <div className="flex w-full flex-wrap justify-between gap-8 lg:w-3/4">
          <div>
            <h3 className="mb-3 font-semibold text-zinc-800 dark:text-zinc-200">
              {socialHeading}
            </h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center space-x-2 transition-colors hover:text-blue-600"
                  >
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-zinc-800 dark:text-zinc-200">
              {companyHeading}
            </h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              {companyLinks.map((item) => (
                <li key={item.to}>{renderCompanyLink(item)}</li>
              ))}

              {showCookiePreferences ? (
                <li>
                  <button
                    type="button"
                    onClick={onCookiePreferencesClick}
                    className="inline-flex items-center gap-2 hover:text-blue-600 hover:underline"
                  >
                    Cookie Preferences
                  </button>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="w-full lg:w-auto">
            <h3 className="mb-3 font-semibold text-zinc-800 dark:text-zinc-200">
              {newsletterHeading}
            </h3>
            <form
              className="flex flex-col items-start gap-2 sm:flex-row sm:items-center"
              onSubmit={handleSubmit}
            >
              <label htmlFor="site-footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="site-footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={newsletterPlaceholder}
                className="flex-grow rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-zinc-200"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-white transition-colors hover:bg-blue-700"
              >
                {newsletterButtonLabel}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        Copyright {new Date().getFullYear()} {copyrightName || brand?.name}. All
        rights reserved.
      </div>
    </footer>
  );
}
