import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/context";
import Splash from "../pages/Splash/Splash";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SingIn";
import ToDo from "../pages/ToDo/ToDo";

const Router = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {user.access_token ? (
          <Route>
            <Route path="/" element={<Splash />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/todo" element={<ToDo />} />
          </Route>
        ) : (
          <Route>
            <Route path="/" element={<Splash />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
