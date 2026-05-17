export default function Ambient() {
  return (
    <div aria-hidden className="fixed inset-0 -z-20 pointer-events-none">
      <div
        className="absolute inset-[-20%] blur-[40px] saturate-[120%] animate-[float_24s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(45,232,138,.18), transparent 60%), radial-gradient(50% 50% at 80% 20%, rgba(91,231,255,.10), transparent 60%), radial-gradient(60% 60% at 60% 90%, rgba(232,181,71,.10), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%,#000 30%,transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%,#000 30%,transparent 90%)",
        }}
      />
    </div>
  );
}
