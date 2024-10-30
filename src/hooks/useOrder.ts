import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState<number>(0);

    function addItem(item: MenuItem) {
        const itemExists = order.find(oi => oi.id === item.id);
        
        if(itemExists) {
            const updatedOrder = order.map(
                                    oi => oi.id === item.id 
                                    ? { ...oi, quantity: oi.quantity+1 } 
                                    : oi);
            setOrder(updatedOrder);
        } else {
            const orderItem: OrderItem = { ...item, quantity: 1 };
            setOrder([...order, orderItem]);
        }
    }

    function deleteItem(id: number) {
        setOrder(order.filter(oi => oi.id !== id));
    }

    function placeOrder() {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip,
        setTip,
        deleteItem,
        addItem,
        placeOrder
    };
}