import localFont from "next/font/local";
import "./globals.css";
import { Header } from '@/components/Header';

export const metadata = {
  title: "Task Manager",
  description: "Created with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto w-full max-w-7xl animate-appear">
          <Header />
            <div className="px-4 py-2">
              {children}
            </div>
        </div>
      </body>
    </html>
  );
}
