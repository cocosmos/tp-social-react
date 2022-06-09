import { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }: any) => {
    if (currentUser.jwt) {
      console.log(currentUser);
      return children;
    } else {
      return <Navigate to="/register" />;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
