
import { BikeDelivery } from "../Assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Left = () => {
  const navigate = useNavigate();

  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
      <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
        <p className="text-base text-[#941b0c] font-bold">Home Delivery</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={BikeDelivery}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-[1.9rem] text-center sm:text-left lg:text-[3rem] 2xl:text-[4rem] font-bold tracking-wide text-headingColor xl:leading-[1.15]">
        The Perfect Space to Enjoy
        <span className="text-[#bc3908] text-[1.9rem]lg:text-[3.4rem] 2xl:text-[4.6rem]"> Fantastic Food</span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Ready for a delicious journey? Visit our eatery today and indulge in the ultimate culinary experience! Book your table now and taste the difference!
      </p>
      <div className="flex justify-between md:justify-start w-full">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-[#941b0c] w-50%] text-white   md:w-auto px-4 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:mr-8"
          onClick={() => navigate('/#reserveTable')}
        > 
          Reserve a Table
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-br w-[45%] text-white from-[#f6aa1c] to-[#941b0c]  md:w-auto px-4 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          onClick={()=>navigate('/menu')}
        >
          See our Menus
        </motion.button>
      </div>

    </div>
  );
};

export default Left;
