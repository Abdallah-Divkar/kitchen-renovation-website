// The "→" after a link label. It slides a few pixels to the right when the link
// (which needs the "group" class) is hovered or keyboard-focused. motion-safe turns
// the movement off for people who prefer reduced motion.
export default function LinkArrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1"
    >
      →
    </span>
  );
}
