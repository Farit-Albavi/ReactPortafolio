import Header from './components/Header'
import Header1 from './components/Header.jsx'
import Presentacion from './components/Presentacion'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <header className='flex justify-center dark:bg-transparent bg-gray-300 text-gray-700 dark:text-white'>
        <Header1></Header1>
      </header>

      {/* quitar el h-screen */}
      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Presentacion></Presentacion>
      </section>

      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Skills></Skills>
      </section>

      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Contact></Contact>
      </section>

      <footer className='dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Footer></Footer>
      </footer>

    </>
  )
}

export default App
