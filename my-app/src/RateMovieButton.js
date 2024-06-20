import { useState } from "react";

let ratingList = [1, 2, 3, 4, 5]
let ratingTextList = ['one', 'two', 'three', 'four', 'five']

export default function RateMovieButton({movie}) {
    const [rating, setRating] = useState(null);
    const [message, setMessage] = useState('');

    const handleRating = (rate) => {
        setRating(rate);
        setMessage(`Successfully submitted. You rated ${movie} ${ratingTextList[rate-1]} star(s).`);
      };

    return (
        <>
            <div>
                {ratingList.map(star => (
                    <button key={star} onClick={() => handleRating(star)}>
                        {star} Star(s)
                    </button>
                 ))}
            </div>
            <div>{message && <p>{message}</p>}</div>
        </>
    )
}