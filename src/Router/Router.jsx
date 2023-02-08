import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash/Splash";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SingIn";
import ToDoList from "../pages/ToDoList/ToDoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
