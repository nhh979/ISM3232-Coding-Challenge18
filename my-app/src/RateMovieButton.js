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
            <h2 className="header">Rating</h2>
            <div>
                {ratingList.map(star => (
                    <button className='ratingButton' key={star} onClick={() => handleRating(star)}>
                        {star} Star(s)
                    </button>
                 ))}
            </div>
            <div>{message && <p className='message'>{message}</p>}</div>
        </>
    )
}