import Image from "next/image";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import SearchBox from "@/components/SearchBox";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[730px] overflow-hidden bg-[#183e36] md:min-h-[760px]">
      <Image
        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90"
        alt="A quiet alpine lake surrounded by mountains at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#102c29]/80 via-[#102c29]/50 to-[#102c29]/10" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-[#102c29]/55 via-transparent to-[#102c29]/10" />

      <div className="section-shell relative z-10 flex min-h-[580px] flex-col justify-center pb-14 pt-20 md:min-h-[610px] md:pb-20">
        <div className="max-w-[740px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.1em] text-white backdrop-blur-sm">
            <Sparkles size={14} className="text-[#f5c38c]" aria-hidden="true" />
            EXPLORE THE WORLD
          </span>
          <h1 className="mt-6 max-w-[700px] text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.07em] text-white sm:text-6xl md:text-7xl">
            Discover Your
            <br className="hidden sm:block" /> Next <span className="font-normal italic text-[#f2c392]">Adventure</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            The world is a little bigger than your to-do list. Find thoughtful trips, remarkable places, and stories worth bringing home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#destinations"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#eab783] px-6 text-sm font-bold text-[#173d36] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f0c695]"
            >
              Explore Destinations <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#tours"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Start Your Journey <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-11 flex items-center gap-3 text-xs font-medium text-white/80 md:absolute md:bottom-10 md:right-0 md:mt-0">
          <span className="h-px w-8 bg-[#eab783]" />
          SMALL GROUPS · BIG MOMENTS · ALWAYS PERSONAL
        </div>
      </div>
      <div id="search" className="section-shell relative z-20 pb-7 md:pb-0">
        <SearchBox />
      </div>
    </section>
  );
}
