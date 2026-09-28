import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Join from './Components/Join'
import Numbers from './Components/Numbers'
import PageLayout from './Components/PageLayout'
import Partners from './Components/Partners'
import Subteams from './Components/Subteams'

function App() {
  return (
    <PageLayout>
      <Home />
      <Numbers />
      <About />
      <Subteams />
      <Join />
      <Partners />
      <Footer />
    </PageLayout>
  )
}

export default App
