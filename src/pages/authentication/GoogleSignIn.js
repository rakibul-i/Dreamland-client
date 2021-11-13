import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="flex justify-center">
      <button
        className="bg-purple-600 text-white px-3 py-1 rounded mt-5"
        onClick={() => signInWithGoogle(location, history)}
      >
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
