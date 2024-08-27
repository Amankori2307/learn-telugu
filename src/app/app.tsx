// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';


export function App() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <p className={styles.wordWrapper}><b><span className={styles.word}>Word</span><span className={styles.pronunciation}><i>(Pronunciation)</i></span></b></p>

          <ul className={styles.optionList}>
            <li className={styles.option}>Option 1</li>
            <li className={styles.option}>Option 2</li>
            <li className={styles.option}>Option 3</li>
            <li className={styles.option}>Option 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
