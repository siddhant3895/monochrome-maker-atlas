import { describe, expect, it } from "vitest";
import { nav, projects } from "@/content/site";
import { filterProjects, workCategories } from "@/lib/projects";

describe("Portfolio project rules", () => {
  it("offers only All, Open source and Personal", () => {
    expect(workCategories).toEqual(["All", "Open source", "Personal"]);
  });
  it("keeps all existing projects", () => {
    expect(projects.map(p => p.slug)).toEqual(expect.arrayContaining(["widsp", "tesla-oscillator", "py-sentinel-scanner", "chess-tactical-analytics"]));
    expect(filterProjects(projects, "", "All")).toHaveLength(7);
  });
  for (const slug of ["socket-peek", "cadance"]) {
    it(`${slug} is an ongoing private personal project without public links`, () => {
      const project = projects.find(p => p.slug === slug);
      expect(project).toMatchObject({ status: "Ongoing", visibility: "Private", categories: ["Personal"], links: [] });
    });
  }
  it("credits Hall of Codes as collaborative open source", () => {
    expect(projects.find(p => p.slug === "hallofcodes")).toMatchObject({ status: "Collaborative", categories: ["Open source"] });
    expect(filterProjects(projects, "", "Open source").map(p => p.slug)).toEqual(["widsp", "hallofcodes"]);
  });
  it("keeps the study and independent projects under Personal", () => {
    expect(filterProjects(projects, "", "Personal").map(p => p.slug)).toEqual(["tesla-oscillator", "py-sentinel-scanner", "chess-tactical-analytics", "socket-peek", "cadance"]);
    expect(filterProjects(projects, "socket", "Personal").map(p => p.slug)).toEqual(["socket-peek"]);
    expect(filterProjects(projects, "socket", "Open source")).toEqual([]);
  });
  it("removes Now and Research from navigation", () => {
    expect(nav.map(item => item.to)).toEqual(["/work", "/blog", "/about", "/contact"]);
  });
});