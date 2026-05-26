import SectionHeader from "@/components/SectionHeader";
import PostList from "@/components/PostList";
import ArticleGallery from "@/components/ArticleGallery";
import { getAllPosts } from "@/lib/content";
import { getArticles } from "@/lib/articles";

export default function BlogPage() {
  const posts = getAllPosts();
  const articles = getArticles();

  return (
    <div className="container py-16">
      <SectionHeader
        title="Artigos"
        subtitle="Publicações técnicas e estudos aplicados em engenharia e IA."
      />
      {articles.length > 0 && (
        <div className="mb-12">
          <ArticleGallery items={articles} />
        </div>
      )}
      <PostList items={posts} />
    </div>
  );
}


