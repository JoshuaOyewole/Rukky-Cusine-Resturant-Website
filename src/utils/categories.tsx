import { GiFruitTree, GiChickenOven, GiBeerBottle, GiBowlOfRice } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import {FaFish} from "react-icons/fa";

export const Categories = [
    {
        _id: 1,
        name: "Chicken",
        urlParam: 'chicken',
        icon: <GiChickenOven />,
    },
    {
        _id: 2,
        name: "Fruits",
        urlParam: 'fruits',
        icon: <GiFruitTree />,
    },
    {
        _id: 3,
        name: "Soft Drinks",
        urlParam: 'drinks',
        icon: <GiBeerBottle />,
    },
    {
        _id: 4,
        name: "Desserts",
        urlParam: 'desserts',

    },
    {
        _id: 5,
        name: "Icecreams",
        urlParam: 'icecreams',
        icon: <MdOutlineIcecream />,
    },
    {
        _id: 6,
        name: "Fish",
        urlParam: 'fish',
        icon: <FaFish />,
    },
    {
        _id: 7,
        name: "Rice",
        urlParam: 'rice',
        icon: <GiBowlOfRice />,
    },
    {
        _id: 8,
        name: "Curry",
        urlParam: 'curry',

    }
]