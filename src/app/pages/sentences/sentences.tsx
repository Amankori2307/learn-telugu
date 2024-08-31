import Sentence from './sentence/sentence';
import styles from './sentences.module.scss';

export function Sentences() {
  const sentences = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.sentences}>
      <h1>Sentences</h1>
      {sentences.map((sentence) => <Sentence key={sentence} />)}
    </div>
  );
}

export default Sentences;
