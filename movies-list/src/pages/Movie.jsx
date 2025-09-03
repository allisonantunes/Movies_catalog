import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import MovieCard from "../components/MovieCard";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams(); // pegando o ID na URL
  const [movie, setMovie] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url); // acessando a API e colocando os dados na variavel res
    const data = await res.json(); // pegando os dados da res e transformando em json
    setMovie(data); // passando os dados para o setMovie
  };

  // const formatCurrency = (number) => {
  //   console.log(movie.revenue);
  //   return number.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });
  // };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL); // passando URL para getMovie
  }, []);

  return (
    <div className="movie-page">
      <MovieCard movie={movie} showLink={false} />
      {<p className="tagline">{movie.tagline}</p>}
      <div className="info">
        <h3>
          <BsWallet2 /> Orçamento:
        </h3>
        <p>$ {movie.budget}</p>
      </div>

      <div className="info">
        <h3>
          <BsGraphUp /> Receita:
        </h3>
        <p>$ {movie.revenue}</p>
      </div>

      <div className="info">
        <h3>
          <BsHourglassSplit /> Duração:
        </h3>
        <p>{movie.runtime}</p>
      </div>

      <div className="info">
        <h3>
          <BsFillFileEarmarkTextFill /> Descrição:
        </h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
