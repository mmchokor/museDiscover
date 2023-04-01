import React from 'react'

const ArtistAlbumCard = ({ album }) => {
   return (
      <div
         key={album.id}
         className='bg-gray-800 shadow-md rounded-lg overflow-hidden'
      >
         <img
            src={album.images[0].url}
            alt={album.name}
            className='w-full h-64 object-cover'
         />
         <div className='p-4'>
            <h2 className='text-xl text-white font-bold mb-2'>{album.name}</h2>
            <p className='mb-2 text-gray-300'>
               {album.artists.map((artist) => artist.name).join(', ')}
            </p>
            <p className='mb-2 text-gray-400'>{album.release_date}</p>
            <p className='mb-4 text-gray-400'>{album.total_tracks} tracks</p>
            <a
               href={album.external_urls.spotify}
               target='_blank'
               rel='noopener noreferrer'
               className='text-blue-500 hover:text-blue-700'
            >
               Listen on Spotify
            </a>
         </div>
      </div>
   )
}

export default ArtistAlbumCard
