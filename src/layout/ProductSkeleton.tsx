import { Skeleton } from "../components/ui/skeleton"


function ProductSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-300"  />

      <div className="space-y-2">
        <Skeleton className=" bg-gray-300 h-4 w-[250px]" />
        <Skeleton className=" bg-gray-300 h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default ProductSkeleton