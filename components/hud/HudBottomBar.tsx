"use client"

interface HudBottomBarProps {
  fps?: number
  objectCount?: number
  battery?: number
  temperature?: number
}

export function HudBottomBar({
  fps = 60,
  objectCount = 4,
  battery = 88,
  temperature = 22,
}: HudBottomBarProps) {
  const items = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L8 6H4v4l-2 2 2 2v4h4l4 4 4-4h4v-4l2-2-2-2V6h-4L12 2z"
            stroke="#00D4FF"
            strokeWidth="1.2"
            fill="none"
            opacity="0.7"
          />
        </svg>
      ),
      label: `${fps} FPS`,
      active: false,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#00D4FF" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="#00D4FF" />
          <line
            x1="12"
            y1="3"
            x2="12"
            y2="6"
            stroke="#00D4FF"
            strokeWidth="1.5"
          />
          <line
            x1="12"
            y1="18"
            x2="12"
            y2="21"
            stroke="#00D4FF"
            strokeWidth="1.5"
          />
          <line
            x1="3"
            y1="12"
            x2="6"
            y2="12"
            stroke="#00D4FF"
            strokeWidth="1.5"
          />
          <line
            x1="18"
            y1="12"
            x2="21"
            y2="12"
            stroke="#00D4FF"
            strokeWidth="1.5"
          />
        </svg>
      ),
      label: `OBJ_${String(objectCount).padStart(2, "0")}`,
      active: true,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="2"
            y="7"
            width="18"
            height="10"
            rx="2"
            stroke="#00D4FF"
            strokeWidth="1.5"
          />
          <path d="M20 10h2v4h-2v-4z" fill="#00D4FF" opacity="0.6" />
          <rect
            x="4"
            y="9"
            width={`${(battery / 100) * 12}`}
            height="6"
            rx="1"
            fill="#00D4FF"
            opacity="0.8"
          />
        </svg>
      ),
      label: `BAT_${battery}%`,
      active: false,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z"
            stroke="#00D4FF"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="12" cy="9" r="2.5" stroke="#00D4FF" strokeWidth="1.2" />
        </svg>
      ),
      label: `${temperature}°`,
      active: false,
    },
  ]

  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-3 sm:py-4 px-2 sm:px-6"
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        fontFamily: "Share Tech Mono, monospace",
      }}
    >
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className={`relative ${item.active ? "drop-shadow-[0_0_8px_#00D4FF]" : "opacity-60"}`}
          >
            {item.active && (
              <div className="absolute inset-0 rounded-full border border-hud-cyan opacity-40 scale-150" />
            )}
            {item.icon}
          </div>
          <span
            className={`text-[9px] sm:text-[10px] uppercase tracking-widest ${item.active ? "text-hud-cyan" : "text-hud-cyan/50"}`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
