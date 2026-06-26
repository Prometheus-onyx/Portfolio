import timeline from "../data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gray-950">
      <h2 className="text-center text-4xl font-bold mb-16">
        My Evolution
      </h2>

      <div className="max-w-3xl mx-auto space-y-12 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-neon" />

        {timeline.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col ${
              idx % 2 === 0 ? "items-start text-left" : "items-end text-right"
            }`}
          > 
            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-700 max-w-sm">
              <h3 className="font-bold text-neon-cyan text-xl">{item.year}</h3>
              <p className="mt-2 text-gray-300">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
