import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"], // Pesos requeridos en el MD
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "REST Countries API",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-555 mx-auto">
            <Navbar />

            <main className="py-4 px-2">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
