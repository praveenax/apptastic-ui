import React from "react";

function isAnchorComponent(LinkComponent) {
  return (
    typeof LinkComponent === "string" && LinkComponent.toLowerCase() === "a"
  );
}

function LinkButton({ LinkComponent, to, className, children }) {
  const useAnchor = isAnchorComponent(LinkComponent);
  if (useAnchor) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
  return (
    <LinkComponent to={to} className={className}>
      {children}
    </LinkComponent>
  );
}

export function HeroSection({
  badgeText,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description,
  primaryCta,
  secondaryCta,
  quickLinks = [],
  LinkComponent = "a",
}) {
  return (
    <section className="relative isolate overflow-hidden border-zinc-800 bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.14),transparent_32%)]" />
      <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-zinc-950/55" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="max-w-3xl">
          {badgeText ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
              {badgeText}
            </p>
          ) : null}

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {titlePrefix} <span className="text-sky-400">{titleHighlight}</span>{" "}
            {titleSuffix}
          </h1>

          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
              {description}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {primaryCta?.to && primaryCta?.label ? (
              <LinkButton
                LinkComponent={LinkComponent}
                to={primaryCta.to}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-sky-400"
              >
                {primaryCta.label}
              </LinkButton>
            ) : null}

            {secondaryCta?.to && secondaryCta?.label ? (
              <LinkButton
                LinkComponent={LinkComponent}
                to={secondaryCta.to}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-500/40 bg-zinc-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                {secondaryCta.label}
              </LinkButton>
            ) : null}
          </div>

          {quickLinks.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {quickLinks.map((item) => (
                <LinkButton
                  key={item.to}
                  LinkComponent={LinkComponent}
                  to={item.to}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-sky-400/50 hover:text-white"
                >
                  {item.label}
                </LinkButton>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
