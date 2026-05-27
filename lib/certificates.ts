import fs from "fs";
import path from "path";

export type Certificate = {
  title: string;
  image: string;
};

const CERT_DIR = path.join(process.cwd(), "public", "Certificados", "images");

function titleFromFile(file: string) {
  return file
    .replace(/\.[^/.]+$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getCertificates(): Certificate[] {
  if (!fs.existsSync(CERT_DIR)) return [];
  return fs
    .readdirSync(CERT_DIR)
    .filter((file) => file.toLowerCase().endsWith(".png"))
    .sort()
    .map((file) => ({
      title: titleFromFile(file),
      image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Certificados/images/${file}`,
    }));
}
