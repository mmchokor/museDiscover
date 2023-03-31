import { debounce } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getArtists } from '../api/spotify'
import ArtistCard from '../components/ArtistCard'

function ArtistSearch() {
   const navigate = useNavigate()
   const [searchTerm, setSearchTerm] = useState('')
   const [searchResults, setSearchResults] = useState([])
   const [loading, setLoading] = useState(false)

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

   const debouncedSearch = debounce(async (searchTerm) => {
      setLoading(true)
      const results = await getArtists(searchTerm)
      setSearchResults(results)
      setLoading(false)
   }, 500)

   useEffect(() => {
      if (searchTerm) {
         debouncedSearch(searchTerm)
      } else {
         setSearchResults([])
      }
   }, [searchTerm])

   return (
      <div className='p-4'>
         <form className={searchTerm === '' && 'h-[100vh]'}>
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
         {loading && (
            <p className='text-center text-6xl m-12 font-bold'>Loading...</p>
         )}
         {searchResults.length > 0 && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
               {searchResults.map(
                  (result) =>
                     result.images[0] && (
                        <ArtistCard
                           key={result.id}
                           name={result.name}
                           imageUrl={result.images[0].url}
                           followers={result.followers.total}
                           rating={result.popularity}
                        />
                     )
               )}
            </div>
         )}
      </div>
   )
}

export default ArtistSearch
