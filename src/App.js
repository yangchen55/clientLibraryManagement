import Login from './component/pages/Login';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Register from './component/pages/Register';
import DashboardStudent from './component/pages/DashboardStudent';
import DashboardTeacher from './component/pages/DashboardTeacher';
import BookForm from './component/bookForm/BookForm';
import ViewBook from './component/bookForm/ViewBook';


function App() {
  return (
    <div className="App">
     <Routes>

<Route  path="/" element={<Login/>} />
 <Route  path="register" element={<Register/>} />
<Route  path="dashboardstudent" element={<DashboardStudent/>} />
<Route  path="dashboardteacher" element={<DashboardTeacher/>} />
<Route  path="addBook" element={<BookForm/>} />
<Route  path="viewBook" element={<ViewBook/>} />



  </Routes>
   
    
    </div>
  );
}

export default App;
