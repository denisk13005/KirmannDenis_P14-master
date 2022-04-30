import { getDocs, addDoc } from "firebase/firestore"
import { employeesCollectionRef } from "./firebase.config"

/**
 *
 * @returns saved employees in firebase data base
 */
export const getDbInfos = async () => {
  const data = await getDocs(employeesCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export const createUser = async (employee) => {
  console.log(typeof birth)
  await addDoc(employeesCollectionRef, employee)
}
