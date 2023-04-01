import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ name, imageUrl, followers, rating, artistId }) => {
   const roundedRating = Math.round(rating * 10) / 10

   const navigate = useNavigate()

   const handleOnClick = () => {
      navigate(`/artist-albums/${artistId}`)
   }

   return (
      <div
         className='max-w-xs rounded-md overflow-hidden shadow-md bg-gray-800 mx-auto cursor-pointer'
         onClick={handleOnClick}
      >
         <img src={imageUrl} alt={`${name} image`} className='w-full' />
         <div className='p-4'>
            <h2 className='font-bold text-lg text-white'>{name}</h2>
            <p className='text-gray-400'>
               {followers.toLocaleString()} followers
            </p>
            <div className='flex items-center mt-2'>
               <span className='text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, index) => '★')}
               </span>
               <span className='ml-1 text-gray-600'>{roundedRating}</span>
            </div>
         </div>
      </div>
   )
}

export default ArtistCard
