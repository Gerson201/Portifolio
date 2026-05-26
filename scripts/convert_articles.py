import os
import re
import fitz

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PDF_DIR = os.path.join(ROOT, "public", "Artigos")
OUT_ROOT = os.path.join(PDF_DIR, "images")


def slugify(name: str) -> str:
    base = os.path.splitext(name)[0].strip().lower()
    base = re.sub(r"\s+", "-", base)
    base = re.sub(r"[^a-z0-9\-]+", "", base)
    return base


def main() -> None:
    os.makedirs(OUT_ROOT, exist_ok=True)
    for name in os.listdir(PDF_DIR):
        if not name.lower().endswith(".pdf"):
            continue
        pdf_path = os.path.join(PDF_DIR, name)
        doc = fitz.open(pdf_path)
        slug = slugify(name)
        out_dir = os.path.join(OUT_ROOT, slug)
        os.makedirs(out_dir, exist_ok=True)
        for i in range(len(doc)):
            page = doc.load_page(i)
            mat = fitz.Matrix(2, 2)
            pix = page.get_pixmap(matrix=mat, alpha=False)
            out_path = os.path.join(out_dir, f"page-{i+1:03d}.png")
            pix.save(out_path)
        doc.close()


if __name__ == "__main__":
    main()
