import { Testifier1, Testifier2 } from "../../components/Assets";

const index = () => {
    return (
        <div className='bg-containerbg py-16 px-4 w-full xl:px-40 xl:py-28'>
            <h2 className="capitalize text-center pb-16 text-3xl font-bold xl:text-5xl xl:pb-24">Reviews about us</h2>
            <div className="flex flex-col gap-y-16 justify-between items-center lg:flex-row">
                <div className="review basis-2/5">
                    <h3 className="font-bold hidden mb-6 text-center lg:block lg:text-left">
                        Very Tasty
                    </h3>
                    <p className="leading-6 text-[#6F6F87] text-center lg:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!
                    </p>
                    <div className="testifier mt-1 lg:mt-4">
                        <div className="rounded flex justify-center items-center lg:justify-start">
                            <img src={Testifier2} alt="Paul Trueman" className="h-14 w-14 rounded-[50%]" />
                            <p className="ml-4">Paul Trueman</p>
                        </div>
                    </div>
                </div>
                <div className="review basis-2/5 ">
                    <h3 className="font-bold hidden mb-6 text-center lg:block lg:text-left">
                        Very Tasty
                    </h3>
                    <p className="leading-6 text-[#6F6F87] text-center lg:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!
                    </p>
                    <div className="testifier mt-2 lg:mt-4">
                        <div className="rounded flex justify-center items-center lg:justify-start">
                            <img src={Testifier1} alt="Emma Newman" className="h-14 w-14 rounded-[50%]" />
                            <p className="ml-4">Emma Newman</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index