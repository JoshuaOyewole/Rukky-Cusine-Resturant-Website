import {FruitsSection, MenuSection, ShowcaseBanner, } from "../../components";
import ReserveTable from "../../components/ReserveTable/index"

const Home = () => {
  return (
    <div className='flex w-full h-auto flex-col gap-y-4 items-center justify-center'>
      <ShowcaseBanner />
      <MenuSection />
      <FruitsSection />
      <ReserveTable />
     {/*  <Blog /> */}
    </div>

  )
}

export default Home