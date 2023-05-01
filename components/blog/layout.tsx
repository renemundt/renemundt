import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Meta /> */}
      <div>
        <nav>NAVIGATION</nav>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
