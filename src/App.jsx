import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WorkSection from './components/WorkSection.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import { projects, research } from './data/projects.js'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <WorkSection
          id="projects"
          eyebrow="Selected work"
          heading="Projects"
          intro="Hardware and firmware I have designed, assembled, and debugged, from sensing systems to embedded controllers."
          items={projects}
        />

        <WorkSection
          id="research"
          eyebrow="Ongoing"
          heading="Research"
          intro="Robot learning work at UT Austin: collecting and curating the demonstration data that teaches a manipulation policy to generalize, and evaluating its performance."
          items={research}
        />

        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
