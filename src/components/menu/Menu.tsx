import { menuItems } from "../../data/db";
import Item from "./Item";
import Title from "../shared/Title";
import { MenuItem } from "../../types";

type MenuType = {
    addItem: (item: MenuItem) => void
}

function Menu({addItem}: MenuType) {
    return (
    <div className="p-5 border rounded-lg border-slate-300">
            <Title value={'Menu'} />

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