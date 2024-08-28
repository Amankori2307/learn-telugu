import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.scss';
import data from '../data/data';
import { IData } from 'src/interfaces/data.interfaces';


export function App() {
  const [selectedWord, setSelectedWord] = useState<IData | null>(null)
  const [options, setOptions] = useState<Array<IData>>([])
  const [selectedAnswer, setSelectedAnswer] = useState<IData | null>(null);
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

  function shuffleArray(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const getRandomWork = useCallback(() => {
    const randomIndexes = getRandomIndexes();
    const wordList = [
      data[randomIndexes[0]],
      data[randomIndexes[1]],
      data[randomIndexes[2]],
      data[randomIndexes[3]],
    ]

    setSelectedWord(wordList[0])
    setOptions(shuffleArray(wordList));
    setSelectedAnswer(null);
  }, [])

  useEffect(() => {
    getRandomWork();
  }, [getRandomWork])

  const onOptionClick = (option: IData) => {
    setSelectedAnswer(option)
  }

  const isCorrectOption = (option: IData) => {
    return selectedWord?.meaning === option.meaning;
  }

  const isSelectedOption = (option: IData) => {
    return selectedAnswer?.meaning === option.meaning;
  }

  const getClassName = (option: IData) => {
    if (!selectedAnswer) return ''
    if (isSelectedOption(option)) {
      if (isCorrectOption(option)) return styles.correctSelectedAnswer;
      else return styles.wrongSelectedAnswer;
    } else if (isCorrectOption(option)) return styles.correctAnswer
  }

  if (!selectedWord) return <h1>Loading...</h1>
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <p className={styles.wordWrapper}>
            <b>
              <span className={styles.word}>{selectedWord.text}</span>
              {selectedWord.pronunciation && <span className={styles.pronunciation}><i>({selectedWord.pronunciation})</i></span>}
            </b>
          </p>

          <ul className={styles.optionList}>
            {options.map((option) => <li
              className={`${styles.option} ${getClassName(option)}`}
              key={option.text}
              onClick={() => onOptionClick(option)}
            >{option.meaning}</li>)}
          </ul>

          {
            selectedAnswer && <div>

              <ul>
                {selectedWord.examples?.map((example, index) => <li className={styles.exampleSentence} key={index}>{example}</li>)}
              </ul>
              <button className={styles.nextWorkButton} onClick={getRandomWork}>Next Word</button>
            </div>
          }

        </div>


      </div>
    </div>
  );
}

export default App;
