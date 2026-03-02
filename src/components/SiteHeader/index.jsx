import React, { useMemo, useState } from "react";

function isAnchorComponent(LinkComponent) {
  return (
    typeof LinkComponent === "string" && LinkComponent.toLowerCase() === "a"
  );
}

function isPathActive(currentPath, to) {
  if (!to) return false;
  if (to === "/") return currentPath === "/";
  return currentPath === to || currentPath.startsWith(to);
}

export function SiteHeader({
  brand,
  links = [],
  currentPath = "",
  LinkComponent = "a",
  sticky = true,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const useAnchor = isAnchorComponent(LinkComponent);

  const normalizedSections = useMemo(
    () =>
      links.map((entry) => {
        if (Array.isArray(entry.items)) {
          return {
            type: "group",
            label: entry.label,
            items: entry.items,
          };
        }
        return {
          type: "item",
          to: entry.to,
          label: entry.label,
        };
      }),
    [links],
  );

  const homeHref = brand?.homeHref || "/";

  const renderLink = (item, className) => {
    if (useAnchor) {
      return (
        <a href={item.to} className={className}>
          {item.label}
        </a>
      );
    }
    return (
      <LinkComponent to={item.to} className={className}>
        {item.label}
      </LinkComponent>
    );
  };

  const renderHomeLink = (className) => {
    if (useAnchor) {
      return (
        <a href={homeHref} className={className} aria-label={brand?.ariaLabel}>
          {brand?.logoSrc ? (
            <img
              src={brand.logoSrc}
              alt={brand?.logoAlt || `${brand?.name || "Site"} logo`}
              width={40}
              height={40}
              className="rounded-full"
              loading="eager"
            />
          ) : null}
          <span className="text-xl font-bold tracking-tight">
            {brand?.name}
          </span>
        </a>
      );
    }

    return (
      <LinkComponent
        to={homeHref}
        className={className}
        aria-label={brand?.ariaLabel}
      >
        {brand?.logoSrc ? (
          <img
            src={brand.logoSrc}
            alt={brand?.logoAlt || `${brand?.name || "Site"} logo`}
            width={40}
            height={40}
            className="rounded-full"
            loading="eager"
          />
        ) : null}
        <span className="text-xl font-bold tracking-tight">
          {brand?.name}
        </span>
      </LinkComponent>
    );
  };

  return (
    <header
      className={`border-b border-zinc-800 bg-zinc-950/80 backdrop-blur ${
        sticky ? "sticky top-0 z-40" : ""
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        {renderHomeLink("inline-flex items-center gap-3 text-white")}

        <nav className="hidden items-center gap-3 md:flex">
          {normalizedSections.map((entry) => {
            if (entry.type === "group") {
              return (
                <div key={entry.label} className="flex items-center gap-1">
                  <span className="px-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    {entry.label}
                  </span>
                  {entry.items.map((item) => {
                    const active = isPathActive(currentPath, item.to);
                    const className = `rounded-lg px-3 py-2 text-sm transition ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    }`;
                    return (
                      <React.Fragment key={item.to}>
                        {renderLink(item, className)}
                      </React.Fragment>
                    );
                  })}
                </div>
              );
            }

            const active = isPathActive(currentPath, entry.to);
            const className = `rounded-lg px-3 py-2 text-sm transition ${
              active
                ? "bg-indigo-600 text-white"
                : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
            }`;
            return (
              <React.Fragment key={entry.to}>
                {renderLink(entry, className)}
              </React.Fragment>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen ? "true" : "false"}
        >
          Menu
        </button>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-zinc-800 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {normalizedSections.map((entry) => {
              if (entry.type === "group") {
                return (
                  <div
                    key={entry.label}
                    className="space-y-1 rounded-md border border-zinc-800 p-2"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {entry.label}
                    </p>
                    {entry.items.map((item) => {
                      const active = isPathActive(currentPath, item.to);
                      const className = `block rounded-md px-3 py-2 text-sm transition ${
                        active
                          ? "bg-indigo-600 text-white"
                          : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                      }`;
                      return (
                        <div key={item.to} onClick={() => setMobileOpen(false)}>
                          {renderLink(item, className)}
                        </div>
                      );
                    })}
                  </div>
                );
              }

              const active = isPathActive(currentPath, entry.to);
              const className = `block rounded-md px-3 py-2 text-sm transition ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              }`;
              return (
                <div key={entry.to} onClick={() => setMobileOpen(false)}>
                  {renderLink(entry, className)}
                </div>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
