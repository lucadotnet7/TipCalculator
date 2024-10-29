import { formatCurrency } from "../../helpers";
import { OrderItem } from "../../types";
import OrderTotals from "../order/OrderTotals";
import Title from "../shared/Title";
import TipPercentageForm from "../tip/TipPercentageForm";

type ConsumeProps = {
    order: OrderItem[],
    deleteItem: (id: number) => void
}

export default function Consume({order, deleteItem}: ConsumeProps) {
    return (
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <Title value={'Consumo'} />

            <div className="space-y-3 mt-10">
                {
                    order.length === 0
                    ?
                        <p className="text-center">No tiene consumos.</p> 
                    : (
                        order.map(oi => (
                            <div key={oi.id} className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b">
                                <div>
                                    <p className="text-lg">
                                        {oi.name} - {formatCurrency(oi.price)}
                                    </p>
                                    <p className="font-black">
                                        Cantidad: {oi.quantity} - {formatCurrency(oi.price * oi.quantity)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => deleteItem(oi.id)}
                                    className="bg-red-600 h-8 w-8 rounded-full text-white hover:bg-red-500">
                                    X
                                </button>
                            </div>
                        ))
                    )
                }
            </div>

            <TipPercentageForm />

            <OrderTotals 
                order={order}/>
        </div>
    );
}
