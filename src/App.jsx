import { useState } from 'react'

import './App.css'
import {AuthContextProvider} from "./index";
import {MyRoutes} from "./routers/routes"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContextProvider>
        <MyRoutes></MyRoutes>
      </AuthContextProvider>
    </>

  )
}

export default App
