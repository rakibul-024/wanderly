import { AtSign, Camera, Compass, Mail, MapPin, Phone, Play } from "lucide-react";
import { footerDestinations } from "@/data/travelData";

const quickLinks = [
  { label: "Our story", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Travel styles", href: "#categories" },
  { label: "Featured tour", href: "#tours" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#12392f] text-white">
      <div className="section-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr] lg:gap-8 lg:py-16">
        <div>
          <a href="#home" className="focus-ring inline-flex items-center gap-2 rounded-lg text-[1.35rem] font-bold tracking-[-0.06em]">
            <span className="grid size-9 place-items-center rounded-xl bg-white/10 text-[#f0bd88]">
              <Compass size={20} aria-hidden="true" />
            </span>
            Wanderly<span className="text-[#eab783]">.</span>
          </a>
          <p className="mt-4 max-w-[300px] text-sm leading-6 text-white/65">
            Thoughtful trips for curious people. Find your way out there, and make it count.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a href="https://www.instagram.com/" aria-label="Wanderly on Instagram" className="focus-ring grid size-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Camera size={16} aria-hidden="true" /></a>
            <a href="https://www.facebook.com/" aria-label="Wanderly on Facebook" className="focus-ring grid size-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><AtSign size={16} aria-hidden="true" /></a>
            <a href="https://www.youtube.com/" aria-label="Wanderly on YouTube" className="focus-ring grid size-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"><Play size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold">A little exploring</h2>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}><a href={link.href} className="focus-ring rounded text-sm text-white/65 transition hover:text-white">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">On everyone’s list</h2>
          <ul className="mt-4 space-y-3">
            {footerDestinations.map((destination) => (
              <li key={destination}><a href="#destinations" className="focus-ring rounded text-sm text-white/65 transition hover:text-white">{destination}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Say hello</h2>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex items-center gap-2.5 text-sm text-white/65"><MapPin size={15} className="shrink-0 text-[#eab783]" aria-hidden="true" /> 24 Garden Lane, London</p>
            <a href="mailto:hello@wanderly.travel" className="focus-ring flex items-center gap-2.5 rounded text-sm text-white/65 transition hover:text-white"><Mail size={15} className="shrink-0 text-[#eab783]" aria-hidden="true" /> hello@wanderly.travel</a>
            <a href="tel:+442079460812" className="focus-ring flex items-center gap-2.5 rounded text-sm text-white/65 transition hover:text-white"><Phone size={15} className="shrink-0 text-[#eab783]" aria-hidden="true" /> +44 (0)20 7946 0812</a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wanderly Travel Co. All good things reserved.</p>
          <p>Made for the moments between the map pins.</p>
        </div>
      </div>
    </footer>
  );
}
