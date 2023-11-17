import Presentacion from './components/Presentacion'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Quote from './components/Quote'
import Header from './components/Header'

function App() {


  return (
    <>

      <header className='w-full flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Header></Header>
      </header>

      <section className='flex justify-center w-full dark:bg-transparent bg-white text-gray-700 dark:text-white'>
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
