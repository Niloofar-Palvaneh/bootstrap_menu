import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'bootstrap',
  description: 'bootstrap',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='bg-white text-gray-900 dark:bg-gray-800 dark:text-white'>
          {children}
        </div>
      </body>
    </html>
  )
}