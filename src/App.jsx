import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
   return (
      <>
         <Router>
          <Navbar />
            <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
         </Router>
      </>
   )
}

export default App
