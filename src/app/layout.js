import localFont from "next/font/local";
import "./globals.css";
import { Header } from '@/components/Header-landing';
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: "Task Manager",
  description: "Task manager app by Lasse Juusela",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >      
          <div className="mx-auto w-full animate-appear">
            <Header />
              <div>
                {children}
              </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
