import Image from "next/image";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import type { Destination } from "@/data/travelData";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group overflow-hidden rounded-[1.25rem] border border-[#ecece4] bg-white shadow-[0_8px_30px_rgba(24,55,44,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(24,55,44,0.12)]">
      <a href="#tours" className="focus-ring relative block h-[220px] overflow-hidden sm:h-[235px]" aria-label={`Explore ${destination.name}, ${destination.country}`}>
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="image-zoom object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#174c3e] shadow-sm">
          From ${destination.price.toLocaleString()}
        </span>
      </a>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="flex items-center gap-1 text-xs font-medium text-[#78877f]">
              <MapPin size={12} aria-hidden="true" /> {destination.country}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-[-0.04em] text-[#173d36]">
              {destination.name}
            </h3>
          </div>
          <p className="flex shrink-0 items-center gap-1 rounded-full bg-[#f6f2e9] px-2.5 py-1.5 text-xs font-bold text-[#173d36]" aria-label={`${destination.rating} out of 5 stars, ${destination.reviews} reviews`}>
            <Star size={13} fill="currentColor" className="text-[#d7944f]" aria-hidden="true" />
            {destination.rating}
          </p>
        </div>
        <p className="mt-3 min-h-10 text-sm leading-5 text-[#728078]">{destination.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-[#f0f0eb] pt-4">
          <span className="text-xs text-[#859189]">{destination.reviews} happy travelers</span>
          <a
            href="#tours"
            className="focus-ring inline-flex items-center gap-1 rounded-md text-sm font-bold text-[#174c3e] transition hover:text-[#bd7546]"
          >
            Explore <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
