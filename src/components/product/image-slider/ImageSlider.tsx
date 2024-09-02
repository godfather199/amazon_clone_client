import { Card, CardContent } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";


type ImageType = {
  media: {
    public_id: string,
    url: string
  }[]
}


function ImageSlider({media}: ImageType) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent className="">
        {media?.map(({url}, index) => (
          <CarouselItem  key={index}>
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="  flex aspect-square items-center justify-center p-6">
                  <img
                    // style={{border: '3px solid green'}}
                    src= {url}
                    alt=""
                    className="w-[15rem] h-[15rem] object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className=" left-[0.4rem]" />

      <CarouselNext className=" right-[0.4rem]" />
    </Carousel>
  );
}

export default ImageSlider;
