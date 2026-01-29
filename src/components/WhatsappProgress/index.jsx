import * as React from "react";
import { Link } from "gatsby";
export function WhatsappProgress({ goTo, index, pagesHtml }) {
  return (
    <div className="mt-4 flex w-full items-center gap-1 mb-3">
      {pagesHtml.map((_, i) => {
        const active = i === index;
        const completed = i < index;

        return (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to page ${i + 1}`}
            className="flex-1"
          >
            <div
              className={`
            h-1.5 w-full rounded-full transition-all duration-300
            ${
              active ? "bg-zinc-900" : completed ? "bg-zinc-700" : "bg-zinc-300"
            }
          `}
            />
          </button>
        );
      })}
    </div>
  );
}
