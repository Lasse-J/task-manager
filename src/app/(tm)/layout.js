import localFont from "next/font/local";
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: "Task Manager",
  description: "Task manager app by Lasse Juusela",
};

export default function TMLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >      
          <div className="mx-auto w-full max-w-7xl animate-appear">
            <Header />
              <div className="px-4 py-2">
                {children}
              </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
