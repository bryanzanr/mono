import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const userCollection = db.collection("USERS");

export const getUserById = async (id: string) => {
  const doc = await userCollection.doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

export const updateUser = async (id: string, data: Partial<User>) => {
  await userCollection.doc(id).update(data);
};
