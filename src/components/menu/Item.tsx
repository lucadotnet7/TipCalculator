import { MenuItem as MenuItemType } from "../../types";

type MenuItemProps = {
    item: MenuItemType,
    addItem: (item: MenuItemType) => void
}

function Item({item, addItem} : MenuItemProps) {
  return (
    <button
      className="rounded border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
      onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

export default Item;