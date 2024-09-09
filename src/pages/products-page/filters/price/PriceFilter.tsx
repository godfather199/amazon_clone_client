import {PriceRange} from "@/pages"




function PriceFilter() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 shadow shadow-gray-600  rounded-lg p-5 bg-gray-50">
      {/* Heading */}
      <div className="">
        <small className="text-sm font-medium leading-none">
          Filter products by price
        </small>
      </div>

      {/* Filter */}
      <PriceRange />
    </div>
  );
}

export default PriceFilter