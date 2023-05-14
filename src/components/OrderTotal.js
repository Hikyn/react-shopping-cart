import { useEffect, useState } from 'react';
import '../styling/OrderTotal.css'

const OrderTotal = ({ plantsInCart }) => {
    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);

    function calculateTotal() {
        let sum = 0;
        let count = 0;
        for (const [key, value] of Object.entries(plantsInCart)) {
            count += value['count'];
            sum += value['count'] * value['price']
        }
        setTotal(sum);
        setItemCount(count);
    }

    useEffect(() => {
        calculateTotal()
        //console.log(`Total: ${total}`)
    }, [total, plantsInCart]);

    return (
        <div role='footer' className="OrderTotal">
            Total({itemCount} items): {total}$
            <button>Checkout</button>
        </div>
        
    )
}

export default OrderTotal;