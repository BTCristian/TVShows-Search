import { useState } from "react"


function Search (props){
    const {GetTvShows} = props
    const {setTvShowSearch} = props
    return (
        <>
        <form onSubmit = {GetTvShows}>
            <label htmlFor="tvShow">
                Search for your tv show:   
            </label>
            <input type="text" id="tvShow" onChange = {(event) => {

                setTvShowSearch(event.target.value)
            }}/>
            <button id="submitSearch" >Search</button>
        </form>
        </>
        
    )
}


export default Search