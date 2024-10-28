import { menuItems } from "../../data/db"
import Item from "./Item"
import { useOrder } from "../../hooks/useOrder";

function Menu() {
    const { addItem } = useOrder();

    return (
    <div className="p-5">
            <h2 className="text-4xl font-black">Menú</h2>
            <div className="space-y-3 mt-10">
            {
                menuItems.map(item => (
                <Item
                key={item.id} 
                item={item}
                addItem={addItem} />
                ))
            }
        </div>
    </div>
    )
}

export default Menu;