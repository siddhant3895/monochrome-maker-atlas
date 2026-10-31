import type { Category, Project } from "@/content/site";

export const workCategories = ["All", "Open source", "Personal"] as const;
export type WorkCategory = "All" | Category;

export function filterProjects(items: Project[], query: string, category: WorkCategory) {
  const search = query.trim().toLowerCase();
  return items.filter((project) =>
    (category === "All" || project.categories.includes(category)) &&
    (!search || [project.title, project.summary, project.status, project.visibility ?? "", ...project.stack].join(" ").toLowerCase().includes(search)),
  );
}