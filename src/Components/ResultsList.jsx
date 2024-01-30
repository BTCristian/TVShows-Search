export default function FetchResults(props) {
  const { showName } = props;
  const { showGenre } = props;
  const { showSummary } = props;
  let { showImage } = props;
  let { showRating } = props;
  const { showUrl } = props;

  let handleSummary = showSummary;

  if (showRating.average === null) {
    showRating.average = 0;
  }
  if (showSummary === null) {
    handleSummary = "No Summary";
  } else {
    handleSummary = showSummary.replace(/<[^>]*>/g, "");
    handleSummary = handleSummary.replace(/&amp;/g, "&");
  }

  if (showImage === null) {
    showImage =
      "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
  }
  let genres = [];
  if (showGenre.length !== 0) {
    genres = showGenre.join(", ");
  } else {
    genres = [];
  }

  return (
    <>
      <div className="title">
        <a href={showUrl}>
          <h2>{showName}</h2>
        </a>
        <p>{showRating.average} &#11088;</p>
      </div>

      <div className="imgContainer">
        <a href={showUrl}>
          <img
            src={showImage.original || showImage}
            alt={`small preview for ${showName} show`}
          />
        </a>
      </div>

      <div className="general-information">
        <p className="genres">{genres}</p>
        <p>{handleSummary}</p>
      </div>
    </>
  );
}
