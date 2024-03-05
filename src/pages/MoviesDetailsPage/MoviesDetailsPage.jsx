import { Loader } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  cpmst[(MoviesDetailsPage, setMovieDetails)] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [movieId]);

  if (!movieDetails) {
    return <loader />;
  }

  return (
    <>
      <link to={backLinkHref}>
        <Button text="⬅ Go back" />
      </link>
      <div className={CSS.movieDetailsContainer}>
        <img
          className={CSS.image}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : `https://fakeimg.pl/600x400?text=No+Image+Available`
          }
          alt={movieDetails.title}
        />
        <div className={css.movieDetailsWrap}>
          <h1>{movieDetails.title}</h1>
          <h4>User score: {Math.round(movieDetails.vote_average * 10)}%</h4>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
      </div>

      <hr />
      <h3>Additional information</h3>
      <link to="cast">
        <Button text="Cast" />
      </link>
      <link to="reviews">
        <Button text="Reviews" />
      </link>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
