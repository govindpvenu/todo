import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { poppins } from "@/constants/fonts";
import { Wisteria } from "@/constants/fonts";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Tutudoo",
  description: "A simple todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Wisteria.className}  ${Wisteria.className}${poppins.className}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen flex flex-col">
            <Header />
            <section className="h-full mt-2 w-full  flex-1 flex flex-col items-center justify-center  gap-4 p-6 md:p-10">
              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
