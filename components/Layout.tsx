import React, {CSSProperties, ReactNode} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header style={header_style}>
      <nav style={pstion}>
          <ul>
        <Link href="/">
            <img src="Logo.png" alt=""/>
        </Link>{'       '}
          <Link href="trade">
              <a>거래소</a>
          </Link>{'       '}
        <Link href="transfer">
               <a>입/출금</a>
          </Link>{'       '}

          <Link href="auto">
              <a>자동거래</a>
          </Link>{'    '}

              <Link href="Login">
                  <a>로그인</a>
              </Link>{'      '}

              <Link href="Join">
                  <a>회원가입</a>
              </Link>{'        '}
          </ul>

          </nav>

    </header>
    {children}
    <footer>
      <hr />
      <span>Copyright(c)2021 by pjhun2. All pictures cannot be copied without permission.</span>
    </footer>
  </div>
)

const header_style: CSSProperties = {
    backgroundColor: "whitesmoke",
}
const pstion: CSSProperties = {
    position: "relative",
    margin: "0px",
    padding: "0px",
    display: "block",
}

const login_join: CSSProperties = {
    position: "fixed",

}

export default Layout
