import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react"
import { AspectRatio } from "../ui/aspectRatio"
import { home_Banner_Carousel } from "@/utils/home-banner.carousel"


 function SharedCarousel() {
  const autoplayRef = useRef(
    Autoplay({ delay: 5000 })
  )

  const handleMouseEnter = () => {
    autoplayRef.current.stop();
  };

  const handleMouseLeave = () => {
    autoplayRef.current.play();
  };
  

  return (
    <Carousel
      plugins={[autoplayRef.current]}
      className="w-[100%] h-[22rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // style={{ border: "3px solid purple" }}
    >
      <CarouselContent>
        {home_Banner_Carousel.map(({path}, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card
                // style={{ border: "3px solid green" }}
                className="w-[100%] h-[20rem] p-2 border-none"
              >
                <CardContent
                  // style={{ border: "3px solid orange" }}
                  className=""
                >
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src= {path}
                      alt=""
                      className=" object-cover flex items-center justify-center rounded-lg "
                      // style={{ border: "3px solid black" }}
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className=" left-[0.3rem]" />

      <CarouselNext className=" right-[0.3rem]" />
    </Carousel>
  );
}



export default SharedCarousel