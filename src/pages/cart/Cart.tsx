import {CartItem} from '@/pages' 
import { useFetchUserCart } from "@/hooks/cart/useFetchUserCart"
import { Button } from '@/components/ui/button';



function Cart() {
  const {user_Cart, isLoading} = useFetchUserCart()
  console.log("User cart: ", user_Cart)


  return (
    <div className="flex">
      {/* Cart Items */}
      <CartItem isLoading={isLoading} products={user_Cart} />
      
      {/* Checkout button */}
      <Button>Proceed to buy</Button>
    </div>
  );
}

export default Cart



