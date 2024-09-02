import {SharedCarousel} from '../../components'
import {FeaturedProducts} from '../'


function Home() {

  return (
    <div style={{border: '3px solid red'}} className=" ml-[2rem]">
      {/* Carousel */}
      <SharedCarousel />

      {/* Featured Products */}
      <FeaturedProducts />
    </div>
  )
}

export default Home