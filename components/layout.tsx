import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'
import styles from './layout.module.scss'
import { NextRouter, useRouter } from 'next/router'

interface Props {
  pageTitle?: string
  children: ReactNode
}
const inter = Inter({ subsets: ['latin'] })

const applyStyle = (router: NextRouter, current: string): string => {
  if (router.pathname === '/' && current === 'home') return styles.highlightLink
  else if (router.pathname === '/blog' && current === 'blog') return styles.highlightLink
  else if (router.pathname === '/about' && current === 'about') return styles.highlightLink
  return ''
}
const Layout = ({ pageTitle, children }: Props) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{pageTitle ? `René Mundt | ${pageTitle}` : 'René Mundt'}</title>
        <meta name="description" content="Website of René Mundt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <div>René Mundt</div>
        <nav>
          <Link className={applyStyle(router, 'home')} href="/">
            Home
          </Link>
          <Link className={applyStyle(router, 'blog')} href="/blog">
            Blog
          </Link>
          <Link className={applyStyle(router, 'about')} href="/about">
            About
          </Link>
        </nav>
      </header>
      <main>
        <h1 className={inter.className}></h1>
        {children}
      </main>
    </>
  )
}

export default Layout
