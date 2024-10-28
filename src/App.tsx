import Menu from "./components/menu/menu"
import Header from "./components/shared/Header"

function App() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <Menu />

        <div>
          <h2 className="text-4xl font-black">Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
