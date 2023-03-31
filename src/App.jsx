import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Login from './pages/Login'

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <main className='bg-gray-700'>
               <Routes>
                  <Route path='/' element={<Login />} />
                  {/* <Route path='/' element={<Home />} />
               <Route path='/' element={<Home />} /> */}
               </Routes>
            </main>
         </Router>
      </>
   )
}

export default App
