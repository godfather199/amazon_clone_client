import { Avatar, AvatarImage } from "../../../components/ui/avatar";
import {TruncatedText, UpdateQuantityButton} from '../..'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import {Trash, Heart} from 'lucide-react'
import { Button } from "../../../components/ui/button";




function CartItem() {

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facere iste, suscipit aliquid veniam ullam obcaecati exercitationem eveniet pariatur aliquam aut quod aperiam nemo debitis repellat. Voluptates repellat voluptatem minima.Quo in exercitationem id quidem sit deserunt illo aut autem nostrum suscipit asperiores incidunt omnis tenetur sed reprehenderit nobis commodi facilis facere est consectetur consequatur, porro voluptatum corrupti tempore! Deleniti.";


  return (
    <Card
      style={{ border: "5px solid orange" }}
      className="flex items-center gap-5 w-[40rem]"
    >
      <CardHeader style={{ border: "3px solid red" }} className="flex">
        <Avatar className="w-[5rem] h-[5rem]">
          <AvatarImage src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Avatar>
      </CardHeader>

      <CardContent>
        <TruncatedText text={text} wordLimit={6} type = "p" />
      </CardContent>

      <CardContent>
        <UpdateQuantityButton />
      </CardContent>

      <CardFooter className="flex flex-col">
        <Button>
          <Trash className="mr-2 h-4 w-4" /> Delete
        </Button>

        <Button>
          <Heart className="mr-2 h-4 w-4" /> Whishlist
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CartItem;
