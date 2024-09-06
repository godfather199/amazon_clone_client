import axios from "axios"
import Routes from "./routes/Routes"
import { useCheckCartStatus } from "./hooks/cart/useCheckCartStatus"
import { Toaster } from "react-hot-toast"


export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

axios.defaults.baseURL = API_BASE_URL
axios.defaults.withCredentials = true


function App() {
  const status = useCheckCartStatus()
  
  return (
    <>
      <Toaster />
      <Routes />
    </>
  )
}

export default App