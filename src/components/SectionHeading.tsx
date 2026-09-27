type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-[620px] text-center" : "max-w-[620px]"}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {description && <p className="section-copy mt-4">{description}</p>}
    </div>
  );
}
