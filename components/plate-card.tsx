import type { Plate } from "./plates-data";

export function PlateCard({ plate }: { plate: Plate }) {
  return (
    <div className="plate-surface group relative h-full w-full overflow-hidden transition-transform duration-(--duration-base) ease-plate hover:scale-[1.04]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={plate.img}
        alt={plate.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(42,33,22,0.88) 0%, rgba(42,33,22,0.28) 42%, rgba(42,33,22,0.05) 62%)",
        }}
      />
      <span className="absolute top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-white/40 bg-black/25 px-2.5 py-1 text-[0.6rem] font-mono uppercase tracking-(--tracking-label) text-white/90 backdrop-blur-[1px]">
        {plate.index}
      </span>
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 text-center">
        <p className="font-display text-lg italic leading-tight text-white sm:text-xl">
          {plate.label}
        </p>
        <p className="mt-1 text-[0.62rem] font-mono uppercase tracking-(--tracking-label) text-white/75">
          {plate.note}
        </p>
      </div>
    </div>
  );
}
