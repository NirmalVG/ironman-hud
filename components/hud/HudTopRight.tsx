"use client"

import { CornerBrackets } from "@/components/hud/CornerBrackets"

interface HudTopRightProps {
  lat?: number
  lng?: number
  heading?: number
  zoom?: number
  location?: string
}

export function HudTopRight({
  lat = 40.7128,
  lng = -74.006,
  heading = 245,
  zoom = 1,
  location = "LOC_NYC_MHTN",
}: HudTopRightProps) {
  return (
    <div
      className="relative p-2 sm:p-3 w-[38vw] sm:w-[36vw] md:w-[32vw] lg:w-[220px] text-right"
      style={{ fontFamily: "Share Tech Mono, monospace" }}
    >
      <CornerBrackets />

      <div
        className="text-hud-cyan font-orbitron text-[10px] sm:text-xs font-bold leading-tight mb-1"
        style={{ textShadow: "0 0 10px #00D4FF" }}
      >
        GPS:
        <br />
        {Math.abs(lat).toFixed(4)}° {lat >= 0 ? "N" : "S"}
      </div>

      <div className="text-hud-cyan/70 text-[9px] sm:text-[10px] mb-1 uppercase tracking-wider">
        HDG: {heading}° &nbsp;|&nbsp; ZOOM: {zoom}X
      </div>

      <div className="text-hud-cyan/50 text-[9px] sm:text-[10px] uppercase tracking-widest">
        {location}
      </div>
    </div>
  )
}
