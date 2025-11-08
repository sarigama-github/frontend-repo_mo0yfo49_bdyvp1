import React from 'react';
import { Code, Server, Sparkles, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Code className="text-blue-600" size={22} />,
    title: 'Frontend Engineering',
    price: '$1,500+',
    desc: 'Accessible, performant UIs with React, Next.js, Tailwind, and design systems that scale.'
  },
  {
    icon: <Server className="text-blue-600" size={22} />,
    title: 'Backend & APIs',
    price: '$2,000+',
    desc: 'Production‑ready REST/GraphQL services with Python, FastAPI, Node, and secure auth.'
  },
  {
    icon: <Sparkles className="text-blue-600" size={22} />,
    title: 'MVPs & Prototypes',
    price: '$2,500+',
    desc: 'From idea to interactive demo in days. I handle scope, architecture, and delivery.'
  },
  {
    icon: <Wrench className="text-blue-600" size={22} />,
    title: 'Performance & DX',
    price: '$75/hr',
    desc: 'Audits, refactors, CI/CD, and developer experience improvements for teams.'
  }
];

const Services = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
        <p className="mt-3 text-gray-600">Flexible, outcome‑driven engagements. Transparent pricing and clear milestones.</p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <span className="text-sm font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">{s.price}</span>
            </div>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-flex text-sm text-blue-700 hover:text-blue-800">Book this →</a>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border p-6 bg-gradient-to-br from-blue-50 to-white">
        <h3 className="font-semibold">Need a custom plan?</h3>
        <p className="text-sm text-gray-600 mt-1">I offer fixed‑scope packages and retainers. Share your goals and I’ll propose options.</p>
        <a href="#contact" className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get a quote</a>
      </div>
    </section>
  );
};

export default Services;
