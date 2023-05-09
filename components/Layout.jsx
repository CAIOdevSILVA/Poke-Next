import Head from "next/head"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
        <Navbar />
        <main className="min-h-[70vh]">
          {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout