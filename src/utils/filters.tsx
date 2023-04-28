import { FoodItem } from "../../types"
import { useStateValue } from "../context/StateProvider"

export const FilterFood = (category:string) => {
    const [{foodItems}, dispatch] = useStateValue()
    return foodItems?.filter((item:FoodItem) =>{
        let x = item.category !== undefined ? item.category.toLowerCase() : "".toLowerCase();
        let y = category.toLowerCase() !== undefined ?category.toLowerCase() : " ".toLowerCase();
      return  x === y;
    }) 
}

export const GetFoodById = (id:string) => {
    const [{foodItems}, dispatch] = useStateValue()
    return foodItems?.find((item:FoodItem) => item._id === id)
}