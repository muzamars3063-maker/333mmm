import { useEffect } from 'react'
import { Header } from './components/Header'
import { QuickView } from './components/QuickView'
import {
  BannerTwo,
  BestDeals,
  Categories,
  Cta,
  Features,
  Footer,
  Hero,
  News,
  Newsletter,
  ProductsSectionOne,
  ProductsSectionThree,
  ProductsSectionTwo,
} from './components/Sections'
import { loadThemeScripts } from './theme'

function App() {
  useEffect(() => {
    loadThemeScripts().catch((error) => console.error(error))
  }, [])

  return (
    <div className="site-wrapper overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <BestDeals />
      <Categories />
      <ProductsSectionOne />
      <BannerTwo />
      <ProductsSectionTwo />
      <ProductsSectionThree />
      <Cta />
      <News />
      <Newsletter />
      <Footer />
      <QuickView />
    </div>
  )
}

export default App
