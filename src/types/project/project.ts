import { ProjectBuilder } from "./projectBuilder";

export class Project {

  id: string = '';
  title: string = '';
  site: string = '';
  source: string = '';
  favoriteLevel: number = 0;
  descriptions: {
    bulletPoints: BulletPoint[],
    shortDescriptions: ProjectDescription[],
    longDescriptions: ProjectDescription[]
  } = {
    bulletPoints: [],
    shortDescriptions: [],
    longDescriptions: []
  };
  technologies: string[] = [];
  imageUrls: string[] = [];

  static from() {
    return new ProjectBuilder();
  }
}

export type BulletPoint = {
  language: string,
  content: string[]
}

export type ProjectDescription = {
  language: string,
  content: string
}