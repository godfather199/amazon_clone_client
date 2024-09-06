import { Heading } from "@/components";
import {CategoryFilter, RatingFilter, PriceFilter} from '../'
import {Products} from '@/components'
import { useState } from "react";
import { useCategoryProducts } from "@/hooks/product/useCategoryProducts";



function ProductsPage() {
  const [currentCategory, setCurrentCategory] = useState<string>("All");


  const { products, isLoading } = useCategoryProducts(currentCategory);
  console.log("Category products: ", products)


  const handle_Current_Category = (info: string) => {
    setCurrentCategory(info);
  };



  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <Heading title="Products" />

        <CategoryFilter
          currentCategory={currentCategory}
          handle_Current_Category={handle_Current_Category}
        />
      </div>

      <div className="flex gap-10">
        <div className="">
          <RatingFilter />

          <PriceFilter />
        </div>

        {/* Display Products */}
        <Products isLoading = {isLoading} products={products} /> 
      </div>
    </div>
  );
}

export default ProductsPage;
