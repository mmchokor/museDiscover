import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getArtistAlbums } from '../api/spotify'
import ArtistAlbumCard from '../components/ArtistAlbumCard'

function ArtistAlbums() {
   const { artistId } = useParams()
   const [albums, setAlbums] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchAlbums = async () => {
         setLoading(true)
         const data = await getArtistAlbums(artistId)
         setAlbums(data)
         setLoading(false)
      }
      fetchAlbums()
   }, [artistId])

   // return loading
   if (loading) {
      return <div>Loading...</div>
   }

   return (
      <div className='p-4'>
         <div className='mb-4'>
            <span className='text-3xl text-white font-bold mb-4'>Albums</span>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {albums.map((album) => (
               <ArtistAlbumCard key={album.id} album={album} />
            ))}
         </div>
      </div>
   )
}

export default ArtistAlbums
