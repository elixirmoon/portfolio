import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lara Ilamaran — CS & Mathematics Student",
  description:
    "Portfolio of Lara Ilamaran — Computer Science & Mathematics student working with C++, Python, HTML, CSS, and JavaScript.",
  icons: {
    icon: [{ url: "https://github.com/elixirmoon.png" }],
    shortcut: "https://github.com/elixirmoon.png",
    apple: "https://github.com/elixirmoon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
