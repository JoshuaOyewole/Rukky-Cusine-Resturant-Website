import { FoodItem, cartItem, User } from "../../types";
import {
  AddToCart,
  deleteCartItem,
  deleteFood,
  emptyUserCart,
  fetchAllCartItems,
  getAllUsers,
  getUser,
  firebaseLogout,
  updateCartItem,
  updateUser,
} from "../Firebase";

import { MdShoppingBasket } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";

//addToCart
export const addToCart = async (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  user: User,
  fid: string,
  dispatch: any
) => {
  if (!user) {
    toast.error("Please login to add items to cart", {
      icon: <MdShoppingBasket className="text-2xl text-cartNumBg" />,
      toastId: "unauthorizedAddToCart",
    });
  } else {
    if (cartItems.some((item: cartItem) => item.fid === fid)) {
      toast.error("Item already in cart", {
        icon: <MdShoppingBasket className="text-2xl text-cartNumBg" />,
        toastId: "itemAlreadyInCart",
      });
    } else {
      const data: cartItem = {
        id: Date.now(),
        fid: fid,
        uid: user.uid,
        qty: 1,
      };
      dispatch({
        type: "SET_CARTITEMS",
        cartItems: [...cartItems, data],
      });
      calculateCartTotal(cartItems, foodItems, dispatch);
      await AddToCart(data);
    }
  }
};

//dispatchtUserCartItems
export const dispatchtUserCartItems = (
  uid: string,
  items: cartItem[],
  dispatch: any
) => {
  const cartItems = items.filter((item: cartItem) => item.uid === uid);
  dispatch({
    type: "SET_CARTITEMS",
    cartItems: cartItems,
  });

  return cartItems;
};

//fetchUserCartData
export const fetchUserCartData = async (user: User, dispatch: any) => {
  if (user) {
    await fetchAllCartItems()
      .then((data) => {
        const userCart = dispatchtUserCartItems(user.uid, data, dispatch);
        localStorage.setItem("cartItems", JSON.stringify(userCart));
      })
      .then(() => { })
      .catch((e) => {
        console.log(e);
      });
  } else {
    localStorage.setItem("cartItems", "undefined");
  }
};

//fetchFoodData
export const fetchFoodData = async (dispatch: any) => {
  
  try {
    const res = await axios.get("http://localhost:3100/api/meal");
    let shuffleData = shuffleItems(res.data);
    dispatch({
      type: "SET_FOOD_ITEMS",
      foodItems: shuffleData,
    });
  } catch (error) {
    throw error
  }
};

//getFoodyById
export const getFoodyById = (menu: FoodItem[], fid: string) => {
  return menu.find((item: FoodItem) => item._id === fid);
};

//  Update cart item State
export const updateCartItemState = async (
  cartItems: cartItem[],
  item: cartItem,
  dispatch: any
) => {
  const index = cartItems.findIndex(
    (cartItem: cartItem) => cartItem.id === item.id
  );
  if (index !== -1) {
    cartItems[index] = item;
  }
  dispatch({
    type: "SET_CARTITEMS",
    cartItems: cartItems,
  });
  await updateCartItem(item)
    .then(() => { })
    .catch((e) => {
      console.log(e);
    });
};

// Update Cart Item Quantity
export const updateCartItemQty = async (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  item: cartItem,
  dispatch: any,
  val: number
) => {
  const index = cartItems.findIndex(
    (cartItem: cartItem) => cartItem.id === item.id
  );
  if (index !== -1) {
    cartItems[index].qty += val;
    dispatch({
      type: "SET_CARTITEMS",
      cartItems: cartItems,
    });
    calculateCartTotal(cartItems, foodItems, dispatch);
    await updateCartItem(cartItems[index])
      .then(() => { })
      .catch((e) => {
        console.log(e);
      });
  }
};

//  Delete Cart Item
export const delCartItem = async (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  item: cartItem,
  dispatch: any
) => {
  const index = cartItems.findIndex(
    (cartItem: cartItem) => cartItem.id === item.id
  );
  if (index !== -1) {
    cartItems.splice(index, 1);
    dispatch({
      type: "SET_CARTITEMS",
      cartItems: cartItems,
    });
    calculateCartTotal(cartItems, foodItems, dispatch);
    await deleteCartItem(item).then(res => {})
  }
};

