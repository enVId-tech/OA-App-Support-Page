import './globals.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Support Center',
  description: 'Get help and find answers to your questions',
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}