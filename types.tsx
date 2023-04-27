export type foodItemStatic = {
  _id: number;
  title: string;
  desc: string;
  price: number;
  imgSrc: string;
}
export type foodItemsStatic = {
  items: foodItemStatic[];
}
export type FoodItem = {
    _id: string;
    title: string;
    description?: string;
    price: number;
    imageURL: string;
    calories: string;
    qty: number;
    category: string;
};

export type FoodItems = {
  items: FoodItem[];
}

export type FoodCategory = {
  _id: number;
  name: string;
  urlParam: string;
  icon?: JSX.Element
}

export type cartItem = {
  _id?:string,
  id:number,
  fid: string;
  uid: string;
  qty: number;
}

export type cartItems = {
  items: cartItem[]
}

export type User = {
  uid: string;
  email?: string;
  displayName?:string;
  phoneNumber?: string;
  providerId: string;
  photoURL?: string;

}
export type FoodCategories = FoodCategory[];