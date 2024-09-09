import {RatingStars} from '@/pages'


function RatingFilter() {
  return (
    <div className=" flex flex-col items-center justify-center gap-3 shadow shadow-gray-600  rounded-lg p-5 bg-gray-50">
      {/* Heading */}
      <div className="">
        <small className="text-sm font-medium leading-none">
          Filter products by rating
        </small>
      </div>

      {/* Filter */}
      <div className="flex flex-col gap-3 cursor-pointer ">
        {[4, 3, 2, 1].map((value) => (
          <RatingStars
            key={value}
            filledCount={value}
            emptyCount={1 + (4 - value)}
          />
        ))}
      </div>
    </div>
  );
}

export default RatingFilter


