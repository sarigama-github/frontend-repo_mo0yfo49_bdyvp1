import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight">Alex Carter</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          <a
            href="mailto:hello@alexcarter.dev?subject=Project%20Inquiry"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Let’s talk <ArrowRight size={18} />
          </a>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-6 pt-8 pb-20 md:pt-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Full‑Stack Web Developer</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              I build fast, modern web apps that scale
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              I specialize in product‑focused engineering across the stack—clean UIs, robust APIs, and real business outcomes.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-black transition-colors"
              >
                Explore services <ArrowRight size={18} />
              </a>
              <a
                href="mailto:hello@alexcarter.dev?subject=Hire%20for%20a%20project"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-300 hover:border-gray-400"
              >
                Hire me <Mail size={18} />
              </a>
              <div className="flex items-center gap-3 ml-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md border hover:bg-gray-50">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md border hover:bg-gray-50">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-xl overflow-hidden border bg-white">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
