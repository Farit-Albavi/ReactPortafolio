import Header from './components/Header'
import Presentacion from './components/Presentacion'
import Skills from './components/Skills'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <header className='flex justify-center dark:bg-transparent bg-gray-300 text-gray-700 dark:text-white'>
        <Header></Header>
      </header>
      {/* quitar el h-screen */}
      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white h-screen'>
        <Presentacion></Presentacion>
      </section>
      <section className='flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Skills></Skills>
      </section>
      <footer className='dark:bg-transparent bg-white text-gray-700 dark:text-white'>
        <Footer></Footer>
      </footer>

    </>
  )
}

export default App
