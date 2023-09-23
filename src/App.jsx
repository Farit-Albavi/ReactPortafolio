import Header from './components/Header'
import Presentacion from './components/Presentacion'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Quote from './components/Quote'


function App() {

  const design = 'flex justify-center dark:bg-transparent bg-gray-300 text-gray-700 dark:text-white'

  return (
    <>
      <header className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Header></Header>
      </header>

      {/* quitar el h-screen */}
      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Presentacion></Presentacion>
      </section>

      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Services />
      </section>

      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Quote />
      </section>

      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Skills />
      </section>

      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Portfolio />
      </section>

      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Contact />
      </section>


      <footer className='dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Footer />
      </footer>
    </>
  )
}

export default App
