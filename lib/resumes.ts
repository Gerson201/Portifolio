import fs from "fs";
import path from "path";

type ResumeInfo = {
  title: string;
  file: string;
};

function getFirstFile(dir: string) {
  if (!fs.existsSync(dir)) return null;
  const files = fs
    .readdirSync(dir)
    .filter((file) => /\.(pdf|doc|docx)$/i.test(file))
    .sort();
  if (!files.length) return null;
  return files[0];
}

export function getResumeSoftware(): ResumeInfo | null {
  const dir = path.join(
    process.cwd(),
    "public",
    "Curriculo Engenharia de Software"
  );
  const file = getFirstFile(dir);
  if (!file) return null;
  return {
    title: "Currículo — Engenharia de Software",
    file: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Curriculo Engenharia de Software/${file}`,
  };
}

export function getResumeEletrica(): ResumeInfo | null {
  const dir = path.join(
    process.cwd(),
    "public",
    "Curriculo Engenharia Elétrica"
  );
  const file = getFirstFile(dir);
  if (!file) return null;
  return {
    title: "Currículo — Engenharia Elétrica",
    file: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Curriculo Engenharia Elétrica/${file}`,
  };
}
