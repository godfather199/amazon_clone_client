import {ProductInfo, SellerNavigationButtons} from '../'
import {Heading} from '../../components'


function SellerDashboard() {
  return (
    <div className="">
      <Heading title="Seller Dashboard" />

      <div className="">
        {/* Seller products & orders */}
        <SellerNavigationButtons />
        
        {/* Product Info */}
        <ProductInfo />
      </div>
    </div>
  );
}

export default SellerDashboard