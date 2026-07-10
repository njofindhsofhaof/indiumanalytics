export function renderRichText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(
      /\[\[(.*?)\|(.*?)\]\]/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent underline decoration-dotted">$1</a>'
    );
}
