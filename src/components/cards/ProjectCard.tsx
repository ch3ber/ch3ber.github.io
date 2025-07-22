import type { FC } from "react";
import type { CollectionEntry } from "astro:content";

interface Props {
  project: CollectionEntry<"projects">;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { title, image, repo, demo, summary } = project.data;

  return (
    <article className="project-card">
      <figure className="overflow-hidden">
        <img
          loading="lazy"
          src={image}
          alt={`Previsualización de ${title}`}
          draggable={false}
          className="zoom-image-effect"
        />
      </figure>

      <div className="project-card__body">
        <h3 className="title-3">{title}</h3>

        <p className="h-32">{summary}</p>

        <div className="project-card__buttons">
          <div className="btn-ghost">
            <a
              className="px-4 py-2 rounded-sm"
              href={repo}
              target="_blank"
              rel="noreferrer"
            >
              Ver código
            </a>
          </div>

          {demo && (
            <a
              className="border-none btn-fill"
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Visitar
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
