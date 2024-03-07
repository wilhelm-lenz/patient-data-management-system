import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/loginPage/Login";
import Registration from "./pages/registerPage/Registration";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(null);

  const location = useLocation().pathname.split("/")[1];
  console.log(location);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            !login && location !== "signup" ? (
              <Navigate to="/login" />
            ) : (
              <Dashboard onLogin={setLogin} />
            )
          }
        />
        <Route
          path="/login"
          element={
            login ? (
              <Navigate to="/" />
            ) : (
              <Login login={login} onLogin={setLogin} />
            )
          }
        />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
