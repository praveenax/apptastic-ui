export function splitAndNormalizeSections(html, MIN_WORDS = 20) {
  const SEPARATOR_REGEX =
    /<hr\s*\/?>|<!--pagebreak-->|<!--\s*page\s*break\s*-->/i;

  let rawSections = html
    .split(SEPARATOR_REGEX)
    .map((s) => s.trim())
    .filter(Boolean);

  const mergedSections = [];

  rawSections.forEach((section) => {
    const textOnly = section.replace(/<[^>]+>/g, "");
    const wordCount = textOnly.split(/\s+/).length;

    const isTooShort = wordCount < MIN_WORDS;

    if (isTooShort && mergedSections.length > 0) {
      // Merge into previous section
      // mergedSections[mergedSections.length - 1] += section;
    } else {
      mergedSections.push(section);
    }
  });

  return mergedSections;
}
