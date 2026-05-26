export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl font-semibold text-fg md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-muted">{subtitle}</p>
    </div>
  );
}


