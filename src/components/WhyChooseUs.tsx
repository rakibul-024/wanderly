import SectionHeading from "@/components/SectionHeading";
import { benefits } from "@/data/travelData";

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#f1f3ec] py-20 md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="The Wanderly difference"
            title="Why Travel With Wanderly?"
            description="Travel should feel like you. We bring the thoughtful planning, local know-how, and care that make it easy to get out there."
          />
          <div className="grid gap-x-7 gap-y-8 sm:grid-cols-2">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-[#174c3e] shadow-sm">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.025em] text-[#173d36]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#718078]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
