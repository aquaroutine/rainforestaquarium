import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ShowcaseSlider } from './components/ShowcaseSlider'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ShowcaseSlider />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
