import { IData } from '../../../interfaces/data.interfaces';
import styles from './option-list.module.scss';
import Option from './option/option';

export interface IOptionListProps {
  options: Array<IData>;
  selectedAnswer: IData | null;
  setSelectedAnswer: (value: IData) => void;
  selectedWord: IData;
}

export function OptionList(props: IOptionListProps) {
  const { options, selectedAnswer, setSelectedAnswer, selectedWord } = props;

  return (
    <ul className={styles.optionList}>
      {options.map((option, index) => <Option
        key={index}
        option={option}
        selectedAnswer={selectedAnswer}
        selectedWord={selectedWord}
        setSelectedAnswer={setSelectedAnswer}

      />)}
    </ul>
  );
}

export default OptionList;
