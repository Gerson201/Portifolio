import fs from "fs";
import path from "path";

export type PlantumlDiagram = {
  title: string;
  folder: string;
  source: string;
  image?: string;
};

const ROOT = path.join(
  process.cwd(),
  "public",
  "Projetos Engenharia de Software",
  "Plantuml"
);

function normalizeTitle(name: string) {
  return name.replace(/\s+/g, " ").trim();
}

function findImageFor(baseDir: string, baseName: string) {
  const svg = path.join(baseDir, `${baseName}.svg`);
  const png = path.join(baseDir, `${baseName}.png`);
  if (fs.existsSync(svg)) return `${baseName}.svg`;
  if (fs.existsSync(png)) return `${baseName}.png`;
  return null;
}

export function getPlantumlDiagrams(): PlantumlDiagram[] {
  if (!fs.existsSync(ROOT)) return [];
  const dirs = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const diagrams: PlantumlDiagram[] = [];
  dirs.forEach((folder) => {
    const full = path.join(ROOT, folder);
    const files = fs
      .readdirSync(full)
      .filter((file) => file.toLowerCase().endsWith(".puml"))
      .sort();
    if (!files.length) return;
    const file = files[0];
    const baseName = path.basename(file, ".puml");
    const imageFile = findImageFor(full, baseName);
    diagrams.push({
      title: normalizeTitle(folder),
      folder,
      source: encodeURI(
        `/Projetos Engenharia de Software/Plantuml/${folder}/${file}`
      ),
      image: imageFile
        ? encodeURI(
            `/Projetos Engenharia de Software/Plantuml/${folder}/${imageFile}`
          )
        : undefined,
    });
  });

  return diagrams;
}
