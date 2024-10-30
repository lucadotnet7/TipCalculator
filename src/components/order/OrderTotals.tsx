import { useMemo } from "react";
import { formatCurrency } from "../../helpers";
import { OrderItem } from "../../types";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {
    
    const subtotalAmount = useMemo(() => order.reduce(
                                    (total, item) => total + (item.quantity * item.price), 0), 
                                    [order]);
    
    const tipAmount = useMemo(() => 
                        calculateTipAmount(subtotalAmount, tip), 
                        [tip, order]);

    const total = useMemo(() => 
                    calculateTotal(subtotalAmount, tipAmount), 
                    [subtotalAmount, tipAmount]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propina: </h2>
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subtotalAmount) }</span>
                </p>

                <p>
                    Propina: {''}
                    <span className="font-bold">{ formatCurrency(tipAmount) }</span>
                </p>

                <p>
                    Total a Pagar: {''}
                    <span className="font-bold">{ formatCurrency(total) }</span>
                </p>
            </div>
            <button 
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={total === 0}
                onClick={placeOrder}>
                Guardar Orden
            </button>
        </>
    )
}

function calculateTipAmount(subtotal: number, tip: number) {
    return subtotal * tip;
}

function calculateTotal(subtotal: number, tipAmount: number) {
    return subtotal + tipAmount;
}