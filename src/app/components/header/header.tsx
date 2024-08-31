import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <a href="/">Learn Telugu</a>
        <a href="/admin">Admin</a>
      </div>
    </div>
  );
}

export default Header;
