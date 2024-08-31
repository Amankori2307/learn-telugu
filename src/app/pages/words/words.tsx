import Word from './word/word';
import styles from './words.module.scss';

export function Words() {
  const words = [1, 2, 3, 4, 5];
  return (
    <div className={styles.words}>
      <h1>Words</h1>
      {words.map((word) => <Word key={word} />)}
    </div>
  );
}

export default Words;
