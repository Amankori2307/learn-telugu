import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Admin from './pages/admin/Admin';
import Home from './pages/home/home';


export function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App;
