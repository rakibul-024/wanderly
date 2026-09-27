import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Star } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export default function FeaturedTour() {
  return (
    <section id="tours" className="section-shell py-20 md:py-28">
      <article className="grid overflow-hidden rounded-[1.75rem] bg-[#173f36] shadow-[0_24px_70px_rgba(21,62,52,0.17)] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[430px]">
          <Image
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=90"
            alt="A traveler overlooking a dramatic mountain valley in Switzerland"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="image-zoom object-cover"
          />
          <span className="absolute left-5 top-5 rounded-full bg-[#f0bd88] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#173d36] shadow-lg sm:left-7 sm:top-7">
            Our kind of favorite
          </span>
          <div className="absolute bottom-5 left-5 rounded-xl border border-white/30 bg-[#173d36]/70 px-4 py-3 text-white backdrop-blur-md sm:bottom-7 sm:left-7">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/70">Small-group journey</p>
            <p className="mt-1 text-sm font-semibold">Just 8 places per departure</p>
          </div>
        </div>
        <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f0bd88]">Featured tour</p>
          <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl">
            The slow side of Switzerland
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
            <MapPin size={15} className="text-[#f0bd88]" aria-hidden="true" /> Interlaken, Switzerland
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-y border-white/15 py-4 text-sm text-white/85">
            <span className="inline-flex items-center gap-2"><CalendarDays size={15} className="text-[#f0bd88]" aria-hidden="true" /> 8 days</span>
            <span className="inline-flex items-center gap-2"><Star size={15} fill="currentColor" className="text-[#f0bd88]" aria-hidden="true" /> 4.98 <span className="text-white/60">(86 reviews)</span></span>
          </div>
          <p className="mt-5 text-sm leading-7 text-white/75">
            Take the train through storybook villages, wake up to mountain air, and make time for the kind of long lunches you remember.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-xs text-white/60">All-in, per person</p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.04em]">$2,480 <span className="text-sm font-normal text-white/65">USD</span></p>
            </div>
            <a
              href="#contact"
              className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f0bd88] px-6 text-sm font-bold text-[#173d36] transition hover:-translate-y-0.5 hover:bg-[#f6cc9d]"
            >
              See the journey <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-xs text-white/65">
            <ShieldCheck size={14} aria-hidden="true" /> Flexible booking · Local guides · No hidden fees
          </p>
        </div>
      </article>
    </section>
  );
}
