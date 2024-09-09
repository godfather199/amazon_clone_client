import { Button } from "@/components/ui/button"
import {ClipboardList} from 'lucide-react'


function WhishlistButton() {
  return (
    <div className="">
      <Button>
        <ClipboardList /> Add To Whishlist
      </Button>
    </div>
  );
}

export default WhishlistButton