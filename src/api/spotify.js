export const getArtists = async (artist) => {
   const response = await fetch(
      `https://api.spotify.com/v1/search?q=${artist}&type=artist`,
      {
         headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
         },
      }
   )
   const data = await response.json()
   return data.artists.items
}

export const getArtistAlbums = async (artistId) => {
   const accessToken = localStorage.getItem('accessToken')
   const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      {
         headers: {
            Authorization: `Bearer ${accessToken}`,
         },
      }
   )
   const data = await response.json()
   return data.items
}
