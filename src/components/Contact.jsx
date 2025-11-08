import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build something great</h2>
          <p className="mt-3 text-gray-600">Tell me about your goals and timeline. I’ll respond within 24 hours with next steps.</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>• Typical kickoff within 1–2 weeks</li>
            <li>• Remote‑friendly, async first</li>
            <li>• Clear milestones and demos every week</li>
          </ul>
        </div>

        <form className="rounded-xl border p-6 bg-white">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input type="text" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm">What are you building?</label>
            <textarea className="mt-1 w-full rounded-md border px-3 py-2 h-28" placeholder="A few sentences about the project" />
          </div>
          <button type="submit" className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Request proposal</button>
        </form>
      </div>

      <footer className="mt-16 border-t pt-6 text-sm text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
        <a href="#home" className="hover:text-blue-700">Back to top ↑</a>
      </footer>
    </section>
  );
};

export default Contact;
