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
        <body>{children}</body>
      </AppWrapper>
    </html>
  )
}
