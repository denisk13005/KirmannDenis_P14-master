import { getDocs, addDoc } from "firebase/firestore"
import { employeesCollectionRef } from "./firebase.config"

/**
 * It gets all the documents from the employees collection and returns an array of objects with the
 * document data and the document id
 * @returns An array of objects.
 */
export const getDbInfos = async () => {
  const data = await getDocs(employeesCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

/**
 * It takes an object as an argument, and then it adds that object to a collection in Firestore.
 * @param employee - {
 */
export const createUser = async (employee) => {
  console.log(typeof birth)
  await addDoc(employeesCollectionRef, employee)
}
