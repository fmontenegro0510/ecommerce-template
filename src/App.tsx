// import './App.css'
import Banner from './components/Banner/Banner'
import Menu from './components/Menu/Menu'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import HeroC from './components/HeroC/HeroC'
import HeroTwoC from './components/HeroTwoC/HeroTwoC'
import LoginBox from './components/LoginBox/LoginBox'
import ReviewStars from './components/ReviewStars/ReviewStars'
import ReviewComment from './components/ReviewComment/ReviewComment'
import Footer2 from './components/Footer2/Footer2'

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

{/* <div className="container mx-auto px-4">
    <header className="py-4">
    <Banner />
		  <Menu />
    </header>

    <main className="py-6">

     
<Hero />

    </main>
    <Footer />

  </div> */}

  <div className="container mx-auto px-4">
    {/* <HeroC /> */}
    {/* <HeroTwoC /> */}
    {/* <LoginBox /> */}
    <ReviewStars />
    <ReviewComment />
    <Footer2 />









  </div>




    </>
  )
}

export default App
