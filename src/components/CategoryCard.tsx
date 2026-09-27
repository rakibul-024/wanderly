import Image from "next/image";
import type { TravelCategory } from "@/data/travelData";

export default function CategoryCard({ category }: { category: TravelCategory }) {
  const Icon = category.icon;

  return (
    <a
      href="#destinations"
      className="group focus-ring relative block min-h-[260px] overflow-hidden rounded-[1.35rem] bg-[#173d36] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="image-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2924]/90 via-[#0d2924]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        <span className="mb-3 grid size-10 place-items-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-sm">
          <Icon size={19} aria-hidden="true" />
        </span>
        <h3 className="text-xl font-semibold tracking-[-0.035em]">{category.title}</h3>
        <p className="mt-1.5 max-w-[260px] text-sm leading-5 text-white/75">{category.description}</p>
      </div>
    </a>
  );
}
