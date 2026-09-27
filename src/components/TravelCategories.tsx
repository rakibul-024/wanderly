import CategoryCard from "@/components/CategoryCard";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/data/travelData";

export default function TravelCategories() {
  return (
    <section id="categories" className="bg-[#f1f3ec] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Go your own way"
          title="Find Your Perfect Experience"
          description="There’s no one way to travel. Start with what you love and we’ll take it from there."
          centered
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
