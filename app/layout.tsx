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
        <div className="bg-yellow-400 text-black text-center py-2 text-sm font-bold">
  🎯 Introductory Special — 
  <a href="#special" className="underline hover:text-blue-800 ml-1">Click here for details</a>
</div>

        <Header />
          {children}
      </body>
    </html>
  );
}

