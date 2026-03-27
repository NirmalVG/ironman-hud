import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "IronMan HUD",
  description: "Augmented Reality HUD — Turn your phone into Iron Man's helmet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-hud-dark overflow-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
