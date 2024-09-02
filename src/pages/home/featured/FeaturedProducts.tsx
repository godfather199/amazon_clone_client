import {Products, Heading} from '@/components'
import { Button } from '@/components/ui/button';
import { useFeaturedProducts } from '@/hooks/product/useFeaturedProducts'
import { useNavigate } from 'react-router-dom';



function FeaturedProducts() {
  const navigate = useNavigate()

  const {isLoading, featured_Products} = useFeaturedProducts()


  const handle_Product_Category_Navigate = () => {
    navigate('/all-products')
  }


  return (
    <div className="flex flex-col gap-[2rem]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Heading title="Featured Products" />

        <Button
          size="lg"
          className=" text-gray-500 border border-red-400 h-[4rem] text-xl font-bold mr-[2rem] shadow-lg"
          onClick={handle_Product_Category_Navigate}
        >
          Browse Product by Category
        </Button>
      </div>

      {/* Products */}
      <Products isLoading={isLoading} products={featured_Products} />
    </div>
  );
}

export default FeaturedProducts