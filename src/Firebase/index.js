import { app, firestore, storage } from "../firebase.config";
import {
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, signInWithPopup } from "firebase/auth";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { MdOutlineCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";
import { shuffleItems } from "../utils/functions";
import axios from "axios";

export const firebaseUploadImage = (
  imageFile,
  promise,
  progressHandler,
  action,
  to
) => {
  promise(true);
  // progressHandler(0)
  toast.info(`Upload started.....`, {
    icon: <MdOutlineCloudUpload className="text-blue-600" />,
  });
  const storageRef = ref(
    storage,
    `Images/${to}/${Date.now()}-${imageFile.name}`
  );
  const uploadPhoto = uploadBytesResumable(storageRef, imageFile);
  uploadPhoto.on(
    "state_changed",
    (snapshot) => {
      progressHandler(
        `Upload status: ${Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )}%`
      );
    },
    (error) => {
      console.log(error);
      toast.error("Error while uploading, Try again🤗");
      action(null);
      setTimeout(() => {
        promise(false);
      }, 3000);
    },
    () => {
      getDownloadURL(uploadPhoto.snapshot.ref).then((downloadUrl) => {
        action(downloadUrl);
        promise(false);
        toast.success("Photo Uploaded Successfully😊");
      });
    }
  );
};

export const firebaseRemoveUploadedImage = (
  ImageFile,
  imageHandler,
  promise
) => {
  const dummy =
    "https://firebasestorage.googleapis.com/v0/b/eatman-20953.appspot.com/o/Images";
  promise(true);
  toast.info(`Removing Image.....`, {
    icon: <MdOutlineCloudUpload className="text-blue-600" />,
    autoClose: 1500,
    toastId: "remove-image",
  });
  if (ImageFile.includes(dummy)) {
    const deleteRef = ref(storage, ImageFile);
    deleteObject(deleteRef).then(() => {
      imageHandler(null);
      promise(false);
      toast.success("Photo removed Successfully😊", {
        autoClose: 2000,
        toastId: "remove-image",
      });
    });
  } else {
    imageHandler(null);
    promise(false);
    toast.success("Photo removed Successfully😊", {
      autoClose: 2000,
      toastId: "remove-image",
    });
  }
};
export const silentRemoveUploadedImage = (ImageFile) => {
  const deleteRef = ref(storage, ImageFile);
  deleteObject(deleteRef).then(() => {});
};


//Save Product to Database
export const saveProduct = async (data) => {
  await axios.post(`http://localhost:3100/api/meal`,data);
};

// Authenticate user using PROVIDER
export const AUTHPROVIDER = async (provider) => {
  const firebaseAuth = getAuth(app);
  const {
    user: { refreshToken, providerData },
  } = await signInWithPopup(firebaseAuth, provider);
  // add provider data to user
  await addUser(providerData[0]);
  let userData = await getUser(providerData[0].uid);
  return { refreshToken, userData };
};

// Signup with email and password
export const EMAILSIGNUP = async (email, password) => {
  const res = await axios.post("http://localhost:3100/register/user", {
    email,
    password,
  });
  return res;
};

//  Signin with email and password
export const EMAILSIGNIN = async (email, password) => {
  const res = await axios.post("http://localhost:3100/login/user", {
    email,
    password,
  });
  const { uid } = res.data.details;
  return await getUser(uid);
};

// Fetch All Food Products from Database
/* export const fetchFoodItems = async () => {
  const res = await axios.get("http://localhost:3100/api/meal");

  return shuffleItems(res.data);
}; */

//  Add Cart Item to Database
export const AddToCart = async (data) => {
  await axios.post("http://localhost:3100/api/cart",data);
};

// Fetch All Cart Items  from Database
export const fetchAllCartItems = async () => {
  const items = await axios.get("http://localhost:3100/api/cart");

  return shuffleItems(items.data);
};

// Update Cart Items in the Database
export const updateCartItem = async (data) => {
  const res = await axios.patch(`http://localhost:3100/api/cart/${data._id}`,data);
  return res;
};

//  Delete Cart Item from Database
export const deleteCartItem = async (item) => {
 const res = await axios.delete(`http://localhost:3100/api/cart/${item._id}`);
 return res;
};

//  Delete Cart from Firestore
export const firebaseEmptyCart = async () => {
  await deleteDoc(doc(firestore, "CartItems"));
};

//  Empty user cart from firestore
export const emptyUserCart = async (cartItems) => {
  cartItems.forEach((item) => {
    deleteCartItem(item);
  });
};

// Logout user
export const firebaseLogout = async () => {
  await getAuth(app).signOut();
};

// ADMIN USER MANAGEMENT

// firestore add to users collection
export const addUser = async (data) => {
  const { uid } = data;
  // check if user already exists
  const user = await getUser(uid);
  if (user.length === 0) {
   const res = await axios.post(`http://localhost:3100/api/users`,data);
   return res;
  }
};

// get user
export const getUser = async (uid) => {
  const res = await axios.get(`http://localhost:3100/api/users/${uid}`);
  return res.data;
};

// update user
export const updateUser = async (data) => {
  const res = await axios.patch(
    `http://localhost:3100/api/users/${data.uid}`,
    data
  );
  return res;
};

// et all users
export const getAllUsers = async () => {
  const res = await axios.get(`http://localhost:3100/api/users/`);
  return res.data;
};

// delete food
export const deleteFood = async (id) => {
  const res = await axios.delete(`http://localhost:3100/api/meal/${id}`);
  return res.data;
};
