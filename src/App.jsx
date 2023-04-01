import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ArtistAlbums from './pages/ArtistAlbums'
import Login from './pages/Login'
import Search from './pages/Search'

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <main className='bg-gray-700'>
               <Routes>
                  <Route path='/' element={<Login />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/artist-albums/:artistId' element={<ArtistAlbums />} />
               </Routes>
            </main>
         </Router>
      </>
   )
}

export default App
