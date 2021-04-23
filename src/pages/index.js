import React, { useEffect, useState } from 'react'
import SEO from '@/components/SEO'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Steps from '@/components/Steps'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Intro from '@/components/CompanyIntro'
import { getStrapiContent } from '@/lib/strapi'
import { useCookie } from 'react-use'
import posthog from 'posthog-js'

const HomePage = ({ components }) => {
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
        posthog.init('JISuZcm4Z7k2G2QGUGPW5_0EfoYQtH5L2Nn_kVDDhNw', {
          api_host: 'https://posthog.newtelco.dev',
        })
      }
    } else {
      setOpen(true)
    }
  }, [])

  const hideBanner = choice => {
    if (choice === 'accept') {
      updateCookie(JSON.stringify({ accepted: true }))
      setupGA()
      posthog.init('JISuZcm4Z7k2G2QGUGPW5_0EfoYQtH5L2Nn_kVDDhNw', {
        api_host: 'https://posthog.newtelco.dev',
      })
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
      <Hero content={components?.Hero} />
      <Intro content={components?.Welcome} />
      <Features content={components?.Features} />
      <Steps />
      <Contact />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // const global = await getStrapiContent('globals')
  const landingComponents = await getStrapiContent('main-rz')

  return { props: { components: landingComponents } }
}

export default HomePage
