import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Shipping faster with FastAPI + React',
    date: 'Oct 2025',
    excerpt: 'How I structure full‑stack projects for speed without compromising quality.',
    slug: '#'
  },
  {
    title: 'Designing APIs that last',
    date: 'Sep 2025',
    excerpt: 'Principles, tradeoffs, and patterns for maintainable service boundaries.',
    slug: '#'
  },
  {
    title: 'Frontend performance playbook',
    date: 'Aug 2025',
    excerpt: 'A practical checklist to keep your UI fast and accessible.',
    slug: '#'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="container mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Blog</h2>
        <p className="mt-3 text-gray-600">Articles on building products, developer experience, and scalable systems.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="rounded-xl border bg-white p-5">
            <div className="text-xs text-gray-500 inline-flex items-center gap-2">
              <Calendar size={14} /> {p.date}
            </div>
            <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.excerpt}</p>
            <a href={p.slug} className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800">
              Read article <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
