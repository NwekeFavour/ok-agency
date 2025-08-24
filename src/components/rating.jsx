import React from "react";
import { useRatingStore } from "../store/ratingStore";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Rating() {
  const { rating, setRating } = useRatingStore();

  return (
    <div className="flex gap-1 justify-start">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          className="focus:outline-none"
        >
          {rating >= star ? (
            <StarIcon className="text-yellow-400" fontSize="large" />
          ) : (
            <StarBorderIcon className="text-gray-400" fontSize="large" />
          )}
        </button>
      ))}
    </div>
  );
}
