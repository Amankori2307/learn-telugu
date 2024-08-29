import { IData } from '../../../../interfaces/data.interfaces';
import styles from './option.module.scss';


export interface IOptionProps {
  option: IData;
  selectedAnswer: IData | null;
  setSelectedAnswer: (value: IData) => void;
  selectedWord: IData;
  showInverse: boolean;
}
export function Option(props: IOptionProps) {
  const { option, selectedAnswer, setSelectedAnswer, selectedWord, showInverse } = props;
  const textToShow = showInverse ? option.text : option.meaning;

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
  return (
    <li
      className={`${styles.option} ${getClassName(option)}`}
      key={option.text}
      onClick={() => onOptionClick(option)}
    >{textToShow}</li>
  );
}

export default Option;
