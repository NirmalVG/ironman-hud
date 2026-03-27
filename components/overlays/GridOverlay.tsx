export function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  )
}
