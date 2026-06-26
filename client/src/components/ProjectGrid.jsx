import projects from "../data/projects";

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-20 bg-black">
      <h2 className="text-center text-4xl font-bold mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold text-neon-violet">{p.name}</h3>
            <p className="text-gray-300 mt-3">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
