import type { Metadata } from "next";
import Script from "next/script";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { ThemeProvider } from "@/i18n/ThemeProvider";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renan Botasse — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 5+ years of experience across backend APIs, React/Next.js, React Native, Python/Django, TypeScript and AWS.",
};

/** Apply theme + lang before paint to avoid flash; defaults: light + en */
const bootScript = `
(function () {
  try {
    var theme = localStorage.getItem("portfolio-theme");
    if (theme !== "light" && theme !== "dark") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", theme);

    var locale = localStorage.getItem("portfolio-locale");
    if (locale !== "en" && locale !== "pt") {
      var raw = (navigator.language || "en").toLowerCase();
      locale = raw.indexOf("pt") === 0 ? "pt" : "en";
    }
    document.documentElement.lang = locale;
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.lang = "en";
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <Script id="prefs-boot" strategy="beforeInteractive">
          {bootScript}
        </Script>
        <ThemeProvider>
          <LocaleProvider>
            <div className="pointer-events-none fixed inset-0 z-0 bg-paper" aria-hidden />
            <Navbar />
            <main className="relative z-[1] pt-14">{children}</main>
            <ContactSection />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
