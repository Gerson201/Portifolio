export default function Badge({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "status" | "area";
}) {
  const base = "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium";
  const variants: Record<string, string> = {
    default: "border-border text-muted",
    status: "border-accent/40 text-accent",
    area: "border-accent-2/50 text-accent-2",
  };

  return <span className={`${base} ${variants[variant]}`}>{label}</span>;
}


