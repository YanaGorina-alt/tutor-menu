import styles from './OrderDetail.module.css';
import LineTutor from '../LineTutor/LineTutor';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineTutors = order.lineTutors.map(tutor =>
      <LineTutor
        lineTutor={tutor}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={tutor._id}
      />
    );

    return (
      <div className={styles.OrderDetail}>
        <div className={styles.sectionHeading}>
          {order.isPaid ?
            <span>ORDER <span className="smaller">{order.orderId}</span></span>
            :
            <span>NEW ORDER</span>
          }
          <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
        </div>
        <div className={`${styles.lineTutorContainer} flex-ctr-ctr flex-col scroll-y`}>
          {lineTutors.length ?
            <>
              {lineTutors}
              <section className={styles.total}>
                {order.isPaid ?
                  <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                  :
                  <button
                    className="btn-sm"
                    onClick={handleCheckout}
                    disabled={!lineTutors.length}
                  >CHECKOUT</button>
                }
                <span>{order.totalQty}</span>
                <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
              </section>
            </>
            :
            <div className={styles.hungryForKnowledge}>Do you need a tutor?</div>
          }
        </div>
      </div>
    );
  }