import skills from "../data/skills";

export default function SkillOrbit() {
  return (
    <section id="skills" className="py-24 bg-black text-center">
      <h2 className="text-4xl font-bold mb-10">Skills & Specializations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold text-neon-violet">{skill.name}</h3>
            <p className="text-gray-300 mt-3">{skill.field1}</p>
            <p className="text-gray-300 mt-3">{skill.field2}</p>
            <p className="text-gray-300 mt-3">{skill.field3}</p>
            <p className="text-gray-300 mt-3">{skill.field4}</p>
            </div>
        ))}
      </div>
    </section>
  );
}
