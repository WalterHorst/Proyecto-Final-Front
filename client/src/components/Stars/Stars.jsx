import { useState } from "react";
import style from "./Stars.module.css"


const Stars = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
  return (
    <div>
        {[...Array(5)].map((star, index) => {
            const currentRating = index + 1
            return (
                <label>
                    <input
                    type="radio" 
                    name="rating" 
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    />
                    <i
                    className={`bi bi-star-fill ${style.star}`}
                    color={currentRating <= (hover ||  rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    ></i>
                </label>
            )
        })}
    </div>
  )
}

export default Stars;