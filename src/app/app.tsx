// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.scss';
import data from '../data/data';
import { IData } from 'src/interfaces/data.interfaces';


export function App() {
  const [selectedWord, setSelectedWord] = useState<IData | null>(null)
  const [options, setOptions] = useState<Array<IData>>([])
  const getRandomIndexes = (count = 4) => {
    const indexes: Array<number> = [];
    let i = 0;
    while (i < count) {
      const totalWords = data.length;
      const maxIndex = totalWords - 1;
      const index = Math.ceil(Math.random() * maxIndex)
      if (!indexes.includes(index)) {
        indexes.push(index);
        i++;
      }
    }
    return indexes;
  }

  useEffect(() => {
    const randomIndexes = getRandomIndexes();
    const wordList = [
      data[randomIndexes[0]],
      data[randomIndexes[1]],
      data[randomIndexes[2]],
      data[randomIndexes[3]],
    ]

    setSelectedWord(wordList[0])
    setOptions(wordList);
  }, [])


  if (!selectedWord) return <h1>Loading...</h1>
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <p className={styles.wordWrapper}>
            <b>
              <span className={styles.word}>{selectedWord.word}</span>
              <span className={styles.pronunciation}><i>({selectedWord.pronunciation})</i></span>
            </b>
          </p>

          <ul className={styles.optionList}>
            {options.map((option) => <li className={styles.option} key={option.word}>{option.meaningInEnglish}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
