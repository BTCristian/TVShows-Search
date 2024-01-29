import { useState } from 'react'
import Search from "./Components/ShowSearch"
import FetchResults from "./Components/ResultsList"

import './App.css'

function App() {

const [tvShowSearch, setTvShowSearch] = useState("")

const shows = []

  function GetTvShows (event){
    event.preventDefault() 
    fetch(`https://api.tvmaze.com/search/shows?q=${tvShowSearch}`)
    .then(
        (response) => {
            return response.json()
            
        })
        .then((response) => {
          shows.push(response)
          
        })
  }
  
 

  return (
    <>
      
      <h1>TV Shows</h1>
      <Search GetTvShows = {GetTvShows} setTvShowSearch = {setTvShowSearch}/>
      <FetchResults tvShowSearch={tvShowSearch}/>
      <ul> 
   


        {shows.map((show) => {
            
           return (
        
          <h1>{show}</h1>
           )
        })}
       
      </ul>
    </>
  )
}

export default App
