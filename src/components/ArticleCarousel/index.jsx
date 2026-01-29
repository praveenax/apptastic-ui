import React, { useEffect, useMemo, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { WhatsappProgress } from "../WhatsappProgress";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export function ArticleCarousel({
  pagesHtml,
  title,
  initialIndex = 0,
  className = "",
}) {
  const slideRefs = useRef([]); // store refs for each slide
  const [isSharing, setIsSharing] = useState(false);
  const [index, setIndex] = useState(() =>
    clamp(initialIndex, 0, Math.max(0, pagesHtml.length - 1)),
  );

  const containerRef = useRef(null);
  const startXRef = useRef(null);

  const total = pagesHtml.length;

  const canPrev = index > 0;
  const canNext = index < total - 1;

  const goTo = (i) => setIndex(clamp(i, 0, total - 1));
  const prev = () => canPrev && setIndex((i) => i - 1);
  const next = () => canNext && setIndex((i) => i + 1);

  // Keyboard navigation (left/right)
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canPrev, canNext]);

  // Touch swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      startXRef.current = (e.touches[0] && e.touches[0].clientX) ?? null;
    };

    const onTouchEnd = (e) => {
      const startX = startXRef.current;
      startXRef.current = null;
      if (startX == null) return;

      const endX =
        (e.changedTouches[0] && e.changedTouches[0].clientX) ?? startX;
      const delta = endX - startX;

      if (Math.abs(delta) < 40) return;
      if (delta > 0) prev();
      else next();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canPrev, canNext]);

  const label = useMemo(() => `${index + 1} / ${total}`, [index, total]);

  if (!pagesHtml || pagesHtml.length === 0) return null;

  async function captureCurrentSlidePng() {
    const node = slideRefs.current[index];
    if (!node) throw new Error("Slide not found");

    // IMPORTANT: ensure the slide has a solid background (transparent PNG looks bad in shares)
    // We'll temporarily set a background if needed.
    const prevBg = node.style.backgroundColor;
    if (!prevBg) node.style.backgroundColor = "#09090b"; // zinc-950-ish

    try {
      const dataUrl = await htmlToImage.toPng(node, {
        pixelRatio: 2, // crisper image
        cacheBust: true,
      });
      return dataUrl;
    } finally {
      node.style.backgroundColor = prevBg;
    }
  }

  async function shareSlideAsImage() {
    try {
      setIsSharing(true);
      const dataUrl = await captureCurrentSlidePng();

      // Convert dataURL to File
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], `slide-${index + 1}.png`, {
        type: "image/png",
      });

      // Web Share API (works on most mobile browsers)
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title: "Slide",
          text: `Slide ${index + 1} / ${pagesHtml.length}`,
          files: [file],
        });
        return;
      }

      // Fallback: download
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `slide-${index + 1}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      console.error(e);
      alert("Could not create image. Try again.");
    } finally {
      setIsSharing(false);
    }
  }

  return (
    <section className={`w-full ${className}`}>
      {/* Top controls */}

      {/* Progress bars (WhatsApp-style) */}

      <WhatsappProgress goTo={goTo} index={index} pagesHtml={pagesHtml} />

      {/* Carousel viewport */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl border border-zinc-600 "
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {pagesHtml.map((html, i) => (
            <article
              key={i}
              ref={(el) => (slideRefs.current[i] = el)}
              className="w-full shrink-0 p-2 px-4  prose prose-zinc max-w-none flex items-center relative  pt-[36px] pb-[30px] md:p-[26px] "
            >
              {/* Watermark */}
              <div
                className="pointer-events-none select-none absolute top-3 left-4 text-xs tracking-widest uppercase text-zinc-400"
                style={{ fontSize: "10px" }}
              >
                {title}
              </div>
              <div className="pointer-events-none select-none absolute bottom-3 right-4 text-xs tracking-widest uppercase text-zinc-500/60">
                Apptastic Coder
              </div>

              <div
                className="carousel-content md:text-[16px]"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </article>
          ))}
        </div>
        <div className="mb-3 flex items-center justify-between gap-3 p-2">
          <div className="text-sm text-zinc-500">
            Quick read <span className="mx-2">•</span>
            <span className="font-medium text-zinc-700">{label}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={!canPrev}
              className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm disabled:opacity-50"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm disabled:opacity-50"
            >
              Next
            </button>

            <button
              type="button"
              onClick={shareSlideAsImage}
              disabled={isSharing}
              className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm disabled:opacity-50"
            >
              {isSharing ? "Preparing…" : "Export"}
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      {/* <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {pagesHtml.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full border ${
                active
                  ? "bg-zinc-900 border-zinc-900"
                  : "bg-transparent border-zinc-300"
              }`}
            />
          );
        })}
      </div> */}
    </section>
  );
}
