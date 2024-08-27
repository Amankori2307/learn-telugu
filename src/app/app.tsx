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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at index i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
    setOptions(shuffleArray(wordList));
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
