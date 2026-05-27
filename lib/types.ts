export type Area = "software" | "eletrica";

export type ProjectFrontmatter = {
  title: string;
  date: string;
  area: Area;
  areas?: Area[];
  type: "project";
  tags: string[];
  stack: string[];
  status: "public-demo" | "private-core" | "client-sanitized";
  featured: boolean;
  image?: string;
  repo?: string;
  demo?: string;
  summary: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  statusLabel: string;
  filePath: string;
};

export type PostFrontmatter = {
  title: string;
  date: string;
  area: Area;
  type: "post";
  tags: string[];
  summary: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  filePath: string;
};


