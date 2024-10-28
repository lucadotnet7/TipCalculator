import { useState } from "react"
import { menuItems } from "./data/db"
import Header from "./components/shared/Header"

function App() {

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menú</h2>

        </div>

        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
