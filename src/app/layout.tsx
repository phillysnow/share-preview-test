import { Playfair_Display, Open_Sans } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { clsx } from 'clsx'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(playfairDisplay.variable, openSans.variable)}>
        {children}
      </body>
    </html>
  )
}
