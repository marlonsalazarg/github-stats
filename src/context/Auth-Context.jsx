import { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../services/auth-service";
import { createUser, getUser, updateUser } from "../services/user-service";
import { tokenKey } from "../config";
import { LoaderCustom } from "../components/LoaderCustom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    getUser()
      .then((userData) => {
        setUser(userData);
        setIsLoadingUser(false); // Cuando se carga el usuario, establecemos isLoadingUser en false
      })
      .catch((error) => {
        console.log(error);
        setIsLoadingUser(false);
      });
  }, []);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  function update(userData) {
    updateUser(userData).then(setUser).catch(console.log);
  }

  function logout() {
    auth.logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      setUser(null);
    });
  }

  if (isLoadingUser) return <LoaderCustom />;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        update,
        isLoadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
