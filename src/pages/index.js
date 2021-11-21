import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import SEO from '@/components/SEO'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
// import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Intro from '@/components/CompanyIntro'
import Easy from '@/components/Easy'
import Faq from '@/components/Faq'
import { useCookie } from 'react-use'

const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
})

const HomePage = () => {
  const [value, updateCookie] = useCookie('gdpr-banner-dev')
  const [open, setOpen] = useState(false)

  const gaCode = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

  const googleAnalytics4Snippet = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${gaCode}');
  `

  const setupGA = () => {
    const a = document.createElement('script')
    a.type = 'text/javascript'
    a.async = true
    a.innerHTML = googleAnalytics4Snippet
    const b = document.createElement('script')
    b.type = 'text/javascript'
    b.src = `https://www.googletagmanager.com/gtag/js?id=${gaCode}`
    document.head.appendChild(b)
    document.head.appendChild(a)
  }

  useEffect(() => {
    if (value && JSON.parse(value)) {
      if (JSON.parse(value).accepted === true) {
        setupGA()
      }
    } else {
      setOpen(true)
    }
  }, [])

  const hideBanner = choice => {
    if (choice === 'accept') {
      updateCookie(JSON.stringify({ accepted: true }))
      setupGA()
    } else if (choice === 'decline') {
      updateCookie(JSON.stringify({ accepted: false }))
    }
    setOpen(false)
  }

  return (
    <>
      <SEO title='MainRZ' />
      <Header />
      {open && <Banner hide={hideBanner} />}
      <Hero />
      <Intro />
      <Easy />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
