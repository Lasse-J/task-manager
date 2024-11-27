import localFont from "next/font/local";
import "./globals.css";
import { Header } from '@/components/Header';
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >      
          <div className="mx-auto w-3/4 px-4 animate-appear">
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
