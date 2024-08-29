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
  const [showInverse, setShowReverse] = useState(false);

  const getRandomWord = useCallback(() => {
    const randomIndexes = questionsUtils.getRandomIndexes(data.length);
    const wordList = [
      data[randomIndexes[0]],
      data[randomIndexes[1]],
      data[randomIndexes[2]],
      data[randomIndexes[3]],
    ]
    setShowReverse(Boolean(Math.random()))
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

      <WordWrapper selectedWord={selectedWord} showInverse={showInverse} />
      <OptionList
        options={options}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        selectedWord={selectedWord}
        showInverse={showInverse}

      />

      {
        selectedAnswer &&
        <div >
          <h2 className={styles.examplesHeading}>Examples:</h2>
          <ul className={styles.examples}>
            {selectedWord.examples?.map((example, index) => <li className={styles.exampleSentence} key={index}>{example}</li>)}
          </ul>
          <button className={styles.nextWorkButton} onClick={getRandomWord}>Next Word</button>
        </div>
      }

    </div>
  );
}

export default Question;


interface IWordWrapperProps {
  selectedWord: IData,
  showInverse: boolean;
}
const WordWrapper = (props: IWordWrapperProps) => {
  const { selectedWord, showInverse } = props;
  const text1 = showInverse ? selectedWord.meaning : selectedWord.text;
  const text2 = showInverse ? '' : selectedWord.meaning;


  if (showInverse)
    return (<p className={styles.wordWrapper}>
      <b>
        <span className={styles.word}>{text1}</span>
      </b>
      <br />
      {text2 && <span className={styles.pronunciation}><i>({text2})</i></span>}
    </p>)
}