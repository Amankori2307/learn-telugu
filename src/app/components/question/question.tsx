import { useCallback, useEffect, useState } from 'react';
import data from '../../../data/data';
import { IData } from '../../../interfaces/data.interfaces';
import questionsUtils from '../../../utils/question.utils';
import OptionList from '../option-list/option-list';
import styles from './question.module.scss';

export function Question() {

  const [selectedWord, setSelectedWord] = useState<IData | null>(null)
  const [options, setOptions] = useState<Array<IData>>([])
  const [selectedAnswer, setSelectedAnswer] = useState<IData | null>(null);


  const getRandomWord = useCallback(() => {
    const randomIndexes = questionsUtils.getRandomIndexes(data.length);
    const wordList = [
      data[randomIndexes[0]],
      data[randomIndexes[1]],
      data[randomIndexes[2]],
      data[randomIndexes[3]],
    ]

    setSelectedWord(wordList[0])
    setOptions(questionsUtils.shuffleArray(wordList));
    setSelectedAnswer(null);
  }, [])

  useEffect(() => {
    getRandomWord();
  }, [getRandomWord])


  if (!selectedWord) return <h1>Loading...</h1>
  return (
    <div className={styles.container}>
      <p className={styles.wordWrapper}>
        <b>
          <span className={styles.word}>{selectedWord.text}</span>
        </b>
        <br />
        {selectedWord.pronunciation && <span className={styles.pronunciation}><i>({selectedWord.pronunciation})</i></span>}
      </p>

      <OptionList
        options={options}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        selectedWord={selectedWord}

      />

      {
        selectedAnswer && <div>

          <ul>
            {selectedWord.examples?.map((example, index) => <li className={styles.exampleSentence} key={index}>{example}</li>)}
          </ul>
          <button className={styles.nextWorkButton} onClick={getRandomWord}>Next Word</button>
        </div>
      }

    </div>
  );
}

export default Question;
