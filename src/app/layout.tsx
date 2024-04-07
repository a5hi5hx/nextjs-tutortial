export const metadata = {
  title: 'Next.js',
  description: 'Generated by Ashish',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}