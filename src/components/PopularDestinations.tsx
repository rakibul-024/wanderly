import { ArrowRight } from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
import SectionHeading from "@/components/SectionHeading";
import { destinations } from "@/data/travelData";

export default function PopularDestinations() {
  return (
    <section id="destinations" className="section-shell py-20 md:py-28">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="A good place to begin"
          title="Popular Destinations"
          description="A few of the faraway favorites our travelers can't stop talking about."
        />
        <a
          href="#categories"
          className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-[#dce4da] px-5 py-3 text-sm font-semibold text-[#174c3e] transition hover:border-[#174c3e] hover:bg-[#e9f1e9]"
        >
          All destinations <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.name} destination={destination} />
        ))}
      </div>
    </section>
  );
}
