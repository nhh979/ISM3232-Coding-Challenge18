import {useState} from 'react'
import RateMovieButton from './RateMovieButton'

let movieList = ['Deadpool 3', 'Dune 2', 'Silence of the Lamp', 'Titanic', 'Avengers: Endgame']

export default function MovieSelector() {
    const [movie, setMovie] = useState(movieList[0]);

    return (
        <>
            <h2 className="header">Movie</h2>
            <select onChange={(e) => {setMovie(e.target.value)}} value={movie}>
                {movieList.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}            
            </select>
            <RateMovieButton movie={movie}/>
        </>
    )
}