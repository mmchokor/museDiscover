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
