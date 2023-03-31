import React, { useEffect } from 'react'

const Login = () => {
   const handleLoginClick = () => {
      const clientId = 'f785d7ec1fcd4c8fa269b54be112e689'
      const redirectUri = 'http://localhost:3000/search'

      // Construct the Spotify login URL
      const scopes = ['user-read-private', 'user-read-email']
      const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
         redirectUri
      )}&scope=${encodeURIComponent(scopes.join(' '))}`

      // Redirect to the Spotify login page
      window.location = loginUrl
   }

   return (
      <div className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
         <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
               <button
                  onClick={handleLoginClick}
                  type='button'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
               >
                  Login with Spotify
               </button>
            </div>
         </div>
      </div>
   )
}

export default Login
