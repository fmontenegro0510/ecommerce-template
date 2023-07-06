// import './App.css'
import Banner from './components/Banner/Banner'
import Menu from './components/Menu/Menu'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
function App() {
  return (
    <>

{/* 
<div className="flex flex-col min-h-screen">
  <header className="bg-gray-800 text-white py-4">
		  <Banner />
		  <Menu />
  </header>

  <main className="flex-1 bg-gray-100">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
		  <Login />
    </div>
  </main>
		  <Footer />
</div>
 */}



<div className="container mx-auto px-4">
    <header className="py-4">
    <Banner />
		  <Menu />
    </header>

    <main className="py-6">

     
<Hero />

    </main>
    <Footer />

  </div>





    </>
  )
}

export default App
