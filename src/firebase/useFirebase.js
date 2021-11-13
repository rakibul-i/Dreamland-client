import { useEffect, useState } from "react";
import initializeFirebase from "./initializeFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const history = useHistory();
  const auth = getAuth();

  // register user with email and password
  const registerUser = (email, password, name, location, history) => {
    setLoginError("");
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setUser({ email, displayName: name });
        setError("");
        saveUser(email, name, "POST");
        // update user profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        Swal.fire("Good job!", "Registation Successfully!", "success");
        const destination = location.state?.from || "/";
        history.replace(destination);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // sign in with email and password
  const logInWithEmailAndPassword = (email, password, location, history) => {
    setError("");
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setLoginError("");
        const destination = location.state?.from || "/";
        history.replace(destination);
        Swal.fire("Good job!", "login Successfully!", "success");
      })
      .catch((err) => {
        setLoginError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // sign in with google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, "PUT");
        const destination = location.state?.from || "/";
        history.replace(destination);
        Swal.fire("Good job!", "login Successfully!", "success");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // find admin
  useEffect(() => {
    fetch(`https://dry-gorge-66689.herokuapp.com/users/${user?.email}`)
      .then((response) => response.json())
      .then((data) => setIsAdmin(data.admin));
  }, [user?.email]);

  // observer user
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, [auth]);

  // log out
  const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be log out !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out !",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth).then(() => {
          setUser(null);
          history.push("/");
        });
        Swal.fire("Log out!", "Log out Successfully.", "success");
      }
    });
  };

  // save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };

    fetch("https://dry-gorge-66689.herokuapp.com/users", {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return {
    user,
    isAdmin,
    error,
    loginError,
    isLoading,
    registerUser,
    signInWithGoogle,
    logInWithEmailAndPassword,
    logOut,
  };
};

export default useFirebase;
