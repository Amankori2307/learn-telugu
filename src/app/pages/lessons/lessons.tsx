import Lesson from './lesson/lesson';
import styles from './lessons.module.scss';

export function Lessons() {
  const lessons = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.lessons}>
      <h1>Lessons</h1>
      {lessons.map((lesson) => <Lesson key={lesson} />)}
    </div>
  );
}

export default Lessons;
