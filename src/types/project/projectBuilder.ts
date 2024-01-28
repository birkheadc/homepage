import { Project } from "./project";

export class ProjectBuilder {
  json(json: unknown): Project[] {
    const projects: Project[] = [];

    if (!Array.isArray(json)) return projects;

    json.forEach(obj => {
      const project = new Project();

      project.id = obj.id ?? '';
      project.title = obj.title ?? '';
      project.site = obj.site ?? ''
      project.source = obj.source ?? '';
      project.favoriteLevel = obj.favoriteLevel ?? 0;
      project.descriptions = obj.descriptions ?? {
        bulletPoints: [],
        shortDescriptions: [],
        longDescriptions: []
      };
      project.technologies = obj.technologies ?? [];
      project.imageUrls = obj.imageUrls ?? [];

      projects.push(project);
    });

    return projects;
  }
}