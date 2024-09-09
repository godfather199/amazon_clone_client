import { Button } from '@/components/ui/button'
import {Trash} from 'lucide-react'



function DeleteButton() {
  return (
    <div className="">
      <Button>
        <Trash /> Add To Whishlist
      </Button>
    </div>
  );
}

export default DeleteButton