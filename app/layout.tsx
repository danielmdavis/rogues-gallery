import './globals.css'
import { AppWrapper } from './state'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppWrapper>
        <head />
        <body>
          <div className='header'><div className='header-inner'>Rogues Gallery</div></div>
          {children}
        </body>
      </AppWrapper>
    </html>
  )
}
