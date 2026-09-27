"use client";

import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Tours", href: "#tours" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[#fbfaf7]/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="section-shell flex h-[74px] items-center justify-between"
      >
        <a
          href="#home"
          className="focus-ring inline-flex items-center gap-2 rounded-lg text-[1.35rem] font-bold tracking-[-0.06em] text-[#174c3e]"
          aria-label="Wanderly home"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[#174c3e] text-white">
            <Compass size={20} strokeWidth={2.2} aria-hidden="true" />
          </span>
          Wanderly<span className="text-[#d69260]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring rounded-md text-[0.86rem] font-medium text-[#52645c] transition-colors hover:text-[#174c3e]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#search"
            className="focus-ring rounded-full bg-[#174c3e] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#10392f] hover:shadow-md"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          className="focus-ring grid size-10 place-items-center rounded-xl text-[#174c3e] transition hover:bg-[#e9f1e9] md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-[#e8e8df] bg-[#fbfaf7] px-5 pb-5 pt-2 md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring rounded-lg px-2 py-3 text-sm font-medium text-[#52645c] transition-colors hover:bg-[#e9f1e9] hover:text-[#174c3e]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#search"
              onClick={() => setMenuOpen(false)}
              className="focus-ring mt-2 rounded-full bg-[#174c3e] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
