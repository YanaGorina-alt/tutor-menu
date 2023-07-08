import styles from './LineTutor.module.css';

export default function LineTutor({ lineTutor, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineTutor}>
    <div className="flex-ctr-ctr"><img src={lineTutor.tutor.photo} alt="Avatar" width="50" height="50"/></div>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineTutor.tutor.name}</span>
      <span style={{ fontSize: '1vw' }}>{lineTutor.tutor.education}</span>
      <span>{lineTutor.tutor.price.toFixed(2)}</span>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineTutor.tutor._id, lineTutor.qty - 1)}
        >−</button>
      }
      <span>{lineTutor.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineTutor.tutor._id, lineTutor.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineTutor.extPrice.toFixed(2)}</div>
  </div>
);
}