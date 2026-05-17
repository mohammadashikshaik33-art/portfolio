import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-14 max-w-[680px]">
      <Reveal>
        <span className="eyebrow">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="text-3xl md:text-[44px] font-bold mt-4 mb-3 leading-tight">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={2}>
          <p className="text-[var(--text-2)] text-[15.5px] leading-relaxed max-w-[600px]">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
