import { Navigate, Route, Routes } from 'react-router-dom';
import Lessons from '../lessons/lessons';
import Sentences from '../sentences/sentences';
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
          <Route path='lessons/*' element={<Lessons />} />
          <Route path='words/*' element={<Words />} />
          <Route path='sentences/*' element={<Sentences />} />
          <Route path='*' element={<Navigate to={'lessons'} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
