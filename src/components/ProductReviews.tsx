import { IReview } from "../interfaces";

interface IProductReviewsProps {
  reviews: IReview[];
}

export function ProductReviews({ reviews }: IProductReviewsProps) {
  const getDate = (date: string) => {
    return new Date(date).toLocaleDateString("se-SE");
  };

  return (
    <section className="product-reviews flex-col">
      <h2 className="product-reviews__title">Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, i) => (
          <article className="product-review b-radius-4" key={i}>
            <div className="product-review__wrapper">
              <h4 className="product-review__name">{review.reviewerName}</h4>
              <p className="product-review__date">{getDate(reviews[i].date)}</p>
            </div>
            <p className="product-review__rating">Rating: {review.rating}</p>
            <p className="product-review__comment">{review.comment}</p>
          </article>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </section>
  );
}
