import styles from './SubjectList.module.css';

export default function SubjectList({ subjects, activeSub, setActiveSub }) {
  const subs = subjects.map(sub =>
    <li
      key={sub}
      className={sub === activeSub ? styles.active : ''}
      // FYI, the below will also work, but will give a warning
      // className={sub === activeSub && 'active'}
      onClick={() => setActiveSub(sub)}
    >
      {sub}
    </li>
  );
  return (
    <ul className={styles.SubjectList}>
      {subs}
    </ul>
  );
}