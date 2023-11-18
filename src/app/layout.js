import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Propiska',
  description: 'Прописка граждан в Алматы',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="ru">
      <head>
        <meta name="google-site-verification" content="Jlf-KXukVHwC2wEQfXvFD3Ykwsu0buUIUTpfHV_0HMM" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
