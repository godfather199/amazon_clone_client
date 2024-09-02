import {CartItem} from '../../'
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../components/ui/navigation-menu";
import { ScrollArea, ScrollBar } from '../../../components/ui/scroll-area';
import { Button } from '../../../components/ui/button';



function CartModal() {
  const navigate = useNavigate()

  const handle_Cart_Navigate = () => {
    navigate('/cart')
  }


  return (
    <NavigationMenu onClick={handle_Cart_Navigate}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cart</NavigationMenuTrigger>

          <NavigationMenuContent
            style={{ border: "3px solid red" }}
            className="flex flex-col min-w-[25rem]"
          >
            <ScrollArea className="h-72 min-w-[20rem] rounded-md border overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
              {Array(4)
                .fill("")
                .map((_, idx) => (
                  <CartItem key={idx} />
                ))}
            </ScrollArea>
            <Button
              variant="destructive"
              size= 'lg'
              className=" flex justify-end items-center"
            >
              Proceed to buy
            </Button>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default CartModal;
