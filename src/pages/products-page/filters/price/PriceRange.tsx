import { price_Ranges } from "@/utils/filterPriceRanges";


function PriceRange() {
  return (
    <div
      // style={{ border: "3px solid green" }}
      className="flex flex-col gap-4 w-full "
    >
      {price_Ranges.map((item, idx) => (
        <div
          key={idx}
          // style={{ border: "3px solid red" }}
          className="flex items-center justify-start transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
        >
          {idx === 0 && <SmallText info={`Under  ₹${item.upper}`} />}

          {idx > 0 && idx < 4 && (
            <SmallText info={`₹${item.lower} - ₹${item.upper}`} />
          )}

          {idx === 4 && <SmallText info={`Over ₹${item.lower}`} />}
        </div>
      ))}
    </div>
  );
}

export default PriceRange



const SmallText = ({info}:{ info:string}) => {
  return (
    <small className="text-sm font-medium leading-none text-gray-700">
      {info}
    </small>
  );
}