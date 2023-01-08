import Login from "./component/pages/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./component/pages/Register";
import DashboardStudent from "./component/pages/DashboardStudent";
import DashboardTeacher from "./component/pages/DashboardTeacher";
import BookForm from "./component/bookForm/BookForm";
import ViewBook from "./component/bookForm/ViewBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutTeacher from "./component/layout/LayoutTeacher";
import ViewDetails from "./component/bookForm/ViewDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboardstudent" element={<DashboardStudent />} />
        <Route path="dashboardteacher" element={<DashboardTeacher />} />
        <Route path="addBook" element={<BookForm />} />
        <Route path="viewBook" element={<ViewBook />} />
        <Route path="viewDetails" element={<ViewDetails />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
