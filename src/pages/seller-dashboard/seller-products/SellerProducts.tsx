import {Heading, Products} from '../../../components'
import {BreadCrumbPath, AddNewProduct} from '../../'
import { sellerProductBreadrumb } from '../../../utils/breadcrumbList';
import { useFetchSellerProducts } from '@/hooks/product/useFetchSellerProducts';



function SellerProducts() {
  const {isLoading, seller_Products} = useFetchSellerProducts()

  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <Heading title="My Products" />

      {/* Breadcrumbs */}
      <BreadCrumbPath
        previousPage={sellerProductBreadrumb.previousPage}
        currentPage={sellerProductBreadrumb.currentPage}
      />

      {/* Add Product button */}
      <AddNewProduct />

      {/* Display Products */}
      <Products isLoading = {isLoading} products={seller_Products} />
    </div>
  );
}

export default SellerProducts;
