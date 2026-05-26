"use client";

import { useMemo, useState } from "react";
import { Project } from "@/lib/types";
import { createFuse } from "@/lib/search";
import SearchBox from "@/components/SearchBox";
import TagFilter from "@/components/TagFilter";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid({
  items,
  showAreaFilter,
  showStatusFilter,
}: {
  items: Project[];
  showAreaFilter: boolean;
  showStatusFilter: boolean;
}) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [area, setArea] = useState("all");
  const [status, setStatus] = useState("all");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => item.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, [items]);

  const allAreas = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => set.add(item.area));
    return Array.from(set);
  }, [items]);

  const allStatuses = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => set.add(item.status));
    return Array.from(set);
  }, [items]);

  const filtered = useMemo(() => {
    let list = items;
    if (showAreaFilter && area !== "all") {
      list = list.filter((item) => item.area === area);
    }
    if (showStatusFilter && status !== "all") {
      list = list.filter((item) => item.status === status);
    }
    if (selectedTags.length) {
      list = list.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
    }
    if (query.trim().length) {
      const fuse = createFuse(list, ["title", "summary", "tags", "stack"]);
      list = fuse.search(query.trim()).map((result) => result.item);
    }
    return list;
  }, [items, area, status, selectedTags, query, showAreaFilter, showStatusFilter]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div>
      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_auto]">
        <SearchBox value={query} onChange={setQuery} placeholder="Buscar projetos" />
        {showAreaFilter && (
          <select
            value={area}
            onChange={(event) => setArea(event.target.value)}
            className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-fg"
          >
            <option value="all">Todas as áreas</option>
            {allAreas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
        {showStatusFilter && (
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-fg"
          >
            <option value="all">Todos os status</option>
            {allStatuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="mt-6">
        <TagFilter tags={allTags} selected={selectedTags} onToggle={toggleTag} />
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {!filtered.length && (
        <div className="mt-8 text-sm text-muted">
          Nenhum projeto encontrado com os filtros atuais.
        </div>
      )}
    </div>
  );
}


