import styles from './words.module.scss';

export function Words() {
  const words = [1, 2, 3, 4, 5];
  return (
    <div className={styles.words}>
      <h1>Words</h1>
      <ul className={styles.list}>
        {words.map((word) => <li key={word}><a href={`/admin/words/${word}`}>Word {word}</a></li>)}
      </ul>
    </div>
  );
}

export default Words;
