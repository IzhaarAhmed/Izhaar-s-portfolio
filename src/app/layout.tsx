import './globals.css'
import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import ErrorBoundary from '@/components/ErrorBoundary'
import StyledComponentsRegistry from './registry'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: 'Mohammad Izhaar Ahmed | Junior Software Developer',
  description: 'Dynamic Junior Software Developer specializing in front-end development with expertise in HTML, CSS, JavaScript, Python, and modern development tools. Experienced in UI/UX design and software engineering.',
  keywords: ['Software Developer', 'Front End Developer', 'UI Developer', 'JavaScript', 'Python', 'HTML', 'CSS', 'Bootstrap', 'Power BI'],
  authors: [{ name: 'Mohammad Izhaar Ahmed' }],
  creator: 'Mohammad Izhaar Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://izhaarahmed.in',
    siteName: 'Mohammad Izhaar Ahmed Portfolio',
    title: 'Mohammad Izhaar Ahmed | Junior Software Developer',
    description: 'Dynamic Junior Software Developer specializing in front-end development with expertise in HTML, CSS, JavaScript, Python, and modern development tools.',
    images: [{
      url:'https://ik.imagekit.io/nxetcvdg2/9D1DEE6B-39BA-4AA5-B0D6-2998160E983F.JPEG?updatedAt=1751622350743',
      width: 1200,
      height: 630,
      alt: 'Mohammad Izhaar Ahmed'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Izhaar Ahmed | Junior Software Developer',
    description: 'Dynamic Junior Software Developer specializing in front-end development with expertise in HTML, CSS, JavaScript, Python, and modern development tools.',
    images: ['https://ik.imagekit.io/nxetcvdg2/9D1DEE6B-39BA-4AA5-B0D6-2998160E983F.JPEG?updatedAt=1751622350743'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <div className="min-h-screen w-full bg-[#faf9f6] relative">
            {/* Paper Texture */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
                `,
                backgroundSize: "8px 8px, 32px 32px, 32px 32px",
              }}
            />
            <div className="relative z-10">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </div>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
