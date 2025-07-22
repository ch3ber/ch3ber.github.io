import type { FC } from "react";
import type { CollectionEntry } from "astro:content";

interface Props {
  project: CollectionEntry<"projects">;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { title, image, repo, demo, summary, stack } = project.data;

  /*
   * Los posts almacenan en el frontmatter una ruta a la miniatura
   * relativa al directorio `/assets`. Sin embargo en el repositorio
   * actual las imágenes viven dentro de `src/assets/img/projects` y
   * no se copian automáticamente a `public/` durante el build.  Para
   * que la tarjeta siempre muestre la imagen correcta —en desarrollo
   * y producción— utilizamos `import.meta.glob` para obtener las URLs
   * optimizadas que Vite genera en tiempo de compilación y hacemos un
   * pequeño matching por *slug*.
   */

  // Pre-carga de todas las imágenes disponibles en el directorio.
  // La opción `eager: true` devuelve inmediatamente la URL procesada
  // por Vite, lista para usarse en la etiqueta <img>.
  /* eslint-disable @typescript-eslint/consistent-type-imports */
  // type ignore for vite glob types
  const projectImages = import.meta.glob<true, string>(
    "../../assets/img/projects/*",
    {
      eager: true,
      as: "url",
    },
  );

  // Buscamos una imagen cuyo nombre contenga el slug del proyecto.
  const matchedImage = Object.entries(projectImages).find(([path]) =>
    path.toLowerCase().includes(project.slug.toLowerCase()),
  )?.[1] as string | undefined;

  // Si no encontramos coincidencia, usamos la ruta escrita en el markdown.
  const imageSrc = matchedImage ?? image;

  return (
    <article className="project-card">
      <figure className="overflow-hidden">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`Previsualización de ${title}`}
          draggable={false}
          className="zoom-image-effect aspect-video"
        />
      </figure>

      <div className="flex flex-col gap-6 p-5 justify-between md:h-[450px]">
        <section>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-2">{summary}</p>
        </section>

        <div>
          <section className="flex flex-col justify-end">
            <h2 className="font-bold">Stack</h2>
            <main className="mt-1">
              <ul className="flex flex-wrap gap-1">
                {stack.map((value) => (
                  <li className="py-1 px-2 rounded-full bg-accents text-txt-100 text-xs font-light w-auto">
                    {value}
                  </li>
                ))}
              </ul>
            </main>
          </section>

          <div className="mt-6 project-card__buttons">
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
      </div>
    </article>
  );
};

export default ProjectCard;
