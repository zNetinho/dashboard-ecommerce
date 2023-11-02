import PageDefault from '@components/components/Default'
import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { ThemeProvider } from '@components/components/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageDefault>
            {children}
          </PageDefault>
        </ThemeProvider>
      </body>
    </html>
  )
}
