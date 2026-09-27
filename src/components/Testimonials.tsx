import Image from "next/image";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/travelData";

export default function Testimonials() {
  return (
    <section className="section-shell py-20 md:py-28">
      <SectionHeading
        eyebrow="Kind words from out there"
        title="What Our Travelers Say"
        description="A few notes from people who took the long way home."
        centered
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="flex h-full flex-col rounded-[1.3rem] border border-[#ebece4] bg-white p-6 shadow-[0_8px_30px_rgba(24,55,44,0.045)] sm:p-7">
            <div className="flex gap-1 text-[#d7944f]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={14} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-[0.93rem] leading-7 text-[#52645c]">
              “{testimonial.review}”
            </blockquote>
            <div className="mt-6 flex items-center gap-3 border-t border-[#f0f0eb] pt-5">
              <Image
                src={testimonial.avatar}
                alt={testimonial.avatarAlt}
                width={46}
                height={46}
                sizes="46px"
                className="size-[46px] rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#173d36]">{testimonial.name}</p>
                <p className="mt-0.5 text-xs text-[#819087]">{testimonial.location}</p>
              </div>
              <span className="ml-auto text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#8c9a91]">Verified</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
