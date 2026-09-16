/**
 * The four "+" corner glyphs used on KPI plates, the sidebar compliance
 * plate, and dialogs. Parent element must be `position: relative`.
 */
export function RegistrationMarks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "dark" ? "rgba(255,255,255,.4)" : "#a9b0b8";
  const base: React.CSSProperties = {
    position: "absolute",
    fontSize: "13px",
    lineHeight: 1,
    color,
    pointerEvents: "none",
    userSelect: "none",
  };
  return (
    <>
      <span aria-hidden style={{ ...base, top: -8, left: -6 }}>+</span>
      <span aria-hidden style={{ ...base, top: -8, right: -6 }}>+</span>
      <span aria-hidden style={{ ...base, bottom: -8, left: -6 }}>+</span>
      <span aria-hidden style={{ ...base, bottom: -8, right: -6 }}>+</span>
    </>
  );
}
