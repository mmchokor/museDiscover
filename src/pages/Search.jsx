import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getArtists } from '../api/spotify'
import ArtistCard from '../components/ArtistCard'

function ArtistSearch() {
   const navigate = useNavigate()
   const [searchTerm, setSearchTerm] = useState('')
   const [searchResults, setSearchResults] = useState([])

   // Function to handle search input change
   const handleSearchChange = (event) => {
      const newSearchTerm = event.target.value
      setSearchTerm(newSearchTerm)
   }

   useEffect(() => {
      const params = new URLSearchParams(window.location.hash.replace('#', ''))
      const accessToken = params.get('access_token')
      console.log(accessToken)

      if (accessToken) {
         // Store the access token in local storage
         localStorage.setItem('accessToken', accessToken)
         // Redirect to the Artist Search page
         navigate('/search')
      }
   }, [])

   // use a use effect instead of debouce
   useEffect(() => {
      if (searchTerm) {
         const searching = async () => {
            const results = await getArtists(searchTerm)
            setSearchResults(await results)
            console.log(results)
         }
         searching()
      } else if (searchTerm === '') {
         setSearchResults([])
      }
   }, [searchTerm])

   return (
      <div className='p-4'>
         <form>
            <label htmlFor='search' className='sr-only'>
               Search for an artist
            </label>
            <input
               type='text'
               id='search'
               className='w-full border rounded-md p-2 mb-4'
               placeholder='Search for an artist...'
               value={searchTerm}
               onChange={handleSearchChange}
            />
         </form>
         {searchResults.length > 0 && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
               {searchResults.map((result) => (
                  <ArtistCard
                     key={result.id}
                     name={result.name}
                     imageUrl={result.images[0].url}
                     followers={result.followers.total}
                     rating={result.popularity}
                  />
               ))}
            </div>
         )}
      </div>
   )
}

export default ArtistSearch
