import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";

export const metadata = {
  title: "Projects | Yousef",
  description: "Selected projects and case studies.",
};

export default function ProjectsIndexPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-gray-700 dark:text-white/70">
          Case studies and details for my recent work.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projectsData.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-xl border border-black/5 bg-white/70 p-4 shadow-sm transition hover:shadow-md dark:bg-white/10"
          >
            <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="mt-1 text-sm text-gray-700 dark:text-white/70">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/[0.7] px-2.5 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/#projects"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}

