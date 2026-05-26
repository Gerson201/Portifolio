import fs from "fs";
import path from "path";

export type ActivityMedia = {
  type: "image" | "video";
  src: string;
};

export type Activity = {
  slug: string;
  title: string;
  cover: string;
  media: ActivityMedia[];
  description: string;
};

const ROOT = path.join(
  process.cwd(),
  "public",
  "Fotos de Atividades Engenharia Elétrica"
);

function titleFromFolder(folder: string) {
  return folder.replace(/\s+/g, " ").trim();
}

function getDescription(dir: string) {
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.toLowerCase().endsWith(".txt"))
    .sort();
  if (!files.length) return "";
  return fs.readFileSync(path.join(dir, files[0]), "utf8").trim();
}

export function getEletricaActivities(): Activity[] {
  if (!fs.existsSync(ROOT)) return [];
  const dirs = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  return dirs
    .map((folder) => {
      const full = path.join(ROOT, folder);
      const files = fs.readdirSync(full).sort();
      const media = files
        .filter((file) => /\.(png|jpe?g|webp|mp4)$/i.test(file))
        .map((file) => {
          const src = encodeURI(
            `/Fotos de Atividades Engenharia Elétrica/${folder}/${file}`
          );
          if (/\.mp4$/i.test(file)) return { type: "video", src };
          return { type: "image", src };
        });
      if (!media.length) return null;
      const cover =
        media.find((item) => item.type === "image")?.src ?? media[0].src;
      return {
        slug: folder,
        title: titleFromFolder(folder),
        cover,
        media,
        description: getDescription(full),
      };
    })
    .filter((item): item is Activity => Boolean(item));
}
