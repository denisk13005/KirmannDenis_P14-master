import { getDocs, addDoc } from "firebase/firestore"
import { employeesCollectionRef } from "./firebase.config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase.config"

/**
 * It gets all the documents from the employees collection and returns an array of objects with the
 * document data and the document id
 * @returns An array of objects.
 */
export const getEmployees = async () => {
  const data = await getDocs(employeesCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

/**
 * It takes an object as an argument, and then it adds that object to a collection in Firestore.
 * @param employee - {
 */
export const createEmployee = async (employee) => {
  await addDoc(employeesCollectionRef, employee)
}

const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)

export const signInAuth = async (email, password) => {
  try {
    const resp = await signIn(email, password)
    return resp.user
  } catch (error) {
    return error.code
  }
}
