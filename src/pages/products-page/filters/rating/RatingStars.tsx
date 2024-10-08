import { StarIconEmpty, StarIconFilled } from "@/utils/customIcon";

type RatingStarsType = {
  filledCount: number;
  emptyCount: number;
};

function RatingStars({ filledCount, emptyCount }: RatingStarsType) {
  return (
    <div className="flex items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Filled stars */}
      {Array(filledCount)
        .fill("")
        .map((_, idx) => (
          <StarIconFilled key={idx} />
        ))}

      {/* Empty stars */}
      {Array(emptyCount)
        .fill("")
        .map((_, idx) => (
          <StarIconEmpty key={idx} />
        ))}

      <p className="text-sm text-gray-900 ml-2">& Up</p>
    </div>
  );
}

export default RatingStars;

