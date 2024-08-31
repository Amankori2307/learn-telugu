import styles from './lessons.module.scss';

export function Lessons() {
  const lessons = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.lessons}>
      <h1>Lessons</h1>
      <ul className={styles.list}>
        {lessons.map((lesson) => <li key={lesson}><a href={`/admin/lessons/${lesson}`}>Lesson {lesson}</a></li>)}
      </ul>
    </div>
  );
}

export default Lessons;
