import React from "react"
import HomeContent from "../components/Home/HomeContent"
import HomeHero from "../components/Home/HomeHero"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeContent />
    </Layout>
  )
}
