import SectionHeader from "@/components/SectionHeader";
import ArticleGallery from "@/components/ArticleGallery";
import { getArticles } from "@/lib/articles";

export default function BlogPage() {
  const articles = getArticles();

  return (
    <div className="container py-16">
      <SectionHeader
        title="Artigos"
        subtitle="Publicações técnicas e estudos aplicados em engenharia e IA."
      />
      {articles.length > 0 ? (
        <ArticleGallery items={articles} />
      ) : (
        <p className="text-sm text-muted">Nenhum artigo disponível.</p>
      )}
    </div>
  );
}


