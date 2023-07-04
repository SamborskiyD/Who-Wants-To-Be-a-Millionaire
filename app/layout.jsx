
import "@styles/global.css"
import { Inter } from 'next/font/google'
import { Providers } from "@store/Providers"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Who Want's To Be a Millionaire"
}

const MainLayout = ({ children }) => {
  return (
    
    <html lang="en">
        <body className={inter.className}>
          <main>
            <Providers>
              {children}
            </Providers>
          </main>
        </body>
    </html>
  )
}

export default MainLayout