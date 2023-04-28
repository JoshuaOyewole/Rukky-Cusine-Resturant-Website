import {FruitsSection, MenuSection, ShowcaseBanner} from "../../components";
import Reservation from "../../components/Reservation";


const Home = () => {
  return (
    <div className='flex w-full h-auto flex-col gap-y-4 items-center justify-center'>
      <ShowcaseBanner />
      <MenuSection />
      <FruitsSection />
      <Reservation />
     {/*  <Blog /> */}
    </div>

  )
}

export default Home