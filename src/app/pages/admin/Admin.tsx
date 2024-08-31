import { Route, Routes } from 'react-router-dom';
import Lesson from '../lessons/lesson/lesson';
import Lessons from '../lessons/lessons';
import Sentence from '../sentences/sentence/sentence';
import Sentences from '../sentences/sentences';
import Word from '../words/word/word';
import Words from '../words/words';
import styles from './Admin.module.scss';

export function Admin() {
  return (
    <div className={styles.admin}>
      <div className={styles.navigation}>
        <a href="/admin/lessons">Lessons</a>
        <a href="/admin/words">Words</a>
        <a href="/admin/sentences">Sentences</a>
      </div>
      <div className={styles.main}>

        <Routes>
          <Route path={'lessons/:lessonId'} element={<Lesson />} />
          <Route path='lessons' element={<Lessons />} />

          <Route path='words/:wordId' element={<Word />} />
          <Route path='words/' element={<Words />} />

          <Route path='sentences/:sentenceId' element={<Sentence />} />
          <Route path='sentences/' element={<Sentences />} />
          {/* <Route path='*' element={<Navigate to={'lessons'} />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
