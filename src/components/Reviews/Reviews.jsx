import { fetchMovieReviews } from 'api/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      const getReviews = async () => {
        const reviews = await fetchMovieReviews(id);
        setReviews(reviews);
      };
      getReviews();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{`Author: ${author}`}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
