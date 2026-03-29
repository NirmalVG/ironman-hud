"use client"

import { useVoice } from "@/hooks/useVoice"
import { useHudStore } from "@/store/hudStore"

export function VoiceButton() {
  const { startListening, stopListening } = useVoice()
  const { voiceState, lastCommand, lastResponse } = useHudStore()

  const isListening = voiceState === "listening"
  const isActive = voiceState !== "idle"

  return (
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-auto">
      {/* Last command / response display */}
      {(lastCommand || lastResponse) && (
        <div
          className="flex flex-col items-center gap-1 max-w-[280px] text-center"
          style={{ fontFamily: "Share Tech Mono, monospace" }}
        >
          {lastCommand && (
            <div className="text-hud-cyan/40 text-[9px] uppercase tracking-widest">
              ▸ {lastCommand}
            </div>
          )}
          {lastResponse && voiceState === "speaking" && (
            <div
              className="text-hud-cyan text-[10px] uppercase tracking-wider animate-pulse-hud"
              style={{ textShadow: "0 0 8px #00D4FF" }}
            >
              {lastResponse}
            </div>
          )}
        </div>
      )}

      {/* Push to talk button */}
      <button
        onPointerDown={startListening}
        onPointerUp={stopListening}
        onPointerLeave={stopListening}
        className="relative flex items-center justify-center"
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: `2px solid ${isListening ? "#00D4FF" : "rgba(0,212,255,0.3)"}`,
          background: isListening ? "rgba(0,212,255,0.15)" : "rgba(0,0,0,0.6)",
          transition: "all 0.2s ease",
          boxShadow: isListening ? "0 0 20px rgba(0,212,255,0.5)" : "none",
        }}
      >
        {/* Pulse rings when listening */}
        {isListening && (
          <>
            <div
              className="absolute inset-0 rounded-full border border-hud-cyan animate-ping"
              style={{ opacity: 0.3 }}
            />
            <div
              className="absolute rounded-full border border-hud-cyan animate-ping"
              style={{
                inset: -8,
                opacity: 0.15,
                animationDelay: "0.3s",
              }}
            />
          </>
        )}

        {/* Mic icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            opacity: isActive ? 1 : 0.5,
            filter: isListening ? "drop-shadow(0 0 6px #00D4FF)" : "none",
          }}
        >
          <rect
            x="9"
            y="2"
            width="6"
            height="11"
            rx="3"
            stroke="#00D4FF"
            strokeWidth="1.5"
            fill={isListening ? "rgba(0,212,255,0.2)" : "none"}
          />
          <path
            d="M5 10a7 7 0 0 0 14 0"
            stroke="#00D4FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="17"
            x2="12"
            y2="21"
            stroke="#00D4FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="9"
            y1="21"
            x2="15"
            y2="21"
            stroke="#00D4FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* State label */}
        <div
          className="absolute -bottom-5 text-[8px] uppercase tracking-widest"
          style={{
            fontFamily: "Share Tech Mono, monospace",
            color: isListening ? "#00D4FF" : "rgba(0,212,255,0.4)",
          }}
        >
          {voiceState === "idle" && "HOLD"}
          {voiceState === "listening" && "SPEAK"}
          {voiceState === "processing" && "PROC"}
          {voiceState === "speaking" && "JRVIS"}
        </div>
      </button>
    </div>
  )
}
