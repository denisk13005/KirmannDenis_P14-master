import Router from "./router/Router"
import axios from "axios"
function App() {
  async function getUser() {
    try {
      const response = await axios.get(
        "https://console.firebase.google.com/u/0/project/wealth-health-dk/database/wealth-health-dk-default-rtdb/data/~2F"
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  getUser()
  return (
    <section className="app">
      <Router />
    </section>
  )
}

export default App
