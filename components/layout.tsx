import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'

interface Props {
  pageTitle: string
  heading: string
  children: ReactNode
}
const inter = Inter({ subsets: ['latin'] })

const Layout = ({ pageTitle, heading, children }: Props) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Website of René Mundt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <div>René Mundt</div>
        <div>Menu</div>
      </header>
      <main>
        <h1 className={inter.className}>{heading}</h1>
        {children}
      </main>
    </>
  )
}

export default Layout
