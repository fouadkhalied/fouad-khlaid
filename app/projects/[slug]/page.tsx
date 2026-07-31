import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, Play } from "lucide-react";
import { projectsData } from "@/lib/data";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found | Yousef" };

  return {
    title: `${project.title} | Yousef`,
    description: project.description,
  };
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-24">
      <div className="mb-10 flex items-center">
        <Link
          href="/#projects"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to all projects
        </Link>
      </div>

      <article>
        <header className="mb-12 text-center sm:text-left">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-white/60 sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:mx-0">
            {project.description}
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 dark:focus:ring-white"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:scale-105 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-white/20 dark:hover:bg-white/20"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-red-50/50 px-6 py-2.5 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-200 transition-all hover:scale-105 hover:bg-red-50 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/20 dark:hover:bg-red-500/20"
              >
                <Play className="h-4 w-4" />
                Watch Video
              </a>
            )}
          </div>
        </header>

        <div className="group relative mb-16 aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-2xl dark:border-white/10 dark:bg-gray-800">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-12 lg:col-span-2">
            <section>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Overview</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {(project.details ?? []).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            {!!project.highlights?.length && (
              <section>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Key Highlights</h2>
                <ul className="space-y-4">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-lg text-gray-700 dark:text-gray-300">
                      <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-gray-50/50 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-white/10 dark:text-gray-200 dark:ring-white/20 dark:hover:bg-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