// Calculate Total Price Round to 2 decimal places
export const calculateCartTotal = (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  dispatch: any
) => {
  let total = 0;
  cartItems.forEach((item: cartItem) => {
    const foodItem = getFoodyById(foodItems, item.fid);
    total += item.qty * (foodItem?.price !== undefined ? foodItem?.price : 0);
  });
  dispatch({
    type: "SET_CART_TOTAL",
    cartTotal: total.toFixed(2),
  });
};

// Empty Cart
export const emptyCart = async (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  dispatch: any
) => {
  if (cartItems.length > 0) {
    dispatch({
      type: "SET_CARTITEMS",
      cartItems: [],
    });
    calculateCartTotal(cartItems, foodItems, dispatch);
    await emptyUserCart(cartItems)
      .then(() => { })
      .catch((e) => {
        console.log(e);
      });
  } else {
    toast.warn("Cart is already empty");
  }
};

// Hide Cart
export const hideCart = (dispatch: any) => {
  dispatch({
    type: "TOGGLE_CART",
    showCart: !true,
  });
};

// Hide Cart
export const hideContactform = (dispatch: any) => {
  dispatch({
    type: "TOGGLE_CONTACT_FORM",
    showContactForm: !true,
  });
};

//shuffleItems
export const shuffleItems = (items: cartItem[]) => {
  let currentIndex = items.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [items[currentIndex], items[randomIndex]] = [
      items[randomIndex],
      items[currentIndex],
    ];
  }

  return items;
};

//logout
export const logout = async (user: any, dispatch: any, navigate: any) => {
  if (user) {
    await firebaseLogout()
      .then(() => {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "SET_CARTITEMS",
          cartItems: [],
        });
        // turn off adminMode
        dispatch({
          type: "SET_ADMIN_MODE",
          adminMode: false,
        });

        localStorage.setItem("user", "undefined");
        localStorage.setItem("adminMode", "undefined");
        localStorage.removeItem("cartItems");
        navigate("/");
      })
      .catch((e: any) => {
        console.log(e);
      });
  } else {
    console.log("You are not logged in");
  }
};

// /ToggleAdminMode
export const ToggleAdminMode = (dispatch: any, state: boolean) => {
  dispatch({
    type: "SET_ADMIN_MODE",
    adminMode: state,
  });
  localStorage.setItem("adminMode", JSON.stringify(state));
};

/* CHECK IF A USER IS AN ADMIN */
export const isAdmin = (user: User) => {
  let isAdmin = user?.email === "rukkycuisine@gmail.com" || user?.email === "admin@test.com"
  return isAdmin
};

// get user
export const getUserData = async (user: User) => {
  return await getUser(user.uid);
};

// update currentUser
export const updateUserData = async (
  user: User,
  dispatch: any,
  alert: boolean
) => {
  await updateUser(user)
    .then(() => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    })
    .catch((e: any) => {
      console.log(e);
    })
    .then(() => {
      localStorage.setItem("user", JSON.stringify(user));
      alert && toast.success("User data updated successfully");
    });
};

//dispatchUsers
export const dispatchUsers = async (dispatch: any) => {
  await getAllUsers()
    .then((users: User) => {
      dispatch({
        type: "SET_USERS",
        users: users,
      });
    })
    .catch((e: any) => {});
}

// get all users
export const getAllUser = async () => {
  await getAllUsers().then((users: User) => {
    return users
  }).catch((e: any) => {})
}
// delete food
export const delFood = async (
  food: FoodItem,
  foodItems: FoodItem[],
  dispatch: any
) => {
  await deleteFood(food._id);
  // remove food from foodItems
  const foodIndex = foodItems.indexOf(food);
  if (foodIndex !== -1) {
    foodItems.splice(foodIndex, 1)
  }
  dispatch({
    type: "SET_FOOD_ITEMS",
    foodItems
  })
  toast.success("Food deleted successfully");
};

