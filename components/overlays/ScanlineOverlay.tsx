export function ScanlineOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 212, 255, 0.03) 2px,
          rgba(0, 212, 255, 0.03) 4px
        )`,
      }}
    />
  )
}
