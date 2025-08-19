import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { profileDetails } from '@/config'

export const metadata: Metadata = {
  title: {
    template: `%s - ${profileDetails.name}`,
    default: `${profileDetails.name} - Software designer, founder, and amateur astronaut`,
  },
  description: `I’m ${profileDetails.firstName} and I love building delightful user interfaces and digital experiences that empower regular people do more.`,
  alternates: {
    types: {
      'application/rss+xml': `${profileDetails.url}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
