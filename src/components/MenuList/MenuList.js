import styles from './MenuList.module.css';
import MenuListTutor from '../MenuListTutor/MenuListTutor';

export default function MenuList({ menuTutors, handleAddToOrder }) {
  const tutors = menuTutors.map(tutor =>
    <MenuListTutor
      key={tutor._id}
      handleAddToOrder={handleAddToOrder}
      menuTutor={tutor}
    />
  );
  return (
    <main className={styles.MenuList}>
      {tutors}
    </main>
  );
}