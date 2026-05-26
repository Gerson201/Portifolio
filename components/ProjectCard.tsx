"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import Badge from "@/components/Badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="card p-6 transition hover:-translate-y-1"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={176}
            className="h-44 w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        <Badge label={project.area.toUpperCase()} variant="area" />
        <Badge label={project.statusLabel} variant="status" />
        {project.stack.slice(0, 3).map((item) => (
          <Badge key={item} label={item} />
        ))}
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-fg">
        <Link href={`/${project.area}/projetos/${project.slug}`}>
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}


