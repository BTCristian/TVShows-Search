

export default function FetchResults (props) {
    
    const {showName} = props
    const {showGenres} = props
    const {showSummary} = props
    let {showImage} = props
    let {showRating} = props
    const {showUrl} = props
      
    let handleSummary = showSummary
    

    if (showRating.average === null){
        showRating.average = 0
    }
    

    if(showSummary === null) {
        handleSummary = "No Summary Yet"
    }else{
        handleSummary = showSummary.split("").slice(3, -4).join("")
    }


    if (showImage === null){
        showImage = "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
    }
   return (
    <>
        <div  >
            
           <a href={showUrl}>
           <img  src={showImage.medium || showImage } alt={`small preview for ${showName} show`} />
           </a>
            
        </div>
        <div>
            <a href={showUrl}>
                <h2>{showName}</h2>
            </a>
        
        <h3>{showGenres}</h3>
        <h4>{handleSummary}</h4>
        <h4>{showRating.average} &#11088;</h4>
        </div>
        
    </>

   )

}