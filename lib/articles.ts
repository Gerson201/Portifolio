import fs from "fs";
import path from "path";

export type Article = {
  slug: string;
  title: string;
  cover: string;
  pages: string[];
};

const ROOT = path.join(process.cwd(), "public", "Artigos", "images");

function titleFromSlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getArticles(): Article[] {
  if (!fs.existsSync(ROOT)) return [];
  const dirs = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name)
    .sort();

  return dirs.map((slug) => {
    const dir = path.join(ROOT, slug);
    const pages = fs
      .readdirSync(dir)
      .filter((file) => file.toLowerCase().endsWith(".png"))
      .sort()
      .map((file) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Artigos/images/${slug}/${file}`);

    return {
      slug,
      title: titleFromSlug(slug),
      cover: pages[0],
      pages,
    };
  });
}
