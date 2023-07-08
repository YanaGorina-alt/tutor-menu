import OrderListTutor from '../OrderListTutor/OrderListTutor';
import styles from './OrderList.module.css';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
const orderTutors = orders.map(o =>
  <OrderListTutor
    order={o}
    isSelected={o === activeOrder}
    handleSelectOrder={handleSelectOrder}
    key={o._id}
  />
);

return (
  <main className={styles.OrderList}>
    {orderTutors.length ?
      orderTutors
      :
      <span className={styles.noOrders}>No Previous Orders</span>
    }
  </main>
);
}