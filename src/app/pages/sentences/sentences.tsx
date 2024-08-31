import styles from './sentences.module.scss';

export function Sentences() {
  const sentences = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.sentences}>
      <h1>Sentences</h1>

      <ul className={styles.list}>
        {sentences.map((sentence) => <li key={sentence} ><a href={`/admin/sentences/${sentence}`}>Sentence {sentence}</a></li>)}
      </ul>
    </div>
  );
}

export default Sentences;
