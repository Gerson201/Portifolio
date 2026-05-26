import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import Prose from "@/components/Prose";
import Badge from "@/components/Badge";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const { frontmatter, content } = post;

  return (
    <div className="container py-16">
      <div className="card p-8">
        <div className="flex flex-wrap gap-2">
          <Badge label={frontmatter.area.toUpperCase()} variant="area" />
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold text-fg">
          {frontmatter.title}
        </h1>
        <p className="mt-2 text-sm text-muted">{frontmatter.summary}</p>

        <div className="mt-8">
          <Prose>{content}</Prose>
        </div>
      </div>
    </div>
  );
}


