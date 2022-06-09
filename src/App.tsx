import { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import { User } from "./types/interface";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage";
import { Container } from "@mui/material";

function App() {
  const { currentUser } = useContext(AuthContext);
  const [getUsers, setGetUsers] = useState<User[]>([
    { id: 0, firstname: "", lastname: "", email: "", username: "", bio: "" },
  ]);
  const ProtectedRoute = ({ children }: any) => {
    if (currentUser.jwt) {
      return children;
    } else {
      return <Navigate to="/register" />;
    }
  };

  const options = {
    url: "https://strapi-crea.jcloud-ver-jpc.ik-server.com/users",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${currentUser.jwt}`,
    },
  };

  const fetchUsers = () => {
    axios(options)
      .then((response) => {
        setGetUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (currentUser.jwt) {
      fetchUsers();
    }
  }, [currentUser]);
  return (
    <Container sx={{ p: 3 }}>
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
          {getUsers.map((user: User) => {
            return (
              <Route
                path={`/user/${user.id}`}
                key={user.id}
                element={
                  <ProtectedRoute>
                    <ProfilePage userData={user} />
                  </ProtectedRoute>
                }
              />
            );
          })}
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
    </Container>
  );
}

export default App;
