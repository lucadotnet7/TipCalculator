import { useState } from "react";
import type { OrderItem } from "../types";

export function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);

    function addItem() {
        console.log("Adding item...");
    }

    return {
        addItem
    };
}