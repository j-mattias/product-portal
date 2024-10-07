interface IRatingProps {
  rating: number;
  numStars: number;
}

export function StarRating({ rating, numStars }: IRatingProps) {

  // Generate an array of numbers based on numStars
  const stars = Array.from({ length: numStars }, (_, i) => i + 1);

  // Calculate which type of star to show, depending on the stars number (pos) and
  // current rating
  const starRating = (r: number, star: number) => {
    if (r < star && r > star - 1) {
      return "fa-solid fa-star-half-stroke";
    } else if (r >= star) {
      return "fa-solid fa-star";
    } else {
      return "fa-regular fa-star";
    }
  };

  return (
    <div className="star-rating">
      <div className="star-rating__stars">
        {stars.map((star) => (
          <i className={starRating(rating, star)} key={star}></i>
        ))}
      </div>
      <p className="star-rating__text">{rating}</p>
    </div>
  );
}
