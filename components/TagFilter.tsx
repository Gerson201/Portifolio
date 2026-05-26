"use client";

export default function TagFilter({
  tags,
  selected,
  onToggle,
}: {
  tags: string[];
  selected: string[];
  onToggle: (tag: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onToggle(tag)}
          className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
            selected.includes(tag)
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-muted hover:border-accent"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}


