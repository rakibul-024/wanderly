"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Send } from "lucide-react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-shell pb-20 md:pb-28">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#173f36] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16">
        <div className="absolute -right-20 -top-32 -z-0 size-96 rounded-full border border-white/10" />
        <div className="absolute -right-4 -top-16 -z-0 size-64 rounded-full border border-white/10" />
        <div className="relative z-10 grid gap-9 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.17em] text-[#f0bd88]">
              <Send size={14} aria-hidden="true" /> A little wanderlust, delivered
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
              Get Travel Inspiration
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
              Get thoughtful travel notes, new journeys, and the occasional very good reason to take a day off.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 rounded-2xl bg-white p-2.5 sm:flex-row">
              <label className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <Mail size={17} className="shrink-0 text-[#819087]" aria-hidden="true" />
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="focus-ring h-11 min-w-0 flex-1 rounded-md text-sm text-[#173d36] outline-none placeholder:text-[#9ba59f]"
                />
              </label>
              <button
                type="submit"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#174c3e] px-5 text-sm font-bold text-white transition hover:bg-[#10392f]"
              >
                Subscribe <ArrowRight size={15} aria-hidden="true" />
              </button>
            </form>
            <p className="mt-3 min-h-5 text-xs text-white/65" role="status">
              {submitted ? "Thanks for your interest—email signup isn’t connected yet." : "The good stuff only. Unsubscribe whenever."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
