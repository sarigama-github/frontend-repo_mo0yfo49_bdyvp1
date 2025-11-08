import React from 'react';
import { ExternalLink } from 'lucide-react';

const items = [
  {
    title: 'SaaS Analytics Dashboard',
    desc: 'End‑to‑end product with real‑time metrics, role‑based access, and billing integration.',
    tech: ['React', 'FastAPI', 'Postgres', 'Tailwind'],
    link: '#'
  },
  {
    title: 'E‑commerce Storefront',
    desc: 'Headless storefront with search, cart, and checkout. Optimized for conversions.',
    tech: ['Next.js', 'Stripe', 'Prisma'],
    link: '#'
  },
  {
    title: 'Collaborative Editor',
    desc: 'WebSocket‑powered real‑time editor with comments and presence.',
    tech: ['React', 'Node', 'WebSockets'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
        <p className="mt-3 text-gray-600">Highlights from recent projects focused on velocity, quality, and business impact.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <article key={p.title} className="rounded-xl border bg-white p-5 flex flex-col">
            <div className="h-36 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1 flex-1">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <a href={p.link} className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800">
              View project <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
