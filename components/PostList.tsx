"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Post } from "@/lib/types";
import { createFuse } from "@/lib/search";
import SearchBox from "@/components/SearchBox";
import TagFilter from "@/components/TagFilter";
import Badge from "@/components/Badge";

export default function PostList({ items }: { items: Post[] }) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => item.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, [items]);

  const filtered = useMemo(() => {
    let list = items;
    if (selectedTags.length) {
      list = list.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
    }
    if (query.trim().length) {
      const fuse = createFuse(list, ["title", "summary", "tags"]);
      list = fuse.search(query.trim()).map((result) => result.item);
    }
    return list;
  }, [items, selectedTags, query]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <SearchBox value={query} onChange={setQuery} placeholder="Buscar posts" />
      </div>

      <div className="mt-6">
        <TagFilter tags={allTags} selected={selectedTags} onToggle={toggleTag} />
      </div>

      <div className="mt-8 grid gap-6">
        {filtered.map((post) => (
          <div key={post.slug} className="card p-6">
            <div className="flex flex-wrap gap-2">
              <Badge label={post.area.toUpperCase()} variant="area" />
              {post.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} label={tag} />
              ))}
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-fg">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="mt-2 text-sm text-muted">{post.summary}</p>
          </div>
        ))}
      </div>

      {!filtered.length && (
        <div className="mt-8 text-sm text-muted">
          Nenhum post encontrado com os filtros atuais.
        </div>
      )}
    </div>
  );
}


