import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
