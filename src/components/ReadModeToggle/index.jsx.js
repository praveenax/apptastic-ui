import React from "react";

export default function ReadModeToggle({ mode, setMode }) {
  const isQuick = mode === "quick";

  return (
    <div
      className="
        flex items-center justify-between gap-3 rounded-xl border p-3
        border-zinc-200 bg-white
        dark:border-zinc-800 dark:bg-zinc-950/60
        backdrop-blur mt-3
      "
    >
      <div>
        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Quick mode
        </div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          Switch between full article and quick carousel
        </div>
      </div>

      <button
        type="button"
        onClick={() => setMode(isQuick ? "full" : "quick")}
        className={`
          relative inline-flex h-7 w-12 items-center rounded-full border transition
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-zinc-400 dark:focus:ring-zinc-700
          focus:ring-offset-white dark:focus:ring-offset-zinc-950
          ${
            isQuick
              ? "border-zinc-900 bg-zinc-900 dark:border-zinc-100 dark:bg-zinc-100"
              : "border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900"
          }
        `}
        aria-pressed={isQuick}
        aria-label="Toggle quick read"
      >
        <span
          className={`
            inline-block h-5 w-5 transform rounded-full transition
            ${
              isQuick
                ? "translate-x-6 bg-white dark:bg-zinc-950"
                : "translate-x-1 bg-white dark:bg-zinc-200"
            }
          `}
        />
      </button>
    </div>
  );
}
