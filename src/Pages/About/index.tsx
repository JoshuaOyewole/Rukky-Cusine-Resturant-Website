import { AboutImg } from "../../components/Assets";
import Review from "../../components/Review/index"

const About = () => {
  return (
    <div className='w-full' >
      <div className='bg-containerbg w-full text-center h-[10vh] lg:h-[18vh] flex items-center justify-center text-2xl lg:text-3xl font-bold'>
        <h2>About us</h2>
      </div>
      <div className="flex items-center flex-col justify-between py-8 lg:flex-row xl:px-40 xl:py-16">
        <div className="flex basis-2/5 h-[50vh] xl:h-[70vh] xl:justify-end">
          <img src={AboutImg} alt="About Rukky Cuisine" className="h-full w-[75%] lg:w-[90%] " />
        </div>
        <div className="basis-[55%]">
          <h2 className="mb-4 font-bold text-2xl mt-6 xl:text-4xl xl:mb-10 text-[#231E41]">We are doing more than <span className="block">you expect</span></h2>
          <p className="xl:pr-16 leading-8 text-[#6F6F87]">Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim dolorum, assumenda. Sapiente soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur neque vel itaque inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.</p>
          <p className="xl:pr-16 mt-5 leading-8 text-[#6F6F87]">
            Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea laborum.
          </p>
        </div>
      </div>
      <div className="flex flex-col py-16 gap-y-5 lg:gap-y-10 xl:px-40">
        <div className="flex flex-col items-center gap-y-5 justify-between lg:flex-row">
          <div className="flex justify-between basis-[32%]">
            <div className="no flex font-[Monoton] text-4xl basis-1/5 lg:text-5xl py-1">
              01
            </div>
            <div className="text basis-4/5">
              <h3 className="font-bold mb-6 text-xl text-[#231E41] lg:text-2xl">We are located in the city center</h3>
              <p className="leading-8 text-[#6F6F87]">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
            </div>
          </div>
          <div className="flex justify-between basis-[32%]">
            <div className="no flex font-[Monoton] text-4xl basis-1/5 lg:text-5xl py-1">
              02
            </div>
            <div className="text basis-4/5">
              <h3 className="font-bold mb-6 text-xl text-[#231E41] lg:text-2xl">Fresh ingredients from organic farms</h3>
              <p className="leading-8 text-[#6F6F87]">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
            </div>
          </div>
          <div className="flex justify-between basis-[32%]">
            <div className="no flex font-[Monoton] text-4xl basis-1/5 lg:text-5xl py-1">
              03
            </div>
            <div className="text basis-4/5">
              <h3 className="font-bold mb-6 text-xl text-[#231E41] lg:text-2xl">Own fast delivery. 30 min Maximum</h3>
              <p className="leading-8 text-[#6F6F87]">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-x-3 items-center gap-y-5 lg:gap-x-6 lg:flex-row  ">
          <div className="flex justify-between basis-[32%]">
            <div className="no flex font-[Monoton] text-4xl basis-1/5 lg:text-5xl py-1">
              04
            </div>
            <div className="text basis-4/5">
              <h3 className="font-bold mb-6 text-xl text-[#231E41] lg:text-2xl">Professional, experienced chefs</h3>
              <p className="leading-8 text-[#6F6F87]">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
            </div>
          </div>
          <div className="flex justify-between basis-[32%]">
            <div className="no flex font-[Monoton] text-4xl basis-1/5 lg:text-5xl py-1">
              05
            </div>
            <div className="text basis-4/5">
              <h3 className="font-bold mb-6 text-xl text-[#231E41] lg:text-2xl">The highest standards of service</h3>
              <p className="leading-8 text-[#6F6F87]">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
            </div>
          </div>
        </div>
      </div>
      <Review />
    </div>

  );
}

export default About;