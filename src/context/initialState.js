import { fetchSessionUser, fetchSessionUserMode } from "../utils/fetchSessionData";

const sessionUser = fetchSessionUser();
const sessionUserMode = fetchSessionUserMode();

export const initialState = {
    user: sessionUser,
    foodItems: [],
    showCart: false,
    showContactForm: false,
    cartItems: [],
    cartTotal: 0,
    adminMode: sessionUserMode,
    users: [],
    paymentMethod: 'mobile_money',
    checkoutData: {},
}
