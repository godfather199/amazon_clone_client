import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import {ShoppingBag, Logs} from 'lucide-react'


function SellerNavigationButtons() {
  const navigate = useNavigate()

  const handle_Navigate_Products = () => {
    navigate('/seller-products')
  }

  const handle_Navigate_Orders = () => {
    navigate('/seller-orders')
  }


  return (
    <div className="flex items-center gap-4">
      <Button
        variant="destructive"
        size="lg"
        className=" bg-yellow-400 flex items-center gap-2"
        onClick={handle_Navigate_Products}
        >
        <ShoppingBag /> My Products
      </Button>

      <Button
        variant="destructive"
        size="lg"
        className=" bg-blue-400 flex items-center gap-2"
        onClick={handle_Navigate_Orders}
      >
        <Logs /> My Orders
      </Button>
    </div>
  );
}

export default SellerNavigationButtons;
