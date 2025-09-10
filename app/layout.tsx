import Header from "@/components/ui/Header";
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dallas Wheels - Traditional Wheelbuilding. Modern Precision.',
  description: 'Hand-built wheels for cyclists and wheelchair users since 1973',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
      </body>
    </html>
  );
}
