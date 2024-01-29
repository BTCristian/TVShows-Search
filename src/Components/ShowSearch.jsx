import { useState } from "react"


function Search (props){
    const {GetTvShows} = props
    const {setTvShowSearch} = props
    return (
        <>
        <form  >
            <label htmlFor="tvShow">
                Search for your tv show:   
            </label>
            <input type="text" id="tvShow" onChange = {(event) => {

                setTvShowSearch(event.target.value)
            }}/>
           
        </form>
        </>
        
    )
}


export default Search