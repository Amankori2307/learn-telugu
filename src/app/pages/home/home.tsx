import Question from '../../components/question/question';
import styles from './home.module.scss';


export function Home() {


  return (
    <div className={styles.mainWrapper}>
      <div className={styles.containerWrapper}>
        <Question />
      </div>
    </div>
  );
}

export default Home;
