import React from 'react'
import { useRouter } from 'next/router'
import '../styles/index.css'

function FacebookPixel() {
  const router = useRouter()

  React.useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init(process.env.NEXT_PUBLIC_PIXEL_ID)
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  })
  return null
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FacebookPixel />
    </>
  )
}

export default MyApp
