import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Renan Botasse — Frontend Engineer",
  description: "Frontend Engineer building modern web products with React, Next.js and TypeScript.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Noise texture */}
        <div
          className="pointer-events-none fixed inset-0 z-[999]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
            opacity: 0.45,
          }}
        />
        {/* Purple glow — top right */}
        <div
          className="pointer-events-none fixed z-0"
          style={{
            top: "-150px", right: "-100px",
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(189,147,249,0.06) 0%, transparent 70%)",
            filter: "blur(110px)", borderRadius: "50%",
          }}
        />
        {/* Red glow — bottom left */}
        <div
          className="pointer-events-none fixed z-0"
          style={{
            bottom: "5%", left: "-120px",
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(255,85,85,0.045) 0%, transparent 70%)",
            filter: "blur(110px)", borderRadius: "50%",
          }}
        />

        <Navbar />
        <main style={{ paddingTop: 60, position: "relative", zIndex: 1 }}>
          {children}
        </main>
        <ContactSection />
      </body>
    </html>
  );
}
