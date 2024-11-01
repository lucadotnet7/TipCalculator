import Consume from "./components/consume/Consume";
import Menu from "./components/menu/Menu";
import Header from "./components/shared/Header";
import { useOrder } from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, deleteItem, addItem, placeOrder } = useOrder();
  
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20 grid gap-4 md:grid-cols-2">
        <Menu 
          addItem={addItem} />

        <Consume
          order={order}
          deleteItem={deleteItem}
          setTip={setTip}
          tip={tip}
          placeOrder={placeOrder} />
      </main>
    </>
  )
}

export default App
