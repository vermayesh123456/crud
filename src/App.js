
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import { HashRouter,Routes, Route } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import Editstudent from './components/Editstudent';

function App() {
  return (
    <div class="container">
      <HashRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<CreateStudent/>}/>
          <Route path='/create-student' element={<CreateStudent/>}/>
          <Route path='/student-list' element={<StudentList/>}/>
          <Route path="/edit-student/:id" element={<Editstudent />}/>
        </Routes>
      </HashRouter>
    </div>
   
  );
}

export default App;
