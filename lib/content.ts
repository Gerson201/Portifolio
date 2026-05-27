import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Project, ProjectFrontmatter, Post, PostFrontmatter } from "@/lib/types";
import { sortByDateDesc } from "@/lib/utils";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readMdxFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(dir, file));
}

function mapProject(filePath: string, area: "software" | "eletrica"): Project {
  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);
  const slugBase = path.basename(filePath).replace(/\.mdx$/, "");
  const slug = `${area}-${slugBase}`;
  const frontmatter = data as ProjectFrontmatter;

  return {
    ...frontmatter,
    slug,
    area,
    statusLabel: statusToLabel(frontmatter.status),
    filePath,
  };
}

function mapPost(filePath: string, area: "software" | "eletrica"): Post {
  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);
  const slugBase = path.basename(filePath).replace(/\.mdx$/, "");
  const slug = `${area}-${slugBase}`;
  const frontmatter = data as PostFrontmatter;

  return {
    ...frontmatter,
    slug,
    area,
    filePath,
  };
}

function statusToLabel(status: ProjectFrontmatter["status"]) {
  switch (status) {
    case "public-demo":
      return "Demonstração Pública";
    case "private-core":
      return "Núcleo Privado";
    case "client-sanitized":
      return "Caso de Cliente";
    default:
      return status;
  }
}

export function getAllProjects(): Project[] {
  const softwareDir = path.join(CONTENT_DIR, "software", "projects");
  const eletricaDir = path.join(CONTENT_DIR, "eletrica", "projects");

  const projects = [
    ...readMdxFiles(softwareDir).map((file) => mapProject(file, "software")),
    ...readMdxFiles(eletricaDir).map((file) => mapProject(file, "eletrica")),
  ];

  return projects.sort(sortByDateDesc);
}

export function getProjectsByArea(area: "software" | "eletrica") {
  return getAllProjects().filter(
    (project) => project.area === area || project.areas?.includes(area)
  );
}

export function getFeaturedProjects() {
  return getAllProjects().filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string) {
  const project = getAllProjects().find((item) => item.slug === slug);
  if (!project) return null;
  const source = fs.readFileSync(project.filePath, "utf8");
  const { content, data } = matter(source);

  const mdx = await compileMDX({
    source: content,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });

  return {
    slug: project.slug,
    frontmatter: {
      ...(data as ProjectFrontmatter),
      area: project.area,
      statusLabel: statusToLabel((data as ProjectFrontmatter).status),
    },
    content: mdx.content,
  };
}

export function getAllPosts(): Post[] {
  const softwareDir = path.join(CONTENT_DIR, "software", "posts");
  const eletricaDir = path.join(CONTENT_DIR, "eletrica", "posts");

  const posts = [
    ...readMdxFiles(softwareDir).map((file) => mapPost(file, "software")),
    ...readMdxFiles(eletricaDir).map((file) => mapPost(file, "eletrica")),
  ];

  return posts.sort(sortByDateDesc);
}

export function getRecentPostsByArea(area: "software" | "eletrica", limit = 4) {
  return getAllPosts().filter((post) => post.area === area).slice(0, limit);
}

export async function getPostBySlug(slug: string) {
  const post = getAllPosts().find((item) => item.slug === slug);
  if (!post) return null;
  const source = fs.readFileSync(post.filePath, "utf8");
  const { content, data } = matter(source);

  const mdx = await compileMDX({
    source: content,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });

  return {
    slug: post.slug,
    frontmatter: {
      ...(data as PostFrontmatter),
      area: post.area,
    },
    content: mdx.content,
  };
}


