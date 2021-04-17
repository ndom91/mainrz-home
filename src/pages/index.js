import React, { useEffect, useState } from "react"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Steps from "../components/Steps"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import { fetchAPI } from "../lib/strapi"
import { useCookie } from "react-use"

const HomePage = ({ global, components }) => {
  const [value, updateCookie, deleteCookie] = useCookie("gdpr-banner-dev")
  const [open, setOpen] = useState(false)

  const GA4Code = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G5PLDMEVWF');
  `

  const setupGA = () => {
    const a = document.createElement("script")
    a.type = "text/javascript"
    a.async = true
    a.innerHTML = GA4Code
    const b = document.createElement("script")
    b.type = "text/javascript"
    b.src = "https://www.googletagmanager.com/gtag/js?id=G-G5PLDMEVWF"
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

  const hideBanner = (choice) => {
    if (choice === "accept") {
      updateCookie(JSON.stringify({ accepted: true }))
      setupGA()
    } else if (choice === "decline") {
      updateCookie(JSON.stringify({ accepted: false }))
    }
    setOpen(false)
  }

  console.log(components)

  return (
    <>
      <SEO title="MainRZ" />
      <Header />
      {open && <Banner hide={hideBanner} />}
      <Hero content={components?.hero} />
      <Features content={components?.landingFeatures} />
      <Steps />
      <Contact />
      <Footer />
    </>
  )
}

export async function getStaticProps(ctx) {
  const global = await fetchAPI("/globals")
  const landingComponents = await fetchAPI("/landing-components")

  return { props: { global: global[0], components: landingComponents[0] } }
}

export default HomePage
