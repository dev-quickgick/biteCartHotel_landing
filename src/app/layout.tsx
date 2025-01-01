import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'BiteCart - Turn Every Table Into a Smart Counter',
  description: 'Revolutionize your restaurant experience with BiteCart\'s seamless ordering solution. Boost efficiency, reduce wait times, and delight your customers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <link rel="icon" href="/solo_logo.png" />
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

