import type { FC } from "react";
import type { CollectionEntry } from "astro:content";

import ProjectCard from "./ProjectCard";

interface Props {
  projects: CollectionEntry<"projects">[];
}

const ProjectGrid: FC<Props> = ({ projects }) => (
  <div className="mt-10 grid place-content-center place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
    {projects.map((project) => (
      <ProjectCard
        key={project.id ?? project.slug ?? project.data.title}
        project={project}
      />
    ))}
  </div>
);

export default ProjectGrid;
