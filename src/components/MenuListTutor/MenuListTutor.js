import styles from './MenuListTutor.module.css';

export default function MenuListTutor({ menuTutor, handleAddToOrder }) {
  return (
    <div className={styles.MenuListTutor}>
      <div className={styles.avatar + ' ' + 'flex-ctr-ctr'}><img src={menuTutor.photo} alt="Avatar" width="100" height="100"/></div>
      <div className={styles.name}>
        {menuTutor.name}
        <br />
        <span style={{ fontSize: '1.1vw' }}>{menuTutor.education}</span>
      </div>
      <div className={styles.buy}>
        <span style={{ fontSize: '1vw' }}>Cost-per-hour</span>
        <span>${menuTutor.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuTutor._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}