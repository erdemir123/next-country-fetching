import './globals.css'
import Navbar from "../components/navbar.js"
import Providers from '../components/providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Navbar/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
