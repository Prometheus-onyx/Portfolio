export default function NeonButton({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm md:text-base font-semibold transition-all select-none focus-visible:outline-none";

  const variants = {
    primary:
      "bg-gradient-neon text-white shadow-[0_0_40px_rgba(176,38,255,0.35)] hover:brightness-110 active:brightness-95",
    ghost:
      "bg-white/5 border border-white/10 text-gray-100 hover:bg-white/10 hover:border-white/20 active:bg-white/5",
  };

  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}