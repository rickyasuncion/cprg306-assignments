import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, data: doc.data() });
  });
  return items;
};

export const addItems = async (userId, item) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), {
    item,
  });
  console.log("Item is created with ID: ", docRef.id);
  return docRef.id;
};