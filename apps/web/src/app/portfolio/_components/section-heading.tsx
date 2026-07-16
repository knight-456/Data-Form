import { memo } from "react";

export const SectionHeading = memo(function SectionHeading({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out data-[animate=true]:opacity-100 data-[animate=true]:translate-y-0"}>
      <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand mb-3">{eyebrow}</p>
      <h2 className="mt-1 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl text-foreground">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted-foreground font-medium">{description}</p>
    </div>
  );
});
